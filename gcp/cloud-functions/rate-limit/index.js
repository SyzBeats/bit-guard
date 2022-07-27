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

    const payLoad = {
      title: req.body.title,
      content: req.body.content,
    };

    // get the users email from the id token
    const email = req.body?.email;
    const nowInMs = new Date().getTime();

    if (!email) {
      return res?.status(400)?.json({ message: 'Request body must contain the users email address' });
    }

    // fetch the user with prisma based on sub or email
    // TODO: join the expiration and hitCount to make this query more efficient
    const user = await prisma.user.findFirst({
      where: { email },
      include: {
        RateLimit: true,
      },
    });

    if (user) {
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

      if (hitCount >= config.HIT_LIMIT) {
        return res.status(429).json({ message: 'Too many requests' });
      }

      await services.api.updateHitCount(document);

      const link = await services.api.hitEnviteAPI(payLoad);

      // return with a response from envite api
      return res.json({ message: link });
    }

    // user has not been hit yet, so the initial document needs to be created
    const idToken = req.body?.id_token;

    if (idToken) {
      // this is a google id token - create an account based on google
      // get the user's email from the ID token
      return await initAccountCreation(idToken, res);
    }

    // create a new user not based on google auth
    return await services.api.createUserAccount(Date.now(), email);

    // TODO hit the envite API
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: `Something went wrong: ${err.message}` });
  }
};

async function initAccountCreation(idToken, res) {
  const idTokenInfo = await services.api.getIdTokenInfo(idToken);

  // set the initial document for this user
  await services.api.createUserAccount(Date.now(), idTokenInfo.email);

  return res.status(200).json({ message: 'user has been initialized' });
}
