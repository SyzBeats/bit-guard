import React from 'react';
import { IconName } from '../../../typings/enums';
import { Grid } from '../../layout/grids/Grid';
import { IconBox } from '../../styled/boxes/IconBox';

const LandingPageIconGrid = () => {
  return (
    <Grid rows={2}>
      <IconBox
        title="Leave no traces"
        content="We make sure that none of your messages trace back to you or your identity. Your email address, and your personal information will not be linked or stored anywhere with your created content."
        type={IconName.FINGERPRINT}
        textColor="dark"
      />

      <IconBox
        title="Secure data"
        content="Each message is encrypted with a secure encryption algorithm. Our choice was a computationally secure and symmetric encryption algorithm that has not yet been broken in practice."
        type={IconName.DATABASE}
        textColor="dark"
      />

      <IconBox
        title="Additional layer of security"
        content="In addition to our systems, you can also secure your messages and links with a password of your choice. This way, your message remains safe even if someone gains unauthorized access to the link"
        type={IconName.LOCK}
        textColor="dark"
      />

      <IconBox
        title="Lock your content"
        content="You always have control over what can be read. You can temporarily block your messages. This way, no one will be able to continue accessing the content until you approve the content."
        type={IconName.WALL}
        textColor="dark"
      />

      <IconBox
        title="Secure Network"
        content="We use TLS and HTTPS to secure all connections to our servers. So you can be sure that nobody can read the data exchange between you and our servers."
        type={IconName.WORLD}
        textColor="dark"
      />

      <IconBox
        title="Two factor authentication"
        content="We want to protect your account at all costs. That's why you have the option to set up a two-factor authentication. This makes unauthorized access to your account much more difficult."
        type={IconName.PINCODE}
        textColor="dark"
      />
    </Grid>
  );
};

export { LandingPageIconGrid };
