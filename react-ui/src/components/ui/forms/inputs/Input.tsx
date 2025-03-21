import React from 'react';
import styled from 'styled-components';

interface IInputField {
	type: string;
	value: string;
	name: string;
	autocomplete: string;
	required?: boolean;
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, changeHandler, type, autocomplete = '', required = false }: IInputField) => {
	return (
		<InputField
			type={type || 'text'}
			name={name}
			value={value}
			placeholder={`Enter ${name}`}
			onChange={(e) => changeHandler(e)}
			autoComplete={autocomplete}
			required={required}
		/>
	);
};

// --- Styled components ---

const InputField = styled.input`
  width: 100%;
  height: 4.5rem;
  line-height: 3rem;
  padding: 0 5rem 0 2rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  transition: 0.35s ease;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_light};
  }

  &:focus,
  input:hover {
    outline: none;
    border-color: ${({ theme }) => theme.colors.iceblue};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.iceblue_500};
  }
`;

export { Input };
