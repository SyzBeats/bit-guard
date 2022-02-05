import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  content: React.ReactNode | string;
  onClick?: () => void;
};

const Button = ({ content, onClick = () => null }: ButtonProps) => {
  return <Wrapper onClick={onClick}>{content}</Wrapper>;
};

const Wrapper = styled.button`
  // generics
  padding: 1.25rem 3rem;
  border: none;

  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};

  // colors
  background: ${({ theme }) => theme.gradients.bluepurp};

  color: white;

  // font
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 600;

  // spacing
  margin: 2rem 0;

  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;
export default Button;
