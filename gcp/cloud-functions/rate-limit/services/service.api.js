const config = require('../config');

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
  resetHitCount,
  updateHitCount,
  hitEnviteAPI,
};
