import styled from 'styled-components';

import TypeSelector from '../../../shared/SecretTypeSelector';
import { SecondaryTitleBlue } from '../../../ui/styled/typography';

const SignalBox = () => {
  return (
    <Wrapper>
      <SecondaryTitleBlue color="light" textAlign="center">
        Select a message type:
      </SecondaryTitleBlue>

      <TypeSelector />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 100rem;
  margin: 0rem auto 0rem auto;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export default SignalBox;
