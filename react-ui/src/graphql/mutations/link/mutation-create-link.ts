import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Link for a given Message.
 * Also returns the Links content
 *
 * @todo return the URL instead of the content
 */
const CREATE_LINK = gql`
  mutation CreateLink($messageId: ID!) {
    createLink(data: { messageId: $messageId }) {
      content
    }
  }
`;

export { CREATE_LINK };
