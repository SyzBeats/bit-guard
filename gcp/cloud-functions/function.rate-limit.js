const { Firestore } = require('@google-cloud/firestore');

const config = require('./config');

const db = new Firestore({ projectId: config.PROJECT_ID });
const collection = db.collection('extension-store');

exports.rateLimit = async (req, res) => {
  // return if OPTIONS request
  if (req?.method === 'OPTIONS') {
    return res?.status(200)?.send('OK');
  }

  // request body needs to have title and content
  if (!req?.body?.title || !req?.body?.content) {
    return res?.status(400)?.send('Request body must contain title and content');
  }

  // fetch the document
  const document = collection.doc(req.query.installToken);

  if (!document) {
    return res.status(400).send('Invalid install token');
  }

  const nowInMs = new Date().getTime();
  const doc = await document.get();

  // twelve hours in milliseconds

  if (doc.exists) {
    const data = doc.data();

    if (!data) {
      return res.status(500).send('Data does not exist');
    }

    const expirationInMs = new Date(data.expiration).getTime();
    const hitCount = data.hitCount;

    if (nowInMs > expirationInMs) {
      // expired, user can hit the limit again
      await resetUser(document, nowInMs);

      await hitEnviteAPI();

      return res.status(200).send('api was called');
    }

    if (hitCount >= config.HIT_LIMIT) {
      return res.status(429).send('Too many requests');
    }

    await updateHitCount(document);

    await hitEnviteAPI();

    return res.send('Hello World!');
  } else {
    await setInitialDocument(document, nowInMs);
  }
};

async function setInitialDocument(document, nowInMs) {
  await document.set({
    hitCount: 1,
    expiration: new Date(nowInMs + config.TIMEOUT),
  });
}

async function resetUser(document, nowInMs) {
  await document.set({
    expiration: nowInMs + config.TIMEOUT,
    hitCount: 1,
  });
}

async function updateHitCount(document) {
  await document.update({
    hitCount: document.hitCount + 1,
  });
}

async function hitEnviteAPI() {
  // call api with graphql query
  // await fetch('https://api.graph.cool/simple/v1/cj7zf0zj0b7z70101xqjqjqj', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: `
  //       query {
  //         allUsers {
  //           id
  //           name
  //           email
  //         }
  //       }
  //     `,
  //   }),
  // });
  return;
}
