import React from 'react';
import styled from 'styled-components';
import Logo from '../styled/image/Logo';

const Login = () => {
  return (
    <Wrapper>
      <LoginBox>
        <Logo />
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
  flex-direction: center;
  align-items: flex-start;
  justify-content: center;
`;

export default Login;
