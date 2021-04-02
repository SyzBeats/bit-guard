import React, { useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '../user/Avatar';
import Notification from './Notification';
import { useSignupUserMutation } from '../../typings/types-gql';

const Header = () => {
  const [signupUser, status] = useSignupUserMutation();

  useEffect(() => {
    signupUser({
      variables: {
        name: 'simeon',
        email: 'simeon',
        password: 'simeon',
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
