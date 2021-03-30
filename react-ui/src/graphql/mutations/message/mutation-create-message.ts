import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Link for a given Message.
 * Also returns the Links content
 *
 * @todo return the URL instead of the content
 */
const CREATE_MESSAGE = gql`
  mutation CreateMessage($content: String!) {
    createMessage(data: { content: $content }) {
      id
      content
    }
  }
`;

export { CREATE_MESSAGE };
