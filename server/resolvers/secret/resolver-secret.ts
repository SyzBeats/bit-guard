import { Context } from '../../context';

const Message = {
  links: async (parent, args, context: Context) => {
    const { prisma } = context;

    // return only links that belong to the parent
    const links = await prisma.link.findMany({
      where: { messageId: parent.id },
    });

    return links;
  },
};
export { Message };
