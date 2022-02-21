import { gql } from '@apollo/client';

const SIGNUP_USER = gql`
  mutation SignupUser($email: String!, $password: String!, $name: String!) {
    signupUser(data: { email: $email, password: $password, name: $name }) {
      token
    }
  }
`;

export { SIGNUP_USER };
