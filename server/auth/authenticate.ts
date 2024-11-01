import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

import * as keys from '../config/keys';
import { User } from '../../react-ui/src/types/types-gql';

/**
 * @description to protect certain routes there is an authentication against
 * an existing user. If the decoded token is verified the token is returned
 * @param {Request} req
 */
const authenticate = (req: Request): User => {
  const authHeader = req.headers.authorization;

  /**
   * The token will be transmitted as <Bearer> token, so the "Bearer" is stripped off
   * to gain the actual token value and verify it
   */
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');

    const decoded = jwt.verify(token, keys.JWT_TOKEN_SIGNATURE);

    return decoded as User;
  }

  throw new Error('Authentication failed. Please log in to access the resource');
};

export { authenticate };
