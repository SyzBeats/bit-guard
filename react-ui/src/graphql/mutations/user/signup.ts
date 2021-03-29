import { gql } from '@apollo/client';

const SIGNUP_USER = gql`
  mutation SIGNUP_USER($email: String, $password: String) {
    signupUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export { SIGNUP_USER };
