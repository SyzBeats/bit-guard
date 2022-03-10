import React from 'react';
import { Info } from 'react-feather';
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

        <p>
          <Info />
          You can share the secret with anyone you want. The secret will be destroyed after it is used.
        </p>
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

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export default SignalBox;
