import { gql } from '@apollo/client';

/**
 * @description queries all information about
 * the current user as well as the links and
 * messages that this user currently posesses.
 */
const GET_SIGNALS_BY_USER = gql`
  query GetSignalsByUser {
    signalsByUser {
      id
      title
      createdAt
    }
  }
`;

export { GET_SIGNALS_BY_USER };
