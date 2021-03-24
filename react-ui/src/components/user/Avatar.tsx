import React from 'react';
import styled from 'styled-components';
import { AvatarType } from '../../typings/types-components';

const Avatar = ({ src, alt }: AvatarType) => {
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
