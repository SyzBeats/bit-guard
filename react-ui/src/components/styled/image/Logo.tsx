import React from 'react';
import LogoPath from '../../../images/shield_logosvg.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <BrandLogo src={LogoPath} />
    </Link>
  );
};

const BrandLogo = styled.img`
  width: 8rem;
`;
export default Logo;
