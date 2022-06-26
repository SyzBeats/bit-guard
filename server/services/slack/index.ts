function resolveChallenge(challenge: any) {
  return challenge;
}

function messageToIssuer(message: String) {
  return {
    text: message,
    response_type: 'ephemeral ',
  };
}

function messageToChannel(message: String) {
  return {
    text: message,
    response_type: 'in_channel',
  };
}

export { resolveChallenge, messageToChannel, messageToIssuer };
