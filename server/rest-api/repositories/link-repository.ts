// repository-link.ts
import { prisma } from '../../database/prisma';
import { IMessageToken } from '../../types';

/**
 * Retrieves a message by its ID and returns the content if found.
 * @param {IMessageToken} data - An object containing the `messageId`.
 * @returns {Promise<string | null>} The content of the message if found, otherwise null.
 * Handles errors gracefully and ensures the database connection is properly managed.
 */
const getMessageById = async (data: IMessageToken): Promise<string | null> => {
	try {
		await prisma.$connect();

		const message = await prisma.message.findUnique({
			where: {
				id: data.messageId,
			},
			select: {
				content: true,
			},
		});

		return message ? message.content : null;
	} catch (error) {
		console.error('Error retrieving message by ID:', error);
		throw new Error('Failed to retrieve message from the database');
	} finally {
		await prisma.$disconnect();
	}
};

export { getMessageById };