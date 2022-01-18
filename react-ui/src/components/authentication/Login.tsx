import React from 'react';
import styled from 'styled-components';
import Logo from '../styled/image/Logo';
import { SecondaryTitle } from '../styled/typography';
import { Input } from './forms/Input';
import { SubmitCircle } from './forms/SubmitCircle';

const Login = () => {
  return (
    <Wrapper>
      <LoginBox>
        <Logo />
        <form>
          <SecondaryTitle color="dark">Enter your credentials</SecondaryTitle>
          <label>
            {' '}
            Email
            <Input name="Some name" value="Some value" />
          </label>
          <label>
            {' '}
            Password
            <Input name="Some name" value="Some value" />
          </label>
          <SubmitCircle />
        </form>
      </LoginBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.gradients.login};
`;

const LoginBox = styled.div`
  width: 40rem;
  height: 50rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;
  }
`;

export default Login;
