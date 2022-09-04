const serviceApi = require('./service.api');

/**
 * @description create a new user account based google login
 * @param {string} idToken the users ID Token from google
 * @param {object} res the cloud function response object
 * @returns {Promise<any>} a promise that resolves to the cloud function response
 */
async function createAccountFromGoogle(idToken, res) {
  const idTokenInfo = await serviceApi.getIdTokenInfo(idToken);

  // TODO: name and password handling for google signup
  // set the initial document for this user
  await serviceApi.createUserAccount(Date.now(), idTokenInfo.email, '', '');

  return res.status(200).json({ message: 'user has been initialized' });
}

/**
 * @description create a new user account based on native account creation
 * @param {string} email the users email address
 * @param {string} password the users selected password
 * @param {string} name the cloud function response object
 * @param {object} res the cloud function response object
 * @returns {Promise<any>} a promise that resolves to the cloud function response
 */
async function createAccountNative(email, password, name, res) {
  await serviceApi.createUserAccount(Date.now(), email, password, name);

  return res.status(200).json({ message: 'user has been initialized' });
}

module.exports = {
  createAccountFromGoogle,
  createAccountNative,
};
