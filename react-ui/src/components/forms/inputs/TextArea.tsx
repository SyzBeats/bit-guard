import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  type?: string;
}

const TextArea = ({ name = '', value = '', onChange = () => null }: Props) => {
  return (
    <Wrapper>
      <Area rows={5} name={name} value={value} onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

const Area = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: #f8f8f8;
  border: 1px solid transparent;
  border-radius: 0.5rem;

  resize: none;

  // change outline on focus
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.highlight_blue};
  }
`;

export { TextArea };
