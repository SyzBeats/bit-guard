function resolveChallenge(challenge: any) {
  return challenge;
}

function messageToIssuer(message: string) {
  return {
    text: message,
    response_type: 'ephemeral',
  };
}

function messageToChannel(message: string) {
  return {
    text: message,
    response_type: 'in_channel',
  };
}

export { resolveChallenge, messageToChannel, messageToIssuer };
