import React from 'react';
import HeroLanding from '../hero/HeroLanding';
import Footer from '../layout/generic/Footer';
import { Grid } from '../layout/grids/Grid';
import { LayoutLanding } from '../layout/landing/LayoutLanding';
import { BaseContainer } from '../styled/containers';
import { SectionBackground, SectionBase } from '../styled/sections';

const LandingPage = () => {
  return (
    <LayoutLanding>
      <HeroLanding />
      <SectionBase>
        <BaseContainer>
          {/* grid component */}
          <Grid columns={3} rows={1}>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </Grid>
        </BaseContainer>
      </SectionBase>
      <SectionBackground>
        <BaseContainer>test</BaseContainer>
      </SectionBackground>
      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
