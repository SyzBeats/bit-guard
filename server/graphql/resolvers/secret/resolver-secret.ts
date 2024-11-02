import { Context } from '../../context';

const Message = {
	links: async (parent, args, context: Context) => {
		const { prisma } = context;

		// return only links that belong to the parent
		return prisma.link.findMany({
			where: { messageId: parent.id },
		});
	},
};
export { Message };
