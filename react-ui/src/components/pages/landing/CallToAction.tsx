import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import waves from '../../../images/waves.svg';
import Button from '../../styled/buttons';
import { SecondaryTitle } from '../../styled/typography';

const CallToAction = () => {
  return (
    <Wrapper>
      <SecondaryTitle color="light">Create your account!</SecondaryTitle>
      <Link to="/signup">
        <Button content="Start for free!" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 32rem;
  width: clamp(25rem, 80%, 90rem);

  background-image: url(${waves});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;
  margin: auto;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.3);
  padding: 2rem;
`;

export default CallToAction;
