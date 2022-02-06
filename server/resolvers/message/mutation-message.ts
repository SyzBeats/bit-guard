import { Message } from '@prisma/client';
import { authenticate } from '../../auth/authenticate';
import { Context } from '../../context';
import { encryptAes256cbc } from '../../services/encryption';
import { ICreateSignalOutput } from '../../util/typings';
import { LinkMutation } from '../link';

const MessageMutation = {
  /**
   * @description: creates an encrypted message with a random IV
   * the key is
   * @param parent
   * @param args
   * @param ctx
   * @param info
   */
  async createMessage(parent, args, ctx: Context): Promise<Message> {
    try {
      const { data } = args;

      const { prisma, req } = ctx;

      const token = authenticate(req);

      // encrypt the message
      const { encrypted, IV } = encryptAes256cbc(data.content);

      // create message with connection to owner in database
      const message = await prisma.message.create({
        data: {
          content: `${encrypted}_IV_${IV}`,
          owner: { connect: { id: (token as any).id } },
        },
      });

      return message;
    } catch (error) {
      return error;
    }
  },

  async createSignal(parent, args, ctx: Context): Promise<ICreateSignalOutput> {
    try {
      const { data } = args;
      const { prisma, req } = ctx;
      const token = authenticate(req);

      // encrypt the signal with a random key that is not known by anyone
      const { encrypted, IV, key } = encryptAes256cbc(data.content, true);

      // create signal with connection to owner in database
      const signal = await prisma.signal.create({
        data: {
          content: `${encrypted}_IV_${IV}`,
          owner: { connect: { id: (token as any).id } },
        },
      });

      if (!signal) {
        throw new Error('Signal could not be created');
      }

      const linkPayload = {
        data: {
          signalId: signal.id,
          key,
          IV,
        },
      };

      // create a new link with the message
      const link = await LinkMutation.createSignalLink(parent, linkPayload, ctx);

      if (!link) {
        throw new Error('Link could not be created');
      }

      return link;
    } catch (error) {
      return error;
    }
  },

  async deleteMessage(parent, args, ctx: Context): Promise<Message> {
    try {
      const { data } = args;
      const { prisma, req } = ctx;
      authenticate(req);

      /**
       * delete all Links related to the message
       * and delete the message itself
       */
      const [, deleted] = await Promise.all([
        prisma.link.deleteMany({
          where: {
            messageId: data.id,
          },
        }),
        prisma.message.delete({
          where: {
            id: data.id,
          },
        }),
      ]);

      return deleted;
    } catch (error) {
      return error;
    }
  },
};

export { MessageMutation };
