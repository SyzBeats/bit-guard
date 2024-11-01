import { MessageToken } from './interfaces';

/**
 * @description checks if the given object is a MessageToken
 * @param data potentially a token
 * @returns true if the data is a token
 */
function isMessageToken(data: any): data is MessageToken {
  return !!(data.messageId && data.iat && data.exp);
}

export { isMessageToken };
