require('isomorphic-fetch');
const { PrismaClient } = require('@prisma/client');

const config = require('./config');
const services = require('./services');

const prisma = new PrismaClient();

exports.rateLimit = async (req, res) => {
  try {
    // return if OPTIONS request
    if (req.method === 'OPTIONS') {
      return res?.status(200)?.send('OK');
    }

    // request body needs to have title and content
    if (!req.body?.title || !req.body?.content) {
      return res?.status(400)?.json({ message: 'Request body must contain title and content' });
    }

    // message payload
    const payLoad = {
      title: req.body.title,
      content: req.body.content,
    };

    // get the user data from the request
    const authToken = req.headers.authorization;
    const nowInMs = new Date().getTime();

    if (!authToken) {
      return res?.status(400)?.json({ message: 'Request body must contain an authorization token' });
    }

    // TODO: decode the token
    const decoded = { email: 'some-jwt-token' };

    // fetch the user with prisma based on email
    // TODO: join the expiration and hitCount to make this query more efficient
    const user = await prisma.user.findFirst({
      where: { email: decoded.email },
      include: {
        RateLimit: true,
      },
    });

    if (!user) {
      return res?.status(400)?.json({ message: 'User does not exist' });
    }

    // fetch expiration and hitCount from the user document
    const expirationInMs = new Date(user.RateLimit[0].expire).getTime();

    const hitCount = user.RateLimit[0].hitCount;

    // the expiration date is over, the user can hit the API again
    if (nowInMs > expirationInMs) {
      await services.api.resetHitCount(document, nowInMs);

      const link = await services.api.hitEnviteAPI(payLoad);

      // return with a response from envite api
      return res.status(200).json({ message: link });
    }

    // currently handled with a config but will change to plans in the future
    if (hitCount >= config.HIT_LIMIT) {
      return res.status(429).json({ message: 'Too many requests' });
    }

    await services.api.updateHitCount(document);

    const link = await services.api.hitEnviteAPI(payLoad);

    // return with a response from envite api
    return res.json({ message: link });

    // TODO hit the envite API to get the secret
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: `Something went wrong: ${err.message}` });
  }
};
