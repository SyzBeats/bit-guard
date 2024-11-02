import { IMessageToken } from '../../types';
import utility from '../../utility';
import { getMessageById } from '../repositories/link-repository';

/**
 * Finds a message by ID and decrypts its content.
 * @param {IMessageToken} data - An object containing the `messageId`.
 * @returns {Promise<string | null>} The decrypted content of the message if found, otherwise null.
 */
const findAndDecrypt = async (data: IMessageToken): Promise<string | null> => {
	// Fetch the encrypted message content from the repository
	const encryptedContent = await getMessageById(data);

	// Return decrypted content if message was found, otherwise null
	return encryptedContent ? utility.encryption.decryptAes256cbc(encryptedContent) : null;
};

export { findAndDecrypt };


