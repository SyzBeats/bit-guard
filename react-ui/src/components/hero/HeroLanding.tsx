import React from 'react';
import styled from 'styled-components';
import { Queue } from '../effects/Queue/Queue';
import Button from '../styled/buttons';
import Logo from '../styled/image/Logo';
import { MainTitle, SecondaryTitle } from '../styled/typography';

const HeroLanding = () => {
  return (
    <Hero>
      <Container>
        <FlexBox>
          <Grid>
            <GridLeft>
              <Logo />
            </GridLeft>
            <GridRight>
              <MainTitle>Bit Guard</MainTitle>
              <SecondaryTitle color="light" textAlign="left">
                The safe way to share your secrets
              </SecondaryTitle>
              <Button content="How it works" />
            </GridRight>
          </Grid>
        </FlexBox>
        <FlexBox>
          <Queue />
        </FlexBox>
      </Container>
    </Hero>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2;
  gap: 3rem;
`;

const GridLeft = styled.div`
  grid-column-start: 0;
  grid-column-end: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const GridRight = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

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
