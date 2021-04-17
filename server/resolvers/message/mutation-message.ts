import { Message } from '@prisma/client';
import { authenticate } from '../../auth/authenticate';
import { Context } from '../../context';
import { encryptAes256ccm } from '../../services/encryption/encrypt-aes-256-cbc';

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
      const encryptedContent = encryptAes256ccm(data.content);

      // create message with connection to owner in database
      const message = await prisma.message.create({
        data: {
          content: encryptedContent,
          owner: { connect: { id: (token as any).id } },
        },
      });

      return message;
    } catch (error) {
      return error;
    }
  },

  async deleteMessage(parent, args, ctx: Context): Promise<Message> {
    try {
      /**
       * get message by ID
       * delete message from database
       * delete all links related to the database
       * return the deleted message
       */
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
      throw new Error(error.message);
    }
  },
};

export { MessageMutation };
