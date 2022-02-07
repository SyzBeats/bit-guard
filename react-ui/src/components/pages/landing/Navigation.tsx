import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogIn } from 'react-feather';

const Navigation = () => {
  return (
    <HeaderNavigation>
      <LoginLink to="/login">
        login <LogIn />
      </LoginLink>
    </HeaderNavigation>
  );
};

const HeaderNavigation = styled.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;

  color: #fff;
  z-index: 100;
`;

const LoginLink = styled(Link)`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.blue_dark};
  color: #fff;
  text-decoration: none;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export default Navigation;
