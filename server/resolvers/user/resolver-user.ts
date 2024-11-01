import { Context } from '../../context';

const User = {
  messages: (parent, args, ctx: Context) => {
    const { prisma } = ctx;

    return prisma.message.findMany({
      where: {
        userId: parent.id,
      },
    });
  },
};

export { User };
