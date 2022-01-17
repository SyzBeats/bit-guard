import React from 'react';
import styled from 'styled-components';
import Sharing from '../../../images/undraw_share.svg';
import { MainTitle, SecondaryTitle } from '../../styled/typography';
const Story = () => {
  return (
    <Wrapper>
      <MainTitle>Simply share your content</MainTitle>
      <Grid>
        <Content className="test">
          <ContentBlock>
            <SecondaryTitle color="light" textAlign="left">
              Creating a Message
            </SecondaryTitle>
            <p>
              In your dashboard, simply create a new message. The content of
              this message will be encrypted and stored in our database.
            </p>
          </ContentBlock>
          <ContentBlock>
            <SecondaryTitle color="light" textAlign="left">
              Generate a Link
            </SecondaryTitle>
            <p>
              To give people access to your secrets, you will have to generate a
              Link for your Message. This link will point to the encrypted
              content of your Message.
            </p>
          </ContentBlock>
          <ContentBlock>
            <SecondaryTitle color="light" textAlign="left">
              Share the Link with anyone
            </SecondaryTitle>
            <p>
              You choose who can access your Message. You can share the link
              with anyone you want. Friends, family, coworkers or business
              partners.
            </p>
          </ContentBlock>
        </Content>
        <Image src={Sharing} alt="Illustration of sharing people" />
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
`;

const ContentBlock = styled.div`
  margin-top: 2rem;
`;

export default Story;
