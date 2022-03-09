import { ApolloError, UserInputError } from 'apollo-server-express';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as keys from '../../config/keys';
import { Context } from '../../context';

const UserMutation = {
  /**
   * @description sign up a user with the passed data
   * and hash the password with bcrypt
   */
  async signupUser(parent, args, ctx: Context) {
    try {
      const { prisma } = ctx;
      const { data } = args;

      // check if password is > 8 chars
      if (data.password.length < 8) {
        throw new UserInputError('The password is too short');
      }

      // hashing to prevent cleartext save
      const hash = await bcrypt.hash(data.password, 12);

      // pre save adjustments to the data
      data.password = hash;
      data.email = data.email.toLowerCase();

      const user = await prisma.user.create({ data });

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
    } catch (error) {
      console.log(error.message);
      return new ApolloError('Something went wrong signing up. Please contact the administrator');
    }
  },

  /**
   * @description deletes and existing User from the Database
   */
  async deleteUser(parent, args, ctx: Context) {
    try {
      const { prisma } = ctx;
      const { id } = args;

      const deleted = await prisma.user.delete({ where: { id } });

      if (!deleted) {
        throw new Error('This user does not exist');
      }

      return deleted;
    } catch (error) {
      return new ApolloError('Sorry! We were unable to delete this user');
    }
  },
};

export { UserMutation };
