import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import config from '~/config';
import waves from '~/images/waves.svg';
import Button from '~/components/ui/buttons/Button';
import { SecondaryTitle } from '~/components/ui/styled/typography';

const CallToAction = () => {
  return (
    <Wrapper>
      <SecondaryTitle color="light">Create your account!</SecondaryTitle>
      {config.environment.MODE === 'development' ? (
        <Link to="/signup">
          <Button content="Start for free!" />
        </Link>
      ) : (
        <p>coming soon</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 25rem;
  width: clamp(25rem, 80%, 90rem);

  background-image: ${({ theme }) => `url(${waves}), linear-gradient(to bottom, ${theme.colors.background} , ${theme.colors.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 35%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;
  margin: auto;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.3);
  padding: 2rem;

  p {
    color: white;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-position: unset;
    height: 20rem;
    padding: 2rem;
    gap: 0rem;
  }
`;

export default CallToAction;
