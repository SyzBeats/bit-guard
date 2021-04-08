import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  content: string;
};
const Button = ({ content }: ButtonProps) => {
  return <Wrapper>{content}</Wrapper>;
};

const Wrapper = styled.button`
  // generics
  padding: 1.25rem 3rem;
  border: none;
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};

  // colors
  background: #4e0480;
  color: white;

  // font
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 600;

  // spacing
  margin: 2rem 0;

  &:hover {
    cursor: pointer;
  }
`;
export default Button;
