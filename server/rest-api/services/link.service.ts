import { prisma } from '../../lib/prisma';
import utility from '../../utility';
import { MessageToken } from '../../types';

const findAndDecrypt = async (data: MessageToken): Promise<string | null> => {
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

    // get the Message content
    return utility.encryption.decryptAes256cbc(message.content);
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export { findAndDecrypt };
