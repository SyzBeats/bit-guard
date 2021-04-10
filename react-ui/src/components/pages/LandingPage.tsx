import React from 'react';
import HeroLanding from '../hero/HeroLanding';
import Footer from '../layout/Footer';
import { LayoutLanding } from '../layout/LayoutLanding';
import { BaseContainer } from '../styled/containers';
import { SectionBackground, SectionBase } from '../styled/sections';

const LandingPage = () => {
  return (
    <LayoutLanding>
      <HeroLanding />
      <SectionBase>
        <BaseContainer>test</BaseContainer>
      </SectionBase>
      <SectionBackground>
        <BaseContainer>test</BaseContainer>
      </SectionBackground>
      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
