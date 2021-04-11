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
            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.FINGERPRINT}
              textColor="dark"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.DATABASE}
              textColor="dark"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.LOCK}
              textColor="dark"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.WALL}
              textColor="dark"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.WORLD}
              textColor="dark"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.PINCODE}
              textColor="dark"
            />
          </Grid>
        </BaseContainer>
      </SectionBase>
      <SectionBackground>
        <BaseContainer>
          {/* grid component */}
          <Grid columns={3} rows={2}>
            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.FINGERPRINT}
              textColor="light"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.DATABASE}
              textColor="light"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.LOCK}
              textColor="light"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.WALL}
              textColor="light"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.WORLD}
              textColor="light"
            />

            <IconBox
              title="Fingerprint"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis."
              type={IconName.PINCODE}
              textColor="light"
            />
          </Grid>
        </BaseContainer>
      </SectionBackground>
      <Footer />
    </LayoutLanding>
  );
};

export { LandingPage };
