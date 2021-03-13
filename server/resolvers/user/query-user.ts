import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ApolloError } from 'apollo-server-express';
import { Context } from '../../context';
import { authenticate } from '../../auth/authenticate';
import { JWT_TOKEN_SIGNATURE } from '../../config/keys';

const UserQuery = {
  /**
   * @description
   */
  async currentUser(parent, args, ctx: Context) {
    try {
      const { prisma, req } = ctx;
      const token = authenticate(req);

      // query user and all the connected messages
      const user = await prisma.user.findFirst({
        where: { id: (token as any).id },
        include: { Message: true },
      });

      return user;
    } catch (error) {
      return error;
    }
  },

  /**
   * @description
   */
  async loginUser(parent, args, ctx: Context) {
    try {
      const { prisma } = ctx;
      const { data } = args;

      const user = await prisma.user.findFirst({
        where: { email: data.email },
      });

      if (!user) {
        throw new ApolloError('Something went wrong');
      }

      // check if password matches
      const matches = await bcrypt.compare(data.password, user.password);

      if (!matches) {
        throw new ApolloError('Something went wrong');
      }

      // matches and can be serialized
      const userCopy = {
        id: user.id,
        email: user.email,
        name: user.name,
      };

      // sign token - after RFC7515
      const token = jwt.sign(userCopy, JWT_TOKEN_SIGNATURE, {
        expiresIn: '8h',
      });
      return { token };
    } catch (error) {
      return error;
    }
  },
};

export { UserQuery };
