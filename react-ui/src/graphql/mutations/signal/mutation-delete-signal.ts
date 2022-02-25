import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Signal.
 * returns the Link and the title
 */
const DELETE_SIGNAL = gql`
  mutation DeleteSignal($id: ID!) {
    deleteSignal(data: { id: $id }) {
      id
    }
  }
`;

export { DELETE_SIGNAL };
