import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoPath from '../../../../images/shield_logosvg.svg';

interface Props {
  width?: string;
}

const Logo = ({ width }: Props) => {
  return (
    <Link to="/">
      <BrandLogo width={width} src={LogoPath} />
    </Link>
  );
};

const BrandLogo = styled.img<Props>`
  width: ${({ width }) => width || '8rem'};
`;

export default Logo;
