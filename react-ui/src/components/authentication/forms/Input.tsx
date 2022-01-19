import React, { useState } from 'react';
import styled from 'styled-components';

interface IInputField {
  type: string;
  value: string;
  name: string;
  autocomplete: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ name, value, changeHandler, type, autocomplete = '' }) => {
  return (
    <InputWrapper>
      <InputField
        type={type || 'text'}
        name={name}
        value={value}
        onChange={(e) => changeHandler(e)}
        autoComplete={autocomplete}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const InputField = styled.input`
  width: 100%;
  min-height: 4rem;

  font-size: 1.6rem;
  letter-spacing: 1px;
  font-family: inherit;

  border-radius: 0.3rem;
  border: none;

  background: ${({ theme }) => theme.colors.background_light};
  box-shadow: ${({ theme }) => theme.shadows.card_1};
  padding: 0.5rem;

  outline: none;
  border-bottom: 0.2rem solid transparent;

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.card_2};
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary};
  }
`;

export { Input };
