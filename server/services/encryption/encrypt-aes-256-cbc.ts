import * as crypto from 'crypto';
import { ENCRYPTION_KEY_256BIT } from '../../config/keys';

/**
 * @description uses the AES-256-CCM Algorithm to encrypt plaintext data
 * @param {string} plainText token that needs to be encrypted
 * @returns {string} encrypted data
 */
function encryptAes256ccm(plainText: string): string {
  // create a random Initialization vector
  const IV = crypto.randomBytes(16);

  // create a cipher
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    ENCRYPTION_KEY_256BIT,
    IV,
  );

  // encrypt data
  let encrypted = cipher.update(plainText, 'utf8', 'hex');

  // Once the cipher.final() method has been called,
  // the Cipher object can no longer be used to encrypt data.
  encrypted += cipher.final('hex');

  // set the buffer to hex for easy transfer
  const buffer = IV.toString('hex');

  // concat the IV to transfer string
  const result = `${encrypted}_IV_${buffer}`;

  return result;
}

export { encryptAes256ccm };
