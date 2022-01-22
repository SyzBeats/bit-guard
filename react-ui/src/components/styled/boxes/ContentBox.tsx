import React from 'react';
import styled from 'styled-components';

interface ContextBoxInterface {
  title: string;
  children: React.ReactNode;
}

const ContentBox = ({ title, children }: ContextBoxInterface) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-items: center;
  justify-content: flex-start;
  flex-direction: column;

  border-radius: 0.55rem;
  box-shadow: ${({ theme }) => theme.shadows.card_2};

  margin: 2rem 1rem;
  padding: 1.5rem;
  height: 15rem;
  background: ${({ theme }) => theme.colors.white};
  color: #494949;
`;

const Title = styled.h2`
  align-self: flex-start;
  justify-self: baseline;
  font-weight: 400;
  letter-spacing: 0.15rem;
  font-size: 2rem;
`;

export { ContentBox };
