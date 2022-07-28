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

module.exports = {
  createUserAccount,
  getIdTokenInfo,
};
