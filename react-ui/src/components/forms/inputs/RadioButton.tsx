import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
  label: string;
  checked: boolean;
}

interface WrapperProps {
  checked: boolean;
}

interface OuterCirlceProps {
  checked: boolean;
}

const RadioButton = ({ onClick, checked = false, label = '' }: Props) => {
  return (
    <Wrapper checked={checked} onClick={() => onClick()}>
      <OuterCirlce checked={checked}>{checked && <InnerCircle />}</OuterCirlce>
      <span>{label}</span>
    </Wrapper>
  );
};

const Wrapper = styled.span<WrapperProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  background: ${({ checked }) => (checked ? '#f8f8f8' : '#f2f2f2')};
  color: ${({ checked }) => (checked ? '#222' : '#999')};
  border: ${({ checked, theme }) => (checked ? `2px solid ${theme.colors.highlight_blue}` : '2px solid transparent')};
  border-radius: 0.5rem;

  span {
    font-size: 1.6rem;
    font-weight: 300;
  }

  &:hover {
    cursor: pointer;
  }
`;

const OuterCirlce = styled.div<OuterCirlceProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: ${({ checked }) => (checked ? 'none' : '1px solid #ccc')};
  background: ${({ checked, theme }) => (checked ? theme.gradients.bluepurp : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerCircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pop 0.2s ease-in-out forwards;
`;

export default RadioButton;
