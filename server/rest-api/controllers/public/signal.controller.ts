import { prisma } from '../../../lib/prisma';
import utility from '../../../utility';

const decryptAndDestroy = async (req, res) => {
  await prisma.$connect();

  const { id } = req.params;
  const { key } = req.query;

  try {
    // get the secret from the database
    const signal = await prisma.signal.findUnique({
      where: {
        id,
      },
      select: {
        content: true,
        id: true,
        type: true,
        extension: true,
        createdAt: true,
      },
    });

    if (!signal) {
      throw new Error('The signal does not exist');
    }

    if (typeof key !== 'string') {
      return res.status(409).json({ message: 'The provided key needs to be a string' });
    }

    const message = utility.encryption.decryptAes256cbc(signal.content, key?.toString());

    // delete the signal
    await prisma.signal.delete({ where: { id } });

    return res.status(200).json({ message, type: signal.type, extension: signal.extension });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went horribly wrong here. We are sorry!',
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const decryptAndDestroyPublic = async (req, res) => {
  await prisma.$connect();

  const { id } = req.params;
  const { key } = req.query;

  try {
    // get the secret from the database
    const signal = await prisma.publicSignal.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        type: true,
        extension: true,
      },
    });

    if (!signal) {
      throw new Error('The signal does not exist');
    }

    if (typeof key !== 'string') {
      return res.status(409).json({ message: 'The provided key needs to be a string' });
    }

    const message = utility.encryption.decryptAes256cbc(signal.content, key?.toString());

    // delete the signal
    await prisma.publicSignal.delete({ where: { id } });

    return res.status(200).json({ message, title: signal.title, type: signal.type, extension: signal.extension });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went horribly wrong here. We are sorry!',
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export default {
  decryptAndDestroy,
  decryptAndDestroyPublic,
};
