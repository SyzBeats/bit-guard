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
  padding: 1rem;
  background: #fefefe;
  border: 1px solid #ddd;
  border-radius: 0.3rem;

  font-family: inherit;
  font-weight: 400;
  font-size: 1.4rem;

  // change outline on focus
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.highlight_blue};
  }
`;

export default TextInput;
