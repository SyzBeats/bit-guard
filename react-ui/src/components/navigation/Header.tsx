import React, { useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '../user/Avatar';
import Notification from './Notification';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../graphql/mutations/user/signup';

const Header = () => {
  const [signupUser, { data }] = useMutation(SIGNUP_USER);

  useEffect(() => {
    signupUser({
      variables: {
        name: 'test',
        password: 'test',
        email: 'test',
      },
    });
  }, []);
  return (
    <Wrapper>
      <Notification />
      <Avatar src="https://source.unsplash.com/random" alt="avatar" />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 1rem 2rem;
  height: 7rem;
  background: #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Header;
