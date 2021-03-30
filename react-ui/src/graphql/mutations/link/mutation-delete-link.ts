import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Link for a given Message.
 * Also returns the Links content
 *
 * @todo return the URL instead of the content
 */
const DELETE_LINK = gql`
  mutation DeleteLink($id: ID!) {
    deleteLink(data: { id: $id }) {
      content
    }
  }
`;

export { DELETE_LINK };
