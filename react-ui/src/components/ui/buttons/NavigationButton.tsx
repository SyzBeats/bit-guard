import React from 'react';
import styled from 'styled-components';

import { PropsChildren } from '../../../typings/types.components';

const NavigationButton = ({ children }: PropsChildren) => {
  return <Button>{children}</Button>;
};

const Button = styled.div`
  margin: 1.75rem 0;
  filter: grayscale(0.2);
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    transform: scale3d(1.1, 1.1, 1.1);
    filter: ${({ theme }) => `grayscale(0) drop-shadow(1px 2px 9px ${theme.colors.highlight_iceblue_50})`};
  }
`;

export default NavigationButton;
