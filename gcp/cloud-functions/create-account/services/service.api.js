require('isomorphic-fetch');

const config = require('../config');

/**
 * @description add a new document to the database
 * @param {number} nowInMs the current time in milliseconds
 * @param {string} email the users email
 * @param {string} password the users password
 * @param {string} name the users name
 */
async function createUserAccount(nowInMs, email, password, name) {
  try {
    // TODO: create a new user and set the rate limit document
    const res = await fetch(`${config.ENVITE_API}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation SignupUser($email: String!, $password: String!, $name: String!) {
            signupUser(data: { email: $email, password: $password, name: $name }) {
              token
            }
          }
          `,
        variables: {
          email,
          password,
          name,
        },
      }),
    });

    if (!res.ok) {
      throw new Error('Request failed');
    }

    const data = await res.json();

    if (!data?.token) {
      throw new Error('Could not get access token from backend API');
    }

    return data.token;
  } catch (err) {
    throw new Error(err.message || 'failed to set the initial document');
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
