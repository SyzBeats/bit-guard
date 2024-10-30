import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogIn, GitHub } from 'react-feather';

import config from '../../../config';

const Navigation = () => {
  const isProduction = config.environment.MODE !== 'development';

  return (
    <HeaderNavigation>
      {!isProduction && (
        <>
          <LoginLink to="/login">
            login <LogIn />
          </LoginLink>

          <SignupLink to="/signup">
            signup <LogIn />
          </SignupLink>
        </>
      )}

      <GithubLink href="https://github.com/SyzBeats/envite" target="_blank" rel="noopener noreferrer">
        GitHub <GitHub />
      </GithubLink>
    </HeaderNavigation>
  );
};

const HeaderNavigation = styled.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;
  color: #fff;
  z-index: 100;

  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  padding: 0.75rem;
  text-decoration: none;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LoginLink = styled(NavLink)`
  background: ${({ theme }) => theme.colors.blue_dark};
  color: #fff;
`;

const SignupLink = styled(NavLink)`
  background: ${({ theme }) => theme.colors.blue_dark};
  color: ${({ theme }) => theme.colors.highlight_iceblue};
`;

const GithubLink = styled.a`
  padding: 0.75rem;
  text-decoration: none;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  line-height: 1em;

  background: ${({ theme }) => theme.colors.blue_dark};
  color: ${({ theme }) => theme.colors.highlight_iceblue};
`;

export default Navigation;
