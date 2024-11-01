interface MessageResponse {
  text: string;
  response_type: 'ephemeral' | 'in_channel';
}

function resolveChallenge(challenge: unknown): unknown {
  return challenge;
}

function messageToIssuer(message: string): MessageResponse {
  return {
    text: message,
    response_type: 'ephemeral',
  };
}

function messageToChannel(message: string): MessageResponse {
  return {
    text: message,
    response_type: 'in_channel',
  };
}

export { resolveChallenge, messageToChannel, messageToIssuer };
