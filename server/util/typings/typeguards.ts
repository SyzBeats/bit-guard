/**
 * is MessageToken
 */

import { MessageToken } from './interfaces';

function isMessageToken(data: any): data is MessageToken {
  if (data.messageId && data.iat && data.exp) return true;
  return false;
}

export { isMessageToken };
