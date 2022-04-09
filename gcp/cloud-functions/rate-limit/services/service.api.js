const config = require('../../config');

/**
 * @description add a new document to the database
 * @param {FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>} collection
 * @param {number} nowInMs
 * @param {string} id the new document id
 */
async function setInitialDocument(collection, nowInMs, id) {
  await collection.doc(id).set({
    hitCount: 1,
    expiration: new Date(nowInMs + config.TIMEOUT),
  });
}

async function resetHitCount(document, nowInMs) {
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

async function getIdTokenInfo(idToken) {
  // call google api to get the user's email
  const response = await fetch(config.GOOGLE_IDENT_URL + idToken);

  const tokenInfo = await response.json();

  if (!tokenInfo.email || !tokenInfo.email_verified) {
    throw new Error('Invalid ID token');
  }

  return tokenInfo;
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

module.exports = {
  setInitialDocument,
  resetHitCount,
  getIdTokenInfo,
  updateHitCount,
  hitEnviteAPI,
};
