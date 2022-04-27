const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

require('isomorphic-fetch');

const config = require('./config');
const services = require('./services');

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

    // get the users sub, which is the unique identifier for the user of google
    const sub = req.body?.sub;
    const nowInMs = new Date().getTime();

    if (!sub) {
      return res?.status(400)?.json({ message: 'Request body must contain sub' });
    }

    // fetch the user with prisma based on sub or email
    // TODO: join the expiration and hitCount to make this query more efficient
    const user = await prisma.user.findFirst({
      where: { email: sub },
    });

    if (user) {
      // TODO: fetch the current expiration of the user as well

      // fetch expiration and hitCount from the user document
      const expirationInMs = new Date(data.expiration).getTime();

      const hitCount = data.hitCount;

      // the expiration date is over, the user can hit the API again
      if (nowInMs > expirationInMs) {
        await services.api.resetHitCount(document, nowInMs);

        const link = await services.api.hitEnviteAPI(payLoad);

        // return with a response from envite api
        res.status(200).json({ message: link });

        return;
      }

      if (hitCount >= config.HIT_LIMIT) {
        res.status(429).json({ message: 'Too many requests' });

        return;
      }

      await services.api.updateHitCount(document);

      const link = await services.api.hitEnviteAPI(payLoad);

      // return with a response from envite api
      return res.json({ message: link });
    } else {
      // user has not been hit yet, so the initial document needs to be created
      const idToken = req.body?.idToken;

      if (!idToken) {
        return res?.status(400)?.json({ message: 'Request body must contain idToken' });
      }

      // get the user's email from the ID token
      const idTokenInfo = await services.api.getIdTokenInfo(idToken);

      // set the initial document for this user
      await services.api.setInitialDocument(collection, Date.now(), idTokenInfo.sub);

      return res.status(200).json({ message: 'user has been initialized' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: `Something went wrong: ${err.message}` });
  }
};
