import { UserInputError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

import * as keys from '../../../config/keys';
import { Context } from '../../context';
import { hashPassword } from '../../../utility/encryption';

const UserMutation = {
	/**
	 * @description sign up a user with the passed data
	 * and hash the password with Argon2
	 */
	async signupUser(_, args, ctx: Context) {
		const { prisma } = ctx;
		const { data } = args;

		// check if password is > 8 chars
		if (data.password.length < 8) {
			throw new UserInputError('The password is too short');
		}

		data.password = await hashPassword(data.password);
		data.email = data.email.toLowerCase();

		const user = await prisma.user.create({ data });

		const userCopy = {
			id: user.id,
			email: user.email,
			name: user.name,
		};

		// Sign token - after RFC7515
		const token = jwt.sign(userCopy, keys.JWT_TOKEN_SIGNATURE, {
			expiresIn: '8h',
		});

		return { token };
	},

	/**
	 * @description deletes and existing user from the database
	 */
	async deleteUser(_, args, ctx: Context) {
		const { prisma } = ctx;
		const { id } = args;

		const deleted = await prisma.user.delete({ where: { id } });

		if (!deleted) {
			throw new Error('This user does not exist');
		}

		return deleted;
	},
};

export { UserMutation };
