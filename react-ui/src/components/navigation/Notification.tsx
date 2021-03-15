import React from 'react';
import styled from 'styled-components';
import { Bell, BellOff } from 'react-feather';

const Notification = () => {
  return (
    <Wrapper>
      <Bell size="28" />
      <BellMarker aria-details="indicates notifications" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 2rem;
`;
const BellMarker = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;

  background: ${({ theme }) => theme.colors.highlight};
  box-shadow: ${({ theme }) => theme.shadows.depth_1};
`;
export default Notification;
