import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../styled/image/Logo';
import { SecondaryTitle } from '../styled/typography';
import { Input } from './forms/Input';
import { SubmitCircle } from './forms/SubmitCircle';

const SignUp = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      // @todo: show error
      return;
    }

    setData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <Wrapper>
      <SignUpBox>
        <Logo />
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <SecondaryTitle color="dark">Create your account</SecondaryTitle>
          <label>
            Email
            <Input
              name="email"
              type="text"
              changeHandler={(e) => handleChange(e)}
              value={data.email}
            />
          </label>
          <label>
            Password
            <Input
              name="password"
              changeHandler={(e) => handleChange(e)}
              value={data.password}
              type="password"
              autocomplete="new-password"
            />
          </label>
          <label>
            Confirm Password
            <Input
              name="confirmPassword"
              changeHandler={(e) => handleChange(e)}
              value={data.confirmPassword}
              type="password"
              autocomplete="new-password"
            />
          </label>
          <SubmitCircle />
        </form>
      </SignUpBox>
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

const SignUpBox = styled.div`
  width: 40rem;
  min-height: 50rem;
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

export default SignUp;
