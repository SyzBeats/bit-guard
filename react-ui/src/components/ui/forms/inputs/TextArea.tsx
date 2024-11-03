import React from 'react';
import styled from 'styled-components';

interface Props {
	name: string;
	value: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	type?: string;
}

const TextArea = ({ name = '', value = '', label = '', onChange = () => null }: Props) => {
	return (
		<Wrapper>
			<Area rows={5} name={name} value={value} placeholder={label} onChange={onChange} />
		</Wrapper>
	);
};

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  width: 100%;

  label {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const Area = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: #fefefe;
  border: 1px solid #ddd;
  border-radius: 0.3rem;

  resize: none;

  font-family: inherit;
  font-weight: 400;
  font-size: 1.4rem;

  // change outline on focus

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_light};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.iceblue};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.iceblue_500};
  }
`;

export { TextArea };
