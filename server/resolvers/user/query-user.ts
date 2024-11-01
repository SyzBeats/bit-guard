import * as jwt from 'jsonwebtoken';
import { ApolloError } from 'apollo-server-express';

import { Context } from '../../context';
import { authenticate } from '../../auth/authenticate';
import * as keys from '../../config/keys';
import { verifyPassword } from '../../utility/encryption';

const UserQuery = {
  /**
   * @description
   */
  async currentUser(parent, args, ctx: Context) {
    const { prisma, req } = ctx;

    const user = authenticate(req);

    // query user and all the connected messages
    return prisma.user.findFirst({
      where: { id: user.id },
      include: { Message: true },
    });
  },

  /**
   * Login functionality for users that already have an account.
   * Looks up the user based on the email.
   */
  async loginUser(parent, args, ctx: Context) {
    const { prisma } = ctx;
    const { data } = args;

    const user = await prisma.user.findFirst({
      where: { email: data.email },
    });

    if (!user) {
      throw new ApolloError('Something went wrong');
    }

    const matches = await verifyPassword(data.password, user.password);

    if (!matches) {
      throw new ApolloError('Something went wrong');
    }

    // the user can be serialized to send back to the client
    const userCopy = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    // sign token - after RFC7515
    const token = jwt.sign(userCopy, keys.JWT_TOKEN_SIGNATURE, {
      expiresIn: '8h',
    });

    return { token };
  },
};

export { UserQuery };
