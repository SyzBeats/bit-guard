import React from 'react';
import styled from 'styled-components';

interface ContextBoxInterface {
  title: string;
}

const ContentBox = ({ title }: ContextBoxInterface) => {
  return (
    <Wrapper>
      <ActionBar>
        <ActionIcon background="red" />
        <ActionIcon background="gold" />
        <ActionIcon background="green" />
      </ActionBar>
      <Title>{title}</Title>
    </Wrapper>
  );
};

type ActionIconType = {
  background: string;
};

const Wrapper = styled.div`
  display: flex;
  justify-items: center;
  justify-content: flex-start;
  flex-direction: column;

  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};

  margin: 2rem 1rem;
  padding: 1.5rem;
  height: 20rem;
  background: ${({ theme }) => theme.colors.background};
  color: white;
`;

const ActionBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 0.5rem 0;
`;

const ActionIcon = styled.div<ActionIconType>`
  background: ${(props) => props.background};
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  margin: 0 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h2`
  align-self: flex-start;
  justify-self: baseline;
  font-weight: 400;
  letter-spacing: 0.15rem;
  font-size: 2rem;
`;

export { ContentBox };
