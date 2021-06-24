import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <HeaderNavigation>
      <LoginLink to="/login">login</LoginLink>
    </HeaderNavigation>
  );
};

const HeaderNavigation = styled.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;

  color: white;
  z-index: 100;
`;

const LoginLink = styled(Link)`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.background_dark};
  color: white;
  text-decoration: none;
`;
export default Navigation;
