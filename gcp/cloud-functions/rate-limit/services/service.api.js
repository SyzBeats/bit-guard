const config = require('../config');

/**
 * @description add a new document to the database
 * @param {number} nowInMs the current time in milliseconds
 * @param {string} email the users email
 */
async function createUserAccount(nowInMs, email) {
  try {
    // TODO: create a new user and set the rate limit document
  } catch (err) {
    throw new Error('failed to set the initial document');
  }
}

async function resetHitCount(document, nowInMs) {
  try {
    await document.set({
      expiration: nowInMs + config.TIMEOUT,
      hitCount: 1,
    });
  } catch (err) {
    throw new Error('failed to reset the hit count');
  }
}

async function updateHitCount(document) {
  await document.update({
    hitCount: document.hitCount + 1,
  });
}

/**
 *
 * @param {string} idToken the google id token
 * @returns
 */
async function getIdTokenInfo(idToken) {
  try {
    // call google api to get the user's email
    const response = await fetch(config.GOOGLE_IDENT_URL + idToken);

    const tokenInfo = await response.json();

    if (!tokenInfo.email || !tokenInfo.email_verified) {
      throw new Error('Invalid ID token provided');
    }

    return tokenInfo;
  } catch (err) {
    // rethrow for handling in the calling function
    throw new Error(err.message);
  }
}

/**
 *
 * @param {{title:string, content:string}} signal
 * @returns
 */
async function hitEnviteAPI(signal) {
  // TODO send as graphql query
  const response = await fetch(config.ENVITE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signal),
  });

  return response;
}

module.exports = {
  createUserAccount,
  resetHitCount,
  getIdTokenInfo,
  updateHitCount,
  hitEnviteAPI,
};
