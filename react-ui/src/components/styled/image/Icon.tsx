import React from 'react';
import styled from 'styled-components';

type IconType = {
  src: string;
};

const Icon = ({ src }: IconType) => {
  return <IconWrapper src={src} />;
};

const IconWrapper = styled.img`
  width: 8rem;
`;
export { Icon };
