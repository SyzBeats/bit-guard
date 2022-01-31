import React from 'react';
import styled from 'styled-components';

interface ContextBoxInterface {
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
}

const ContentBox = ({
  title,
  children,
  bordered = false,
}: ContextBoxInterface) => {
  return (
    <Wrapper bordered={bordered}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

interface WrapperProps {
  bordered?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-items: center;
  justify-content: flex-start;
  flex-direction: column;

  border-radius: 0.55rem;
  box-shadow: ${({ theme }) => theme.shadows.card_2};

  margin: 2rem 0;
  padding: 1.5rem;
  min-height: 15rem;
  background: ${({ theme }) => theme.colors.white};
  color: #494949;

  border-top: ${({ theme, bordered }) =>
    bordered ? `.6rem solid ${theme.colors.highlight_iceblue}` : 'none'};
`;

const Title = styled.h2`
  align-self: flex-start;
  justify-self: baseline;
  font-weight: 400;
  letter-spacing: 0.15rem;
  font-size: 2rem;
`;

export { ContentBox };
