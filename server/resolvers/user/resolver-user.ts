import { Context } from '../../context';

const User = {
  messages: (parent, args, ctx: Context) => {
    const { prisma } = ctx;
    const messages = prisma.message.findMany({
      where: {
        userId: parent.id,
      },
    });
    return messages;
  },
};
export { User };
