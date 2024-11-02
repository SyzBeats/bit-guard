import React, { useState } from 'react';
import { ApolloError, useLazyQuery } from '@apollo/client';
import styled from 'styled-components';

import Logo from '~/components/ui/styled/image/Logo';
import { SecondaryTitle } from '~/components/ui/styled/typography';
import { Input } from '~/components/ui/forms/inputs/Input';
import { SubmitCircle } from '~/components/ui/forms/inputs/SubmitCircle';
import { Alert } from '~/components/ui/alert/Alert';
import { LOGIN_USER } from '~/graphql/queries/user/query-login';
import { MessageTypes } from '~/types/enums';

const Login = () => {
	// State
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});


	// Hooks
	const [loginQuery, { loading, data, error }] = useLazyQuery(LOGIN_USER, {
		onCompleted: (res) => {
			if (res?.loginUser?.token) {
				localStorage.setItem('token', res.loginUser.token);

				window.location.href = '/dashboard';
			}

			handleFormReset();
		},

		onError: (err) => {
			console.error(`[ERROR] ${err.message}`);
		},
	});


	// Handlers
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setLoginData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormReset = () => {
		setLoginData({
			email: '',
			password: '',
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			loginQuery({
				variables: {
					email: loginData.email,
					password: loginData.password,
				},
			});
		} catch (err: unknown) {
			if (err instanceof ApolloError) {
				console.error(`[ERROR] ${err.message}`);
			}
		}
	};


	// Determine Content
	return (
		<Wrapper>
			<LoginBox>
				<Logo />
				<form method='POST' onSubmit={(e) => handleSubmit(e)}>
					<SecondaryTitle color='dark'>Enter your credentials</SecondaryTitle>

					<label>
						Email
						<Input
							name='email'
							autocomplete='email'
							required={true}
							type='text'
							changeHandler={(e) => handleChange(e)}
							value={loginData.email}
						/>
					</label>

					<label>
						Password
						<Input
							name='password'
							required={true}
							changeHandler={(e) => handleChange(e)}
							value={loginData.password}
							type='password'
							autocomplete='current-password'
						/>
					</label>

					<SubmitCircle />
				</form>

				{loading && <p>loading...</p>}

				{error && <Alert message={error.message} type={MessageTypes.ERROR} />}

				{data && <Alert message='Success' type={MessageTypes.SUCCESS} />}
			</LoginBox>
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

const LoginBox = styled.div`
  width: 40rem;
  min-height: 50rem;
  height: auto;
  background: ${({ theme }) => theme.colors.white_dimmed};
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
    gap: 1.75rem;
  }

  label {
    font-size: 1.45rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export default Login;
