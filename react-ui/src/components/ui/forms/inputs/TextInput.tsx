import React from 'react';
import styled from 'styled-components';

interface Props {
	name: string;
	value: string;
	label?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

const TextInput = ({ name = '', value = '', label = '', onChange = () => null, type = 'text' }: Props) => {
	return (
		<Wrapper>
			<Input type={type} name={name} value={value} placeholder={label} onChange={onChange} />
		</Wrapper>
	);
};

const Wrapper = styled.span`
  display: flex;
  gap: 0.5rem;

  flex-direction: column;

  label {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  line-height: 3rem;
  padding: 0 5rem 0 2rem;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  transition: 0.35s ease;
  background: #fefefe;
  color: ${({ theme }) => theme.colors.gray};
  font-family: inherit;

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

export default TextInput;
