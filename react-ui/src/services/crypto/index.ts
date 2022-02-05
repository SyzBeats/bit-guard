/**
 * @file contains all crypto functions for the frontend
 *
 * @author Simeon Zimmermann
 */

/**
 *
 * @param content : the content that should be encrypted;
 * @returns an object containing the encrypted content and the key
 */
async function encryptAES128GCM(content: string) {
  try {
    // use web crypto api to generate a random key
    const key = await crypto.subtle.generateKey(
      {
        name: 'AES-GCM',
        length: 256,
      },
      true,
      ['encrypt', 'decrypt'],
    );

    // return the encrypted content
    const encrypted = await crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: crypto.getRandomValues(new Uint8Array(12)),
        tagLength: 256,
      },
      key,
      new TextEncoder().encode(content),
    );

    return {
      key: await crypto.subtle.exportKey('raw', key),
      encrypted: new Uint8Array(encrypted),
    };
  } catch (e) {
    return null;
  }
}

function decryptAES128GCM(key: Uint8Array, encrypted: Uint8Array) {
  return crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: encrypted.slice(0, 12),
      tag: encrypted.slice(12, 28),
    },
    crypto.getRandomValues(key),
    encrypted.slice(28),
  );
}
