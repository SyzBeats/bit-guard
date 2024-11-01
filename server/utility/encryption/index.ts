import * as crypto from 'crypto';

import * as keys from '../../config/keys';
import { IencryptAes256cbcOutput } from '../../typings';

// generate a random encryption key with 16 bytes
// as it is encoded to hexadecimal, it is 32 characters long
// and can be used as a key for the encryption
function generateEncryptionKey(): string {
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

  const key = randomKey ? generateEncryptionKey() : keys.ENCRYPTION_KEY_256BIT;

  // create a cipher
  const cipher = crypto.createCipheriv('aes-256-cbc', key, IV);

  // encrypt data
  let encrypted = cipher.update(plainText, 'utf8', 'hex');

  // Once the cipher.final() method has been called,
  // the Cipher object can no longer be used to encrypt data.
  encrypted += cipher.final('hex');

  // set the buffer to hex for easy transfer
  const buffer = IV.toString('hex');

  return {
    encrypted,
    IV: buffer,
    key,
  };
}

/**
 * @description uses the AES-256-CCM Algorithm to decrypt plaintext data
 * @param cipher The cipher used for decryption
 * @param key in case of one time use, the key is transferred
 * @returns {string} decrypted data
 */
function decryptAes256cbc(cipher: string, key: string | undefined = undefined): string {
  // split the two hex encoded strings
  const [data, ivHex] = cipher.split('_IV_');

  const encryptionKey = key || keys.ENCRYPTION_KEY_256BIT;

  // create a buffer as the current IV is encoded
  const IV = Buffer.from(ivHex, 'hex');

  // decipher the data
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, IV);

  // Updates the cipher with data. If the inputEncoding argument is given,
  // the data argument is a string using the specified encoding.
  const decrypt = decipher.update(data, 'hex', 'utf8');

  // Once the decipher.final() method has been called,
  // the Decipher object can no longer be used to decrypt data.
  return decrypt + decipher.final('utf8');
}

export { decryptAes256cbc, encryptAes256cbc };
