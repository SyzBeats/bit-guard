import { Request, Response } from 'express';

import utility from '../../../utility';
import { prisma } from '../../../lib/prisma';
import { LinkMutation } from '../../../resolvers/link';

const createLink = async (req: Request, res: Response): Promise<unknown> => {
  const { challenge } = req.body;

  if (challenge) {
    res.send(utility.slack.resolveChallenge(challenge));

    return;
  }

  // The command is the "slash" word. Text is everything which comes after
  const { command, text } = req.body;

  if (command === '/envite') {
    if (!text) {
      res.send(utility.slack.messageToIssuer('Usage: /envite myCoolPassword'));

      return;
    }

    try {
      await prisma.$connect();

      // encrypt the signal with a random key that is not known by anyone
      const { encrypted, IV, key } = utility.encryption.encryptAes256cbc(text, true);

      // create signal with connection to owner in database
      const signal = await prisma.publicSignal.create({
        data: {
          content: `${encrypted}_IV_${IV}`,
          title: `Secret from ${new Date().toISOString()}`,
        },
      });

      if (!signal) {
        return res.send(utility.slack.messageToIssuer('Signal could not be created'));
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
        return res.send(utility.slack.messageToIssuer('Link for signal could not be created'));
      }

      res.json(utility.slack.messageToChannel(`Secret: ${link}. This link can be opened only once!`));
    } catch (error) {
      return res.send(utility.slack.messageToIssuer(`Something went horribly wrong here. We are sorry!: ${error.message}`));
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default {
  createLink,
};
