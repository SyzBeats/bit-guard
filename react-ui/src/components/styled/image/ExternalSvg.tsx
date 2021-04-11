import React from 'react';
import styled from 'styled-components';

type ExternalSvgType = {
  src: string;
};

const ExternalSvg = ({ src }: ExternalSvgType) => {
  return <ExternalSvgWrapper src={src} />;
};

const ExternalSvgWrapper = styled.img`
  width: 8rem;
`;
export { ExternalSvg };
