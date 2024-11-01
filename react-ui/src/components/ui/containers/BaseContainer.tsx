/**
 * @escription containers are elements inside sections
 * which determine the width of the inner content
 *
 * a typical structure would be
 *
 * <Section>
 *  <Container />
 * </Section>
 */
import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  padding?: string;
  anker?: string;
}

interface IWrapperProps {
  padding?: string;
}

const BaseContainer = ({ children, padding = '10rem 2rem', anker = '' }: IProps) => {
  const forwardedProps = {
    padding,
    'data-anker': anker || undefined,
  };

  return <Wrapper {...forwardedProps}>{children}</Wrapper>;
};

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  padding: ${({ padding }) => padding};
  max-width: ${({ theme }) => theme.breakpoints.lg};
  border-left: 2px dashed #8080803d;
  border-right: 2px dashed #8080803d;
`;

export { BaseContainer };
