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

    const iv = crypto.getRandomValues(new Uint8Array(12));
    // return the encrypted content
    const encrypted = await crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv,
        tagLength: 128,
      },
      key,
      new TextEncoder().encode(content),
    );

    return {
      key: await crypto.subtle.exportKey('raw', key),
      encrypted: new Uint8Array(encrypted),
      iv,
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}

/**
 *
 * @param key : the key that should be used to decrypt the content
 * @param encrypted the encrypted content
 * @param iv the initialization vector
 * @returns  the decrypted content
 */
async function decryptAES128GCM(
  key: ArrayBuffer,
  encrypted: Uint8Array,
  iv: Uint8Array,
) {
  try {
    const keyObject = await crypto.subtle.importKey(
      'raw',
      key,
      {
        name: 'AES-GCM',
        length: 256,
      },
      true,
      ['decrypt'],
    );

    const decrypted = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv,
        tagLength: 128,
      },
      keyObject,
      encrypted,
    );

    return new TextDecoder().decode(decrypted);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default { encryptAES128GCM, decryptAES128GCM };
