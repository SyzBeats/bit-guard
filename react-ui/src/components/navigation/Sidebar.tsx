import React from 'react';
import styled from 'styled-components';
import { Activity, Home, Lock, Sliders } from 'react-feather';
import NavigationButton from '../buttons/NavigationButton';
import Avatar from '../user/Avatar';
import Notification from './Notification';

const Sidebar = () => (
  <Wrapper>
    <UpperSection>
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
    </UpperSection>

    <LowerSection>
      <Avatar src="https://source.unsplash.com/random" alt="avatar" />
      <Notification />
    </LowerSection>
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
  color: ${({ theme }) => theme.colors.highlight_iceblue};

  box-shadow: 3px 0px 9px #1115;

  font-weight: 300;
  font-size: 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LowerSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;
export { Sidebar };
