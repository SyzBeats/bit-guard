import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import styled from 'styled-components';

import Logo from '../ui/styled/image/Logo';
import { SecondaryTitle } from '../ui/styled/typography';
import { Input } from '../ui/forms/inputs/Input';
import { SubmitCircle } from '../ui/forms/inputs/SubmitCircle';
import { LOGIN_USER } from '../../graphql/queries/user/query-login';
import { Alert } from '../ui/alert/Alert';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // change handler for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // resets the form fields
  const resetForm = () => {
    setLoginData({
      email: '',
      password: '',
    });
  };

  // login hook query
  const [loginQuery, { loading, data, error }] = useLazyQuery(LOGIN_USER, {
    onCompleted: (res) => {
      if (res?.loginUser?.token) {
        localStorage.setItem('token', res.loginUser.token);

        window.location.href = '/dashboard';
      }

      resetForm();
    },

    onError: (error) => {
      console.error(error.message);
    },
  });

  // submit handler for form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      loginQuery({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });
    } catch (error: any) {
      console.error(`[ERROR] ${error.message}`);
    }
  };

  return (
    <Wrapper>
      <LoginBox>
        <Logo />
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <SecondaryTitle color="dark">Enter your credentials</SecondaryTitle>

          <label>
            Email
            <Input
              name="email"
              autocomplete="email"
              required={true}
              type="text"
              changeHandler={(e) => handleChange(e)}
              value={loginData.email}
            />
          </label>

          <label>
            Password
            <Input
              name="password"
              required={true}
              changeHandler={(e) => handleChange(e)}
              value={loginData.password}
              type="password"
              autocomplete="current-password"
            />
          </label>

          <SubmitCircle />
        </form>
        {loading && <p>...loading</p>}

        {error && <Alert message={error.message} type="error" />}

        {data && <Alert message="Success" type="success" />}
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
  min-height: 50rem;
  height: auto;
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
