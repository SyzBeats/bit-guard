import React from 'react';
import styled from 'styled-components';
import { Queue } from '../../../effects/Queue/Queue';
import Button from '../../../styled/buttons/Button';
import Logo from '../../../styled/image/Logo';
import { MainTitle, SecondaryTitle } from '../../../styled/typography';

const HeroLanding = () => {
  const scrollToElement = (element: string) => {
    const elementToScrollTo = document.querySelector(element);

    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Hero>
      <Container>
        <FlexBox>
          <Grid>
            <GridLeft>
              <Logo />
            </GridLeft>

            <GridRight>
              <MainTitle color="light">.envite</MainTitle>

              <SecondaryTitle color="light" textAlign="left">
                The safe way to share your secrets
              </SecondaryTitle>

              <Button
                content="How it works"
                onClick={() => scrollToElement("[data-anker='how-it-works']")}
              />
            </GridRight>
          </Grid>
        </FlexBox>

        <HideMobile>
          <FlexBox>
            <Queue />
          </FlexBox>
        </HideMobile>
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
  min-height: 65vh;
  background-image: ${({ theme }) =>
    `radial-gradient(ellipse at 46% 30%, #EE82EE00 51%, #00BCD400 81%, #14BFCA1A 90%), radial-gradient(ellipse at 0% 0%, #00BCD400 32%, #14beca11 42%, #EE82EE00 49%), linear-gradient(to right, ${theme.colors.background}, ${theme.colors.blue_dark})`};

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
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex: 1;
  }
`;

const HideMobile = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: none;
  }
`;

export default HeroLanding;
