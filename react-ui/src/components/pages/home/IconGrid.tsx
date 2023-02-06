import { IconName } from '~/types/enums';
import { Grid } from '~/components/layout/grids/Grid';
import { IconBox } from '~/components/ui/styled/boxes/IconBox';

const LandingPageIconGrid = () => {
  return (
    <>
      <Grid rows={1}>
        <IconBox
          title="Open source"
          content={
            <>
              It is important to us that you can trust our service. That is why we have made our code open source. You can find it on{' '}
              <a href="https://github.com/SyzBeats/envite" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              . We are also happy about every contribution to improve our service.
            </>
          }
          type={IconName.MESSAGE}
          textColor="dark"
        />
      </Grid>

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
          title="Secure Network"
          content="We use TLS and HTTPS to secure all connections to our servers. So you can be sure that nobody can read the data exchange between you and our servers."
          type={IconName.WORLD}
          textColor="dark"
        />
      </Grid>
    </>
  );
};

export { LandingPageIconGrid };
