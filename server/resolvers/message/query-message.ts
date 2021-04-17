import { authenticate } from '../../auth/authenticate';
import { Context } from '../../context';
import { decryptAes256cbc } from '../../services/encryption/decrypt-aes-256-cbc';

const MessageQuery = {
  /**
   * @description get as message by its id and decrypts the content
   * to display it to the user
   * @param parent
   * @param args
   * @param ctx
   * @param info
   */
  async messageById(parent, args, ctx: Context) {
    try {
      const { prisma } = ctx;
      const { data } = args;

      // gain encrypted message from database
      const encryptedMessage = await prisma.message.findFirst({
        where: { id: data.id },
      });

      if (!encryptedMessage) {
        throw new Error('Could not encrypt this message');
      }
      // decrypt the message and get the result
      const decryptedMessage = decryptAes256cbc(encryptedMessage.content);

      // assign values to new message variable
      const message = {
        ...encryptedMessage,
        content: decryptedMessage,
      };

      return message;
    } catch (error) {
      return error;
    }
  },
  /**
   * @escription get all messages of a single user
   * @param parent
   * @param args
   * @param ctx
   * @param info
   */
  async messagesByUser(parent, args, ctx: Context) {
    try {
      const { prisma, req } = ctx;
      const user = authenticate(req);

      return await prisma.message.findMany({
        where: { userId: (user as any).id },
      });
    } catch (error) {
      return error;
    }
  },
};

export { MessageQuery };
