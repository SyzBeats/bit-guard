import * as jwt from 'jsonwebtoken';

import * as keys from '../../../config/keys';
import { prisma } from '../../../lib/prisma';
import { decryptAes256cbc } from '../../../services/encryption';
import { MessageToken } from '../../../util/typings';
import { isMessageToken } from '../../../util/typings/typeguards';

const decipher = async (req, res) => {
  await prisma.$connect();

  try {
    const { cipher } = req.params;

    const token = decryptAes256cbc(cipher);

    const data: MessageToken | object | string = jwt.verify(token, keys.JWT_TOKEN_SIGNATURE);

    if (!isMessageToken(data)) {
      return res.status(500).json({ message: 'something went wrong' });
    }

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
    const decryptedMessage = decryptAes256cbc(message.content);

    return res.status(200).send(decryptedMessage);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went horribly wrong here. We are sorry!',
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export default {
  decipher,
};
