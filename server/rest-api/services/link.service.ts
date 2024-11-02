import { prisma } from '../../database/prisma';
import utility from '../../utility';
import { IMessageToken } from '../../types';

const findAndDecrypt = async (data: IMessageToken): Promise<string | null> => {
	try {
		await prisma.$connect();

		const message = await prisma.message.findUnique({
			where: {
				id: data.messageId,
			},
			select: {
				content: true,
				id: true,
				createdAt: true,
			},
		});

		if (!message) {
			return null;
		}

		return utility.encryption.decryptAes256cbc(message.content);
	} catch (error) {
		throw error;
	} finally {
		await prisma.$disconnect();
	}
};

export { findAndDecrypt };
