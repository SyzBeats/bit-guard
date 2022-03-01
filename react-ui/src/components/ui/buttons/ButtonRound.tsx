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

  position: relative;

  width: 4rem;
  min-width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};

  // colors
  background: ${({ theme }) => theme.gradients.bluepurp};
  color: #fff;

  // font
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 600;

  transition: all 0.1s ease-in-out;

  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.gradients.bluepurp};
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    &::before {
      animation: pulse 1.25s ease-in-out infinite;
    }
    cursor: pointer;
  }
`;

export { ButtonRound };
