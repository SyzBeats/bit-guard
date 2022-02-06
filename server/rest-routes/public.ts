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

const client = new PrismaClient();

router.get('/link/:cipher', async (req, res) => {
  try {
    const { cipher } = req.params;

    const token = decryptAes256cbc(cipher);

    const data: MessageToken | object | string = jwt.verify(
      token,
      JWT_TOKEN_SIGNATURE,
    );

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
    return res
      .status(500)
      .json({ message: 'Something went wrong, we are sorry!' });
  } finally {
    await client.$disconnect();
  }
});

/**
 * @GET /public/signal/:id
 * @description one time signals will be decrypted and destroyed
 */
router.get('/signal/:id', async (req, res) => {
  // get the query string from the url
  // get the cipher key

  const { id } = req.params;
  const { key, IV } = req.query;

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

    if (!signal) throw new Error('The signal does not exist');
  } catch (error) {
    console.log(error);
    return error;
  }
});

export default router;
