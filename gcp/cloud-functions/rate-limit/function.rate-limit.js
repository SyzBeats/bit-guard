const { Firestore } = require('@google-cloud/firestore');
const config = require('../config');
const services = require('./services');

const db = new Firestore({ projectId: config.PROJECT_ID });

const collection = db.collection('extension-store');

exports.rateLimit = async (req, res) => {
  try {
    // return if OPTIONS request
    if (req?.method === 'OPTIONS') {
      return res?.status(200)?.send('OK');
    }

    // request body needs to have title and content
    if (!req?.body?.title || !req?.body?.content) {
      return res?.status(400)?.send('Request body must contain title and content');
    }

    // get the users sub, which is the unique identifier for the user of google
    const sub = req?.body?.sub;

    // fetch the document based on sub
    const document = collection.doc(sub);

    // get the actual data from the document
    const doc = await document.get();

    const nowInMs = new Date().getTime();

    if (doc.exists) {
      const data = doc.data();

      if (!data) {
        return res.status(500).send('Data does not exist');
      }

      const expirationInMs = new Date(data.expiration).getTime();

      const hitCount = data.hitCount;

      // the expiration date is over, the user can hit the API again
      if (nowInMs > expirationInMs) {
        await services.api.resetUser(document, nowInMs);

        await services.api.hitEnviteAPI();

        res.status(200).send('api was called');

        return;
      }

      if (hitCount >= config.HIT_LIMIT) {
        res.status(429).send('Too many requests');

        return;
      }

      await services.api.updateHitCount(document);

      await services.api.hitEnviteAPI();

      return res.send('Hello World!');
    } else {
      // user has not been hit yet, so the initial document needs to be created
      const idToken = req?.body?.idToken;

      if (!idToken) {
        return res?.status(400)?.send('Request body must contain idToken');
      }

      // get the user's email from the ID token
      const idTokenInfo = await services.api.getIdTokenInfo(idToken);

      // set the initial document for this user
      await services.api.setInitialDocument(collection, Date.now(), idTokenInfo.sub);

      return res.status(200).send('user has been initialized');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
};
