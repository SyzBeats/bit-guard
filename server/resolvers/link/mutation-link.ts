import * as jwt from 'jsonwebtoken';
import { Context } from '../../context';
import { JWT_TOKEN_SIGNATURE } from '../../config/keys';
import { encryptAes256ccm } from '../../util/encryption/encrypt-aes-256-cbc';
import { getHoursUntil } from '../../util/dateAndTime/time-until-date';

const LinkMutation = {
  async createLink(parent, args, ctx: Context) {
    try {
      // parent can be used in case called by Message query
      const payLoad = args.data;
      const { prisma } = ctx;
      let timeUntilExpiry: null | number = null;

      // set the expiry in hour format, calculated
      if (payLoad?.expiry) {
        timeUntilExpiry = getHoursUntil(payLoad.expiry);
      }
      // if not given, set default value, 3 hours
      const expiryInformation = {
        expiresIn: payLoad?.expiry ? `${timeUntilExpiry}h` : '3h',
      };

      /**
       * the token contains the expiry time (if given) and
       * the messageID which the link is connected to also, by default the expiry
       * is set to 3 hours
       */
      const token = jwt.sign(payLoad, JWT_TOKEN_SIGNATURE, expiryInformation);

      /**
       *
       */
      const encryptedToken = encryptAes256ccm(token);

      // store link in DB
      await prisma.link.create({
        data: {
          message: { connect: { id: payLoad.messageId } },
          expiry: new Date(payLoad?.expiry) ?? null,
          content: encryptedToken,
        },
      });

      // link contains message ID, expiry
      return {
        content: `http://localhost:4000?token=${encryptedToken}`,
        expiry: payLoad?.expiry ?? null,
      };
    } catch (error) {
      return error;
    }
  },

  /**
   * @description deletes a link from the database, based on the ID
   * @param parent
   * @param args
   * @param ctx
   * @param info
   */
  async deleteLink(parent, args, ctx: Context) {
    try {
      // get link ID
      const { data } = args;
      const { prisma } = ctx;
      // delete link from DB

      const link = await prisma.link.delete({ where: { id: data.id } });
      return { data: link.id, expiry: link?.expiry ?? null };
    } catch (error) {
      return error;
    }
  },
};

export { LinkMutation };
