import { IMessageToken } from './interfaces';

/**
 * @description checks if the given object is a MessageToken
 * @param data potentially a token
 * @returns true if the data is a token
 */
function isMessageToken(data: unknown): data is IMessageToken {
	return typeof data === 'object' && data !== null && 'messageId' in data && 'iat' in data && 'exp' in data;
}

export { isMessageToken };
