import React from 'react';
import HeroLanding from '../hero/HeroLanding';
import Footer from '../layout/Footer';
import { Queue } from '../effects/Queue/Queue';
import { LayoutLanding } from '../layout/LayoutLanding';

const LandingPage = () => {
  return (
    <LayoutLanding>
      <HeroLanding />
      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
