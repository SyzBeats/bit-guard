import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import { Alert } from '~/components/ui/alert/Alert';
import Logo from '~/components/ui/styled/image/Logo';
import { SecondaryTitle } from '~/components/ui/styled/typography';
import { Input } from '~/components/ui/forms/inputs/Input';
import { SubmitCircle } from '~/components/ui/forms/inputs/SubmitCircle';
import { SIGNUP_USER } from '~/graphql/mutations/user/mutation-signup-user';
import { MessageTypes } from '~/types/enums';

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // alert to be displayed when there is a notification
  const [alert, setAlert] = useState<{ type: MessageTypes; message: string }>({
    type: MessageTypes.INFO,
    message: '',
  });

  // resets the form fields
  const handleResetFields = () => {
    setData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };


  // change handler for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  // submit handler for form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      setAlert({
        type: MessageTypes.ERROR,
        message: 'Passwords do not match',
      });

      return;
    }

    if (data.password.length < 8) {
      setAlert({
        type: MessageTypes.ERROR,
        message: 'Password must be at least 8 characters',
      });

      return;
    }

    signup({
      variables: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });
  };


  // Mutation Hooks
  const [signup] = useMutation(SIGNUP_USER, {
    onCompleted: ({ signupUser }) => {
      if (signupUser?.token) {
        localStorage.setItem('token', signupUser.token);
        window.location.href = '/dashboard';
      }

      handleResetFields();
    },
    onError: (error) => {
      setAlert({
        type: MessageTypes.ERROR,
        message: error.message,
      });
    },
  });

  return (
    <Wrapper>
      <SignUpBox>
        <Logo />
        <form method='POST' onSubmit={(e) => handleSubmit(e)}>
          <SecondaryTitle color='dark'>Create your account</SecondaryTitle>

          <label>
            Name
            <Input
              name='name'
              type='text'
              changeHandler={(e) => handleInputChange(e)}
              value={data.name}
              required={true}
              autocomplete='name'
            />
          </label>

          <label>
            Email
            <Input
              name='email'
              type='email'
              changeHandler={(e) => handleInputChange(e)}
              value={data.email}
              required={true}
              autocomplete='email'
            />
          </label>

          <label>
            Password
            <Input
              name='password'
              changeHandler={(e) => handleInputChange(e)}
              value={data.password}
              type='password'
              required={true}
              autocomplete='new-password'
            />
          </label>

          <label>
            Confirm Password
            <Input
              name='confirmPassword'
              changeHandler={(e) => handleInputChange(e)}
              value={data.confirmPassword}
              type='password'
              required={true}
              autocomplete='new-password'
            />
          </label>

          <SubmitCircle />
        </form>

        {alert.message && <Alert message={alert.message} type={alert.type} />}
      </SignUpBox>
    </Wrapper>
  );
};


// --- Styled components ---
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
