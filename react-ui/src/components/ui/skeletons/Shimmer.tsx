import React from 'react';
import styled, { keyframes } from 'styled-components';

const Shimmer = () => {
  return (
    <Wrapper>
      <Inner />
    </Wrapper>
  );
};

const shimmerAnimation = keyframes`
  0% {
    transform: translateX(-150%);
  }

  50%{    
    transform: translateX(-60%);
  }

  100% {
    transform: translateX(150%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${shimmerAnimation} 1.75s infinite;
  filter: blur(3px);
`;

const Inner = styled.div`
  width: 50%;
  height: 100%;
  background: #fff3;
  transform: skew(-25deg);
`;

export { Shimmer };
