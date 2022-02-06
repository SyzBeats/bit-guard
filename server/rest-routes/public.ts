import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { JWT_TOKEN_SIGNATURE } from '../config/keys';
import { decryptAes256cbc } from '../services/encryption';
import { MessageToken } from '../util/typings';
import { isMessageToken } from '../util/typings/typeguards';

const router = express.Router({ caseSensitive: false });

/**
 * @GET /public/link/:token
 * @description access for non logged in users to links that
 * they have obtained
 */

router.get('/link/:cipher', async (req, res) => {
  const client = new PrismaClient();

  try {
    const { cipher } = req.params;

    const token = decryptAes256cbc(cipher);

    const data: MessageToken | object | string = jwt.verify(token, JWT_TOKEN_SIGNATURE);

    if (!isMessageToken(data)) {
      return res.status(500).json({ message: 'something went wrong' });
    }

    const { messageId } = data;

    const message = await client.message.findUnique({
      where: {
        id: messageId,
      },
      select: {
        content: true,
        id: true,
        createdAt: true,
      },
    });

    if (!message) throw new Error('The message does not exist');

    // get the Message content
    const decryptedMessage = decryptAes256cbc(message.content);

    return res.status(200).json({ message: decryptedMessage });
  } catch (error) {
    return res.status(500).json({
      message: `Something went horribly wrong here. We are sorry! Error: ${error.message}`,
    });
  } finally {
    await client.$disconnect();
  }
});

/**
 * @GET /public/signal/:id
 * @description one time signals will be decrypted and destroyed
 */
router.get('/signal/:id', async (req, res) => {
  const client = new PrismaClient();

  const { id } = req.params;
  const { key } = req.query;

  try {
    // get the secret from the database
    const signal = await client.signal.findUnique({
      where: {
        id,
      },
      select: {
        content: true,
        id: true,
        createdAt: true,
      },
    });

    if (!signal) {
      throw new Error('The signal does not exist');
    }

    if (typeof key !== 'string') {
      return res.status(409).json({ message: 'The initialization vector is not a string' });
    }

    const decryptedMessage = decryptAes256cbc(signal.content, key?.toString());

    return res.status(200).json({ message: decryptedMessage });
  } catch (error) {
    return res.status(500).json({
      message: `Something went horribly wrong here. We are sorry! Error: ${error.message}`,
    });
  } finally {
    await client.$disconnect();
  }
});

export default router;
