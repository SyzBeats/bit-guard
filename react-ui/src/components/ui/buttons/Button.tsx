import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  content: React.ReactNode | string;
  onClick?: () => void;
};

const Button = ({ content, onClick = () => null }: ButtonProps) => {
  return <Wrapper onClick={onClick}>{content}</Wrapper>;
};

// --- Styled components ---

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0;
  padding: 1.25rem 3rem;

  border: none;
  border-radius: 0.4rem;

  box-shadow: ${({ theme }) => theme.shadows.depth_1};
  background: ${({ theme }) => theme.gradients.bluepurp};
  color: #fff;

  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 600;

  transition: all 0.1s ease-in-out;

  svg {
    margin-right: 0.75rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
export default Button;
