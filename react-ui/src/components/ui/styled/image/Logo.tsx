import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoPath from '../../../../images/shield_logosvg.svg';

interface Props {
	width?: string;
}

const Logo = ({ width }: Props) => {
	return (
		<>
			<svg width='0' height='0' style={{ zIndex: -1 }}>
				<filter id='blur-and-scale' y='-50%' x='-50%' width='200%' height='200%'>
					<feGaussianBlur in='SourceGraphic' stdDeviation='20' result='blurred' />
					<feColorMatrix type='saturate' in='blurred' values='2' />
					<feComposite in='SourceGraphic' operator='over' />
				</filter>
			</svg>

			<Link to='/'>
				<BrandLogo width={width} src={LogoPath} />
			</Link>
		</>
	);
};

const BrandLogo = styled.img<Props>`
  width: ${({ width }) => width || '11rem'};
  filter: url(#blur-and-scale);
`;

export default Logo;
