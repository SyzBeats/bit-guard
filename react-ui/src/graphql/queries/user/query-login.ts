import { gql } from '@apollo/client';

/**
 * @description queries all information about
 * the current user as well as the links and
 * messages that this user currently posesses.
 */
const LOGIN_USER = gql`
  query LoginUser($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export { LOGIN_USER };
