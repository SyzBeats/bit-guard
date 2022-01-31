import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  content: string;
  onClick?: () => void;
  variant?: 'outlined' | 'contained';
};

const Button = ({
  content,
  onClick = () => null,
  variant = 'contained',
}: ButtonProps) => {
  return (
    <Wrapper variant={variant} onClick={onClick}>
      {content}
    </Wrapper>
  );
};

interface WrapperProps {
  variant: 'outlined' | 'contained';
}

const Wrapper = styled.button<WrapperProps>`
  // generics
  padding: 1.25rem 3rem;
  border: ${({ theme, variant }) =>
    variant === 'outlined' && `2px solid ${theme.colors.highlight_blue}`};

  border-radius: 0.4rem;
  box-shadow: ${({ theme, variant }) =>
    variant === 'contained' && theme.shadows.depth_1};

  // colors
  background: ${({ variant, theme }) =>
    variant === 'outlined' ? 'transparent' : theme.colors.highlight_blue};

  color: ${({ variant, theme }) =>
    variant === 'outlined' ? theme.colors.highlight_blue : theme.colors.white};

  // font
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 600;

  // spacing
  margin: 2rem 0;

  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${({ variant, theme }) =>
      variant === 'outlined' && theme.colors.highlight_blue};
    color: ${({ variant, theme }) =>
      variant === 'outlined' && theme.colors.white};
  }
`;
export default Button;
