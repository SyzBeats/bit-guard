import { gql } from '@apollo/client';

/**
 * @description queries all information about
 * the current user as well as the links and
 * messages that this user currently posesses.
 */
const GET_MESSAGES_BY_USER = gql`
  query GetMessageByUser {
    messagesByUser {
      id
      content
      links {
        content
      }
    }
  }
`;

export { GET_MESSAGES_BY_USER };
