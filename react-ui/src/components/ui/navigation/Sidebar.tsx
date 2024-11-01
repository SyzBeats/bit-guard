import styled from 'styled-components';
import { Activity, Home, Lock as LockIcon, Sliders } from 'react-feather';

import NavigationButton from '../buttons/NavigationButton';
import Avatar from '../user/Avatar';
import UiNotification from './UiNotification';

const Sidebar = () => (
  <Wrapper>
    <Avatar src="https://source.unsplash.com/random" alt="avatar" />
    <UpperSection>
      <NavigationButton>
        <Home />
      </NavigationButton>

      <NavigationButton>
        <Activity />
      </NavigationButton>

      <NavigationButton>
        <LockIcon />
      </NavigationButton>

      <NavigationButton>
        <Sliders />
      </NavigationButton>
    </UpperSection>

    <LowerSection>
      <UiNotification />
    </LowerSection>
  </Wrapper>
);

const Wrapper = styled.header`
  padding: 2rem 0.25rem;
  height: 100vh;

  position: sticky;
  top: 0;
  left: 0;

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
  gap: 3rem;
`;

const LowerSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export { Sidebar };
