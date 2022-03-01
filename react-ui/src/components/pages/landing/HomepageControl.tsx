import React from 'react';
import styled from 'styled-components';
import Sharing from '../../../images/undraw_control.svg';
import { MainTitle, SecondaryTitle } from '../../ui/styled/typography';
const HomepageControl = () => {
  return (
    <Wrapper>
      <MainTitle color="dark">Advanced Control Panel</MainTitle>
      <Grid>
        <Image src={Sharing} alt="Illustration of sharing people" />
        <Content className="test">
          <ContentBlock margin={false}>
            <SecondaryTitle color="dark" textAlign="left">
              Administer your secrets
            </SecondaryTitle>
            <p>
              You have full control over your secrets at any time. You can view recent activity or change the settings of your generated
              messages and links as many times as you want.
            </p>
          </ContentBlock>
          <ContentBlock margin={true}>
            <SecondaryTitle color="dark" textAlign="left">
              Secure secrets with Passwords
            </SecondaryTitle>
            <p>
              You want an extra layer of security? Protect your secrets with a password. That way even if an unauthorized person obtains the
              link, they will not be able to access it without the password.
            </p>
          </ContentBlock>
          <ContentBlock margin={true}>
            <SecondaryTitle color="dark" textAlign="left">
              Delete at any time
            </SecondaryTitle>
            <p>
              You can delete your messages and links at any time. This will completely remove the content from our database - no traces left
            </p>
          </ContentBlock>
        </Content>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 10rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;

interface ContentBlockProps {
  margin: boolean;
}

const ContentBlock = styled.div<ContentBlockProps>`
  margin-top: ${(props) => (props.margin ? '2rem' : '0')};
`;

export { HomepageControl };
