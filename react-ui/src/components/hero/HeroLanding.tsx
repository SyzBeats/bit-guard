import React from 'react';
import styled from 'styled-components';
import { Queue } from '../effects/Queue/Queue';
import Button from '../styled/buttons/Button';
import { MainTitle, SecondaryTitle } from '../styled/typography/Titles';

const HeroLanding = () => {
  return (
    <Hero>
      <Container>
        <FlexBox>
          <MainTitle>Password Shield</MainTitle>
          <SecondaryTitle>The safe way to share your secrets</SecondaryTitle>
          <Button content="Watch more" />
        </FlexBox>
        <FlexBox>
          <Queue />
        </FlexBox>
      </Container>
    </Hero>
  );
};

const Hero = styled.header`
  min-height: 55vh;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.background}, ${theme.colors.background_dark})`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  gap: 10rem;
`;

const FlexBox = styled.div`
  flex: 1;

  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export default HeroLanding;
