import React from 'react';

import { BaseContainer } from '../../ui/containers';
import { SectionControl } from './SectionControl';
import { HomepageStory } from './Story';
import { LandingPageIconGrid } from './IconGrid';
import { LayoutLanding } from '../../layout/landing/LayoutLanding';
import { SecondaryTitle } from '../../ui/styled/typography';
import { SectionBackground, SectionBase, SectionGradientBase } from '../../ui/styled/sections';
import CallToAction from './CallToAction';
import Footer from '../../layout/generic/footer/Footer';
import HeroLanding from './Hero';
import Navigation from './Navigation';
import SignalBox from './signal/SignalBox';

const HomePage = () => {
  return (
    <LayoutLanding>
      <Navigation />

      <HeroLanding />

      <SectionGradientBase>
        <BaseContainer data-anker="how-it-works">
          <SignalBox />
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
          <SectionControl />
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

export { HomePage };
