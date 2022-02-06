import * as crypto from 'crypto';
import { ENCRYPTION_KEY_256BIT } from '../../config/keys';
import { IencryptAes256cbcOutput } from '../../util/typings';

// generate a random encryption key with 16 bytes
// as it is encoded to hexadecimal, it is 32 characters long
// and can be used as a key for the encryption
function generateEncryptrionKey(): string {
  return crypto.randomBytes(16).toString('hex');
}

/**
 * @description uses the AES-256-CCM Algorithm to encrypt plaintext data
 * @param plainText token that needs to be encrypted
 * @param randomKey in case of one time use
 * @returns encrypted data
 */
function encryptAes256cbc(plainText: string, randomKey: boolean = false): IencryptAes256cbcOutput {
  // create a random Initialization vector
  const IV = crypto.randomBytes(16);

  const key = randomKey ? generateEncryptrionKey() : ENCRYPTION_KEY_256BIT;

  console.log(key);

  // create a cipher
  const cipher = crypto.createCipheriv('aes-256-cbc', key, IV);

  // encrypt data
  let encrypted = cipher.update(plainText, 'utf8', 'hex');

  // Once the cipher.final() method has been called,
  // the Cipher object can no longer be used to encrypt data.
  encrypted += cipher.final('hex');

  // set the buffer to hex for easy transfer
  const buffer = IV.toString('hex');

  const result = {
    encrypted,
    IV: buffer,
    key,
  };

  return result;
}

/**
 * @description uses the AES-256-CCM Algorithm to decrypt plaintext data
 * @param plainText token that needs to be decrypted
 * @param key in case of one time use, the key is transferred
 * @returns {string} decrypted data
 */
function decryptAes256cbc(cipher: string, key: string | undefined = undefined): string {
  // split the two hex encoded strings
  const [data, ivHex] = cipher.split('_IV_');

  const encryptionKey = key || ENCRYPTION_KEY_256BIT;

  // create a buffer as the current IV is encoded
  const IV = Buffer.from(ivHex, 'hex');

  // decipher the data
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, IV);

  // Updates the cipher with data. If the inputEncoding argument is given,
  // the data argument is a string using the specified encoding.
  const decrypt = decipher.update(data, 'hex', 'utf8');

  // Once the decipher.final() method has been called,
  // the Decipher object can no longer be used to decrypt data.
  const result = decrypt + decipher.final('utf8');

  return result;
}

export { decryptAes256cbc, encryptAes256cbc };
