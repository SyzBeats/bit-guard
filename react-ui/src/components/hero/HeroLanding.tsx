import React from 'react';
import styled from 'styled-components';

const HeroLanding = () => {
  return <Hero />;
};

const Hero = styled.header`
  min-height: 70vh;
  background: ${({ theme }) => theme.colors.background};
`;

export default HeroLanding;
