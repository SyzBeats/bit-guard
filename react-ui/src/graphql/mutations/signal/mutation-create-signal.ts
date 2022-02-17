import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Signal.
 * returns the Link and the title
 */
const CREATE_SIGNAL = gql`
  mutation CreateSignal($content: String!, $title: String!) {
    createSignal(data: { content: $content, title: $title }) {
      id
      title
      createdAt
      link {
        content
      }
    }
  }
`;

export { CREATE_SIGNAL };
