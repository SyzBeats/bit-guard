import { gql } from '@apollo/client';

/**
 * @description queries all information about
 * the current user as well as the links and
 * messages that this user currently posesses.
 */
const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      name
      messages {
        id
        content
        links {
          content
        }
      }
    }
  }
`;

export { CURRENT_USER };
