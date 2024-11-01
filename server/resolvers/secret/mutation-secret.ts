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
    const { data } = args;
    const { prisma, req } = ctx;

    const user = authenticate(req);

    // Encrypt the message
    const { encrypted, IV } = utility.encryption.encryptAes256cbc(data.content);

    // create message with connection to owner in database
    return prisma.message.create({
      data: {
        title: data.title,
        content: `${encrypted}_IV_${IV}`,
        owner: { connect: { id: user.id } },
      },
    });
  },

  /**
   * @protected
   * @description: creates a new message and link that can be used to store
   * a message that is encrypted with a key that is known by the recipient.
   */
  async deleteMessage(parent, args, ctx: Context): Promise<Message> {
    const { data } = args;
    const { prisma, req } = ctx;

    authenticate(req);

    /**
     * delete all Links related to the message
     * and delete the message itself
     */
    // Todo: should be transactional
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
  },

  /**
   * @protected
   * @description: creates a new signal link that can be used to send a signal
   * to any recipient.
   */
  async createSignal(parent, args, ctx: Context): Promise<ICreateSignalOutput> {
    const { data } = args;
    const { prisma, req } = ctx;

    if (!data) {
      throw new UserInputError('Cannot create signal without input information');
    }

    const user = authenticate(req);

    // encrypt the signal with a random key that is not known by anyone
    const { encrypted, IV, key } = utility.encryption.encryptAes256cbc(data.content, true);

    const type = data.type || 'text';
    const extension = data.extension || 'txt';

    // create signal with connection to owner in database
    const signal = await prisma.signal.create({
      data: {
        content: `${encrypted}_IV_${IV}`,
        title: data.title,
        owner: { connect: { id: user.id } },
        type,
        extension,
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
  },

  /**
   * @protected
   * @description: users are still able to see which signals are currently
   * active and not viewed. Therefor as long as the signal has not been viewed, the
   * user should be able to delete it.
   */
  async deleteSignal(parent, args, ctx: Context): Promise<Signal | null> {
    const { data } = args;
    const { prisma, req } = ctx;

    if (!data.id) {
      throw new UserInputError('No ID was provided to delete signal');
    }

    authenticate(req);

    return prisma.signal.delete({
      where: {
        id: data.id,
      },
    });
  },

  /**
   * @description: creates a public signal. Public signals do not require the user
   * to be authenticated.
   */
  async createPublicSignal(parent, args, ctx: Context): Promise<ICreateSignalOutput> {
    const { data } = args;
    const { prisma } = ctx;

    // encrypt the signal with a random key that is not known by anyone
    const { encrypted, IV, key } = utility.encryption.encryptAes256cbc(data.content, true);

    const type = data.type || 'text';
    const extension = data.extension || 'txt';

    // create signal with connection to owner in database
    const signal = await prisma.publicSignal.create({
      data: {
        content: `${encrypted}_IV_${IV}`,
        title: data.title,
        type,
        extension,
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
  },
};

export { SecretMutation };
