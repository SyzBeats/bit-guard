import React from 'react';
import styled from 'styled-components';

interface ContextBoxInterface {
  children: React.ReactNode;
  title?: string;
  bordered?: boolean;
  borderColor?: string;
}

interface WrapperProps {
  bordered?: boolean;
  borderColor: string;
  backgroundColor?: string;
}

const ContentBox = ({ title = '', children, bordered = false, borderColor = 'light' }: ContextBoxInterface) => {
  return (
    <Wrapper borderColor={borderColor} bordered={bordered}>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-items: center;
  justify-content: flex-start;
  flex-direction: column;

  box-shadow: ${({ theme }) => theme.shadows.card_2};

  margin: 2rem 0;
  padding: 1.5rem;
  min-height: 20rem;
  max-height: 50vh;

  background: ${({ theme }) => theme.colors.white};
  color: var(--color-grey--dark);

  border-radius: 0.55rem;
  border-top: ${({ bordered }) => (bordered ? '.6rem solid' : 'none')};
  border-color: ${({ theme, borderColor }) =>
    borderColor === 'light' ? `${theme.colors.highlight_iceblue}` : `${theme.colors.highlight_blue}`};

  // make box scrollable
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: 60rem;
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
