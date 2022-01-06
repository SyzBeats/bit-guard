import React from 'react';
import HeroLanding from './hero/HeroLanding';
import Footer from '../../layout/generic/footer/Footer';
import { Grid } from '../../layout/grids/Grid';
import { LayoutLanding } from '../../layout/landing/LayoutLanding';
import { BaseContainer } from '../../styled/containers';
import { SectionBackground, SectionGradientBase } from '../../styled/sections';
// icons
import { LandingPageIconGrid } from './IconGrid';
import { SecondaryTitle } from '../../styled/typography';
import Navigation from './Navigation';

const LandingPage = () => {
  return (
    <LayoutLanding>
      <Navigation />
      <HeroLanding />
      <SectionGradientBase>
        <BaseContainer>
          <SecondaryTitle color="dark" textAlign="center">
            What Bit Guard does for you
          </SecondaryTitle>
          <LandingPageIconGrid />
        </BaseContainer>
      </SectionGradientBase>
      <SectionBackground>
        <BaseContainer>
          <Grid rows={2}></Grid>
        </BaseContainer>
      </SectionBackground>
      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
