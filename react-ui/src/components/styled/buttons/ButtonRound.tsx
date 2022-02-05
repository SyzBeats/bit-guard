import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const ButtonRound = ({ children, onClick = () => null }: ButtonProps) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  // generics
  padding: 1rem;
  border: none;

  width: 5rem;
  min-width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};

  // colors
  background: ${({ theme }) => theme.gradients.bluepurp};

  color: white;

  // font
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 600;

  // spacing

  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

export { ButtonRound };
