import { Link } from '@prisma/client';
import { authenticate } from '../../auth/authenticate';
import { Context } from '../../context';

const LinkQuery = {
  /**
   * @escription get all messages of a single user
   * @param parent
   * @param args
   * @param ctx
   * @param info
   */
  async linkByMessage(parent, args, ctx: Context): Promise<Link[]> {
    try {
      const { prisma, req } = ctx;

      authenticate(req);

      return await prisma.link.findMany({
        where: { messageId: args.id },
      });
    } catch (error) {
      return error;
    }
  },
};

export { LinkQuery };
