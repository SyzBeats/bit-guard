import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Link for a given Message.
 * Also returns the Links content
 *
 * @todo return the URL instead of the content
 */
const DELETE_MESSAGE = gql`
  mutation DeleteMessage($id: ID!) {
    deleteMessage(data: { id: $id }) {
      id
    }
  }
`;

export { DELETE_MESSAGE };
