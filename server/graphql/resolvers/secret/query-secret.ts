import { authenticate } from '../../../auth/authenticate';
import { Context } from '../../context';
import utility from '../../../utility';

const SecretQuery = {
	/**
	 * @description get as message by its id and decrypts the content
	 * to display it to the user
	 */
	async messageById(_, args, ctx: Context) {
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
		const decryptedMessage = utility.encryption.decryptAes256cbc(encryptedMessage.content);

		// assign values to new message variable
		return {
			...encryptedMessage,
			content: decryptedMessage,
		};
	},

	/**
	 * @protected
	 * @escription get all messages of a single user
	 */
	async messagesByUser(_, args, ctx: Context) {
		const { prisma, req } = ctx;

		const user = authenticate(req);

		return prisma.message.findMany({
			where: { userId: user.id },
		});
	},

	/**
	 * @protected
	 * @description
	 */
	async signalsByUser(_, args, ctx: Context) {
		const { prisma, req } = ctx;

		const user = authenticate(req);

		return prisma.signal.findMany({
			where: { userId: user.id },
		});
	},
};

export { SecretQuery };
