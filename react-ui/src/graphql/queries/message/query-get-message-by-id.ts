import { gql } from '@apollo/client';

/**
 * @description queries all information about
 * the current user as well as the links and
 * messages that this user currently posesses.
 */
const GET_MESSAGE_BY_ID = gql`
  query GetMessageById($id: ID!) {
    messageById(data: { id: $id }) {
      content
    }
  }
`;

export { GET_MESSAGE_BY_ID };
