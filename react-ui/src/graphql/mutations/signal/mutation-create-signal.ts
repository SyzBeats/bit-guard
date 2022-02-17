import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Signal.
 * returns the Link and the title
 */
const CREATE_SIGNAL = gql`
  mutation CreateSignal($content: String!) {
    createSignal(data: { content: $content }) {
      id
      content
    }
  }
`;

export { CREATE_SIGNAL };
