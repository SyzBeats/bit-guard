import React from 'react';
import LogoPath from '../../../images/shield_logosvg.svg';
import styled from 'styled-components';

const Logo = () => {
  return <BrandLogo src={LogoPath} />;
};

const BrandLogo = styled.img`
  width: 8rem;
`;
export default Logo;
