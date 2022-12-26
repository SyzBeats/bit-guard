import { prisma } from '../../lib/prisma';
import utility from '../../utility';
import { MessageToken } from '../../typings';

const findAndDecrypt = async (data: MessageToken) => {
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
      throw new Error('The message does not exist');
    }

    // get the Message content
    const decryptedMessage = utility.encryption.decryptAes256cbc(message.content);

    return decryptedMessage;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export { findAndDecrypt };
