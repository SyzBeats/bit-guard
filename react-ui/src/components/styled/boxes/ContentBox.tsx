import React from 'react';
import styled from 'styled-components';

interface ContextBoxInterface {
  title: string;
}

const ContentBox = ({ title }: ContextBoxInterface) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-items: center;
  justify-content: flex-start;

  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};

  margin: 2rem 1rem;
  padding: 1.5rem;
  height: 20rem;
`;

const Title = styled.h2`
  align-self: flex-start;
  justify-self: baseline;
  font-weight: 400;
  letter-spacing: 0.15rem;
  font-size: 2rem;
`;

export { ContentBox };
