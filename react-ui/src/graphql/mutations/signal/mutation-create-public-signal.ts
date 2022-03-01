import { gql } from '@apollo/client';

/**
 * @description Mutation that creates a new Signal.
 * returns the Link and the title
 */
const CREATE_PUBLIC_SIGNAL = gql`
  mutation CreatePublicSignal($content: String!, $title: String!) {
    createPublicSignal(data: { content: $content, title: $title }) {
      id
      title
      createdAt
      link {
        content
      }
    }
  }
`;

export { CREATE_PUBLIC_SIGNAL };
