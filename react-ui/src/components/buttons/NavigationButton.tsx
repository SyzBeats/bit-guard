import React from 'react';
import styled from 'styled-components';

const NavigationButton = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled.div`
  margin: 1.75rem 0;
  filter: grayscale(1);
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    transform: scale3d(1.1, 1.1, 1.1);
    filter: grayscale(0) drop-shadow(1px 2px 15px var(--color-green));
  }
`;
export default NavigationButton;
