import React from 'react';
import styled from 'styled-components';
import { Shimmer } from './Shimmer';

interface Props {
  bg?: string;
  rounded?: boolean;
  children: React.ReactNode;
}

const SkeletonWrapper = ({ children, bg, rounded }: Props) => {
  return (
    <Wrapper bg={bg} rounded={rounded}>
      {children}
      <Shimmer />
    </Wrapper>
  );
};

interface WrapperProps {
  bg?: string;
  rounded?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  overflow: hidden;
  background: ${({ bg }) => (bg === 'dark' ? '#282828' : 'white')};
  display: block;
  margin: 2rem 0;
  padding: 0.5rem 0.5rem;
  border-radius: ${({ rounded }) => (rounded ? '.4rem' : '0')};
`;

export { SkeletonWrapper };
