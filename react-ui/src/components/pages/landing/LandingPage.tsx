import React from 'react';
import HeroLanding from '../../hero/HeroLanding';
import Footer from '../../layout/generic/Footer';
import { Grid } from '../../layout/grids/Grid';
import { LayoutLanding } from '../../layout/landing/LayoutLanding';
import { BaseContainer } from '../../styled/containers';
import { SectionBackground, SectionBase } from '../../styled/sections';
// icons
import { IconBox } from '../../styled/boxes/IconBox';
import { IconName } from '../../../typings/enums';

const LandingPage = () => {
  return (
    <LayoutLanding>
      <HeroLanding />
      <SectionBase>
        <BaseContainer>
          {/* grid component */}
          <Grid columns={3} rows={2}>
            <IconBox type={IconName.FINGERPRINT} />

            <IconBox type={IconName.DATABASE} />

            <IconBox type={IconName.LOCK} />

            <IconBox type={IconName.WALL} />

            <IconBox type={IconName.WORLD} />

            <IconBox type={IconName.PINCODE} />
          </Grid>
        </BaseContainer>
      </SectionBase>
      <SectionBackground>
        <BaseContainer>
          {/* grid component */}
          <Grid columns={3} rows={2}>
            <IconBox type={IconName.FINGERPRINT} />

            <IconBox type={IconName.DATABASE} />

            <IconBox type={IconName.LOCK} />

            <IconBox type={IconName.WALL} />

            <IconBox type={IconName.WORLD} />

            <IconBox type={IconName.PINCODE} />
          </Grid>
        </BaseContainer>
      </SectionBackground>
      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
