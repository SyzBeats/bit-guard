import React from 'react';

import { BaseContainer } from '~/components/ui/containers/BaseContainer';
import { SectionControl } from './SectionControl';
import { HomepageStory } from './Story';
import { LayoutMain } from '~/components/layout/landing/layoutMain';
import { SectionBackground, SectionBase } from '~/components/ui/styled/sections';
import CallToAction from './CallToAction';
import HeroLanding from './Hero';
import SignalBox from './signal/SignalBox';

const HomePage = () => {
  return (
    <LayoutMain>
      <HeroLanding />

      <SectionBase>
        <BaseContainer anker="how-it-works">
          <SignalBox />
        </BaseContainer>
      </SectionBase>

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
    </LayoutMain>
  );
};

export { HomePage };
