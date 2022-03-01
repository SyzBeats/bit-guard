import React from 'react';

import { BaseContainer } from '../../ui/containers';
import { HomepageControl } from './HomepageControl';
import { HomepageStory } from './Story';
import { LandingPageIconGrid } from './IconGrid';
import { LayoutLanding } from '../../layout/landing/LayoutLanding';
import { SecondaryTitle } from '../../ui/styled/typography';
import { SectionBackground, SectionBase, SectionGradientBase } from '../../ui/styled/sections';
import CallToAction from './CallToAction';
import Footer from '../../layout/generic/footer/Footer';
import HeroLanding from './hero/HeroLanding';
import Navigation from './Navigation';

const LandingPage = () => {
  return (
    <LayoutLanding>
      <Navigation />

      <HeroLanding />

      <SectionGradientBase>
        <BaseContainer data-anker="how-it-works">
          <SecondaryTitle color="dark" textAlign="center">
            What <strong>.envite</strong> does for you
          </SecondaryTitle>
          <LandingPageIconGrid />
        </BaseContainer>
      </SectionGradientBase>

      <SectionBackground>
        <BaseContainer>
          <HomepageStory />
        </BaseContainer>
      </SectionBackground>

      <SectionBase>
        <BaseContainer>
          <HomepageControl />
        </BaseContainer>
      </SectionBase>

      <SectionBase>
        <BaseContainer>
          <CallToAction />
        </BaseContainer>
      </SectionBase>

      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
