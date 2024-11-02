import { IMessageToken } from '../../types';
import utility from '../../utility';
import { linkRepository } from '../repositories';

/**
 * Finds a message by ID and decrypts its content.
 */
const findAndDecrypt = async (data: IMessageToken): Promise<string | null> => {
	// Fetch the encrypted message content from the repository
	const encryptedContent = await linkRepository.getMessageById(data);

	// Return decrypted content if message was found, otherwise null
	return encryptedContent ? utility.encryption.decryptAes256cbc(encryptedContent) : null;
};

export { findAndDecrypt };


