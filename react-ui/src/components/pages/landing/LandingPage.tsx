import React from 'react';
import HeroLanding from '../../hero/HeroLanding';
import Footer from '../../layout/generic/footer/Footer';
import { Grid } from '../../layout/grids/Grid';
import { LayoutLanding } from '../../layout/landing/LayoutLanding';
import { BaseContainer } from '../../styled/containers';
import { SectionBackground, SectionBase } from '../../styled/sections';
// icons
import { LandingPageIconGrid } from './IconGrid';
import { SecondaryTitle } from '../../styled/typography';

const LandingPage = () => {
  return (
    <LayoutLanding>
      <HeroLanding />
      <SectionBase>
        <BaseContainer>
          <SecondaryTitle color="dark" textAlign="center">
            What Bit Guard does for you
          </SecondaryTitle>
          <LandingPageIconGrid />
        </BaseContainer>
      </SectionBase>
      <SectionBackground>
        <BaseContainer>
          <Grid columns={3} rows={2}></Grid>
        </BaseContainer>
      </SectionBackground>
      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
