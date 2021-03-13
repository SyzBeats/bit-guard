import * as bcrypt from 'bcrypt';
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
        throw new Error('The password is too short');
      }
      // hashing to prevent cleartext save
      const hash = await bcrypt.hash(data.password, 12);
      data.password = hash;

      return await prisma.user.create({ data });
    } catch (error) {
      return error;
    }
  },

  /**
   * @description deletes and existing User from the Database
   */
  async deleteUser(parent, args, ctx: Context) {
    try {
      const { prisma } = ctx;
      const { id } = args;
      const deleted = prisma.user.delete({ where: { id } });

      if (!deleted) {
        throw new Error('This user does not exist');
      }

      return deleted;
    } catch (error) {
      return error;
    }
  },
};

export { UserMutation };
