import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
import { AvatarType } from '../../../typings/types-components';
import Logo from '../styled/image/Logo';

const Avatar = ({ src, alt }: AvatarType) => {
  // in production mode, we currently use the default avatar
  if (config.environment.MODE !== 'development') {
    return <Logo width="3rem" />;
  }

  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};
`;

export default Avatar;
