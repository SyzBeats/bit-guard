import React from 'react';
import styled from 'styled-components';

import { MainTitle, SecondaryTitle } from '~/components/ui/styled/typography';

import Sharing from '../../../images/undraw_share.svg';

const HomepageStory = () => {
  return (
    <Wrapper>
      <MainTitle color='light'>Simply share your content</MainTitle>
      <Grid>
        <Content className='test'>
          <ContentBlock margin={false}>
            <SecondaryTitle color='light' textAlign='left'>
              Creating a Message
            </SecondaryTitle>
            <p>In your dashboard, simply create a new message. The content of this message will be encrypted and stored
              in our database.</p>
          </ContentBlock>

          <ContentBlock margin={true}>
            <SecondaryTitle color='light' textAlign='left'>
              Generate a Link
            </SecondaryTitle>
            <p>
              To give people access to your secrets, you will have to generate a Link for your Message. This link will
              point to the
              encrypted content of your Message.
            </p>
          </ContentBlock>

          <ContentBlock margin={true}>
            <SecondaryTitle color='light' textAlign='left'>
              Share the Link with anyone
            </SecondaryTitle>
            <p>
              You choose who can access your Message. You can share the link with anyone you want. Friends, family,
              coworkers or business
              partners.
            </p>
          </ContentBlock>
        </Content>
        <Image src={Sharing} alt='Illustration of sharing people' />
      </Grid>
    </Wrapper>
  );
};

// --- Styled components ---

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

export { HomepageStory };
