import React from 'react';
import styled from 'styled-components';
import { Queue } from '../effects/Queue/Queue';

const HeroLanding = () => {
  return (
    <Hero>
      <p>test</p>
      <Queue />
    </Hero>
  );
};

const Hero = styled.header`
  min-height: 70vh;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HeroLanding;
