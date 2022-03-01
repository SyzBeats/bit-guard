import React from 'react';
import styled from 'styled-components';
import CreatePublicSignal from '../../../ui/forms/createPublicSignal';
import { ContentBox } from '../../../ui/styled/boxes/ContentBox';
import { SecondaryTitleBlue } from '../../../ui/styled/typography';

const SignalBox = () => {
  return (
    <>
      <Wrapper>
        <SecondaryTitleBlue color="light" textAlign="center">
          Create your secure secret!
        </SecondaryTitleBlue>
        <ContentBox bordered borderColor="dark">
          <CreatePublicSignal />
        </ContentBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 80rem;
  margin: 10rem auto 0 auto;
`;

export default SignalBox;
