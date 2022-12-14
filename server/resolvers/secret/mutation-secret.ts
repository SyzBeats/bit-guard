import { Message, Signal } from '@prisma/client';
import { ApolloError, UserInputError } from 'apollo-server-express';

import utility from '../../utility';
import { authenticate } from '../../auth/authenticate';
import { Context } from '../../context';
import { ICreateSignalOutput } from '../../typings';
import { LinkMutation } from '../link';

const SecretMutation = {
  /**
   * @protected
   * @description: creates an encrypted message with a random IV and key
   * and connects it to the owner of the message
   */
  async createMessage(parent, args, ctx: Context): Promise<Message> {
    try {
      const { data } = args;
      const { prisma, req } = ctx;
      const token = authenticate(req);

      // encrypt the message
      const { encrypted, IV } = utility.encryption.encryptAes256cbc(data.content);

      // create message with connection to owner in database
      const message = await prisma.message.create({
        data: {
          title: data.title,
          content: `${encrypted}_IV_${IV}`,
          owner: { connect: { id: (token as any).id } },
        },
      });

      return message;
    } catch (error) {
      return error;
    }
  },

  /**
   * @protected
   * @description: creates a new signal link that can be used to send a signal
   * to any recipient.
   */
  async createSignal(parent, args, ctx: Context): Promise<ICreateSignalOutput> {
    try {
      const { data } = args;
      const { prisma, req } = ctx;

      const token = authenticate(req);

      // encrypt the signal with a random key that is not known by anyone
      const { encrypted, IV, key } = utility.encryption.encryptAes256cbc(data.content, true);

      // create signal with connection to owner in database
      const signal = await prisma.signal.create({
        data: {
          content: `${encrypted}_IV_${IV}`,
          title: data.title,
          owner: { connect: { id: (token as any).id } },
        },
      });

      if (!signal) {
        throw new ApolloError('Signal creation failed');
      }

      const linkPayload = {
        data: {
          signalId: signal.id,
          key,
          IV,
        },
      };

      // create a new link with the message
      const link = await LinkMutation.createSignalLink(linkPayload);

      if (!link) {
        throw new ApolloError('Link creation failed');
      }

      return {
        id: signal.id,
        title: signal.title,
        createdAt: signal.createdAt,
        link,
      };
    } catch (error) {
      return error;
    }
  },

  /**
   * @description: creates a public signal. Public signals do not require the user
   * to be authenticated.
   */
  async createPublicSignal(parent, args, ctx: Context): Promise<ICreateSignalOutput> {
    try {
      const { data } = args;
      const { prisma } = ctx;

      // encrypt the signal with a random key that is not known by anyone
      const { encrypted, IV, key } = utility.encryption.encryptAes256cbc(data.content, true);

      // create signal with connection to owner in database
      const signal = await prisma.publicSignal.create({
        data: {
          content: `${encrypted}_IV_${IV}`,
          title: data.title,
        },
      });

      if (!signal) {
        throw new ApolloError('Signal could not be created');
      }

      const linkPayload = {
        data: {
          signalId: signal.id,
          key,
          IV,
        },
      };

      // create a new link with the message
      const link = await LinkMutation.createSignalLink(linkPayload, true);

      if (!link) {
        throw new ApolloError('Link could not be created');
      }

      return {
        id: signal.id,
        title: signal.title,
        createdAt: signal.createdAt,
        link,
      };
    } catch (error) {
      return error;
    }
  },

  /**
   * @protected
   * @description: creates a new message and link that can be used to store
   * a message that is encrypted with a key that is known by the recipient.
   *
   * @todo password protection
   */
  async deleteMessage(parent, args, ctx: Context): Promise<Message> {
    try {
      const { data } = args;
      const { prisma, req } = ctx;

      authenticate(req);

      /**
       * delete all Links related to the message
       * and delete the message itself
       */
      const [, deleted] = await Promise.all([
        prisma.link.deleteMany({
          where: {
            messageId: data.id,
          },
        }),
        prisma.message.delete({
          where: {
            id: data.id,
          },
        }),
      ]);

      return deleted;
    } catch (error) {
      throw new UserInputError('[Error]: Something went wrong deleting this message');
    }
  },

  /**
   * @protected
   * @description: users are still able to see which signals are currently
   * active and not viewed. Therefor as long as the signal has not been viewed, the
   * user should be able to delete it.
   */
  async deleteSignal(parent, args, ctx: Context): Promise<Signal | null> {
    try {
      const { data } = args;
      const { prisma, req } = ctx;

      authenticate(req);

      const deleted = await prisma.signal.delete({
        where: {
          id: data.id,
        },
      });

      return deleted;
    } catch (error) {
      throw new UserInputError('[Error]: Something went wrong deleting this signal');
    }
  },
};

export { SecretMutation };
