import React from 'react';
import styled from 'styled-components';
import { Activity, Home, Lock, Sliders } from 'react-feather';
import NavigationButton from '../buttons/NavigationButton';

const Sidebar = () => (
  <Wrapper>
    <NavigationButton>
      <Home />
    </NavigationButton>
    <NavigationButton>
      <Activity />
    </NavigationButton>
    <NavigationButton>
      <Lock />
    </NavigationButton>
    <NavigationButton>
      <Sliders />
    </NavigationButton>
  </Wrapper>
);

const Wrapper = styled.header`
  padding: 2rem 0.25rem;
  height: 100vh;
  top: 0;
  left: 0;

  position: sticky;
  top: 0;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.highlight};

  box-shadow: 3px 0px 9px #1115;

  font-weight: 300;
  font-size: 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export { Sidebar };
