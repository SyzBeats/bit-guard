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
      {label && <label htmlFor={name}>{label}</label>}
      <Area rows={5} name={name} value={value} onChange={onChange} />
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
  background: #f2f2f2;
  border: 1px solid transparent;
  border-radius: 0.5rem;

  resize: none;

  font-family: inherit;
  font-weight: 400;
  font-size: 1.4rem;

  // change outline on focus
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.highlight_blue};
  }
`;

export { TextArea };
