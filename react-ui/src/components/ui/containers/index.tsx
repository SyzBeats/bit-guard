/**
 * @escription containers are elements inside sections
 * which determine the with of the inner content
 *
 * a typical structure would be
 *
 * <Section>
 *  <Container />
 * </Section>
 */

import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  padding?: string;
}

interface IWrapperProps {
  padding?: string;
}

const BaseContainer = ({ children, padding = '10rem 2rem' }: IProps) => {
  return <Wrapper padding={padding}>{children}</Wrapper>;
};

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  padding: ${({ padding }) => padding};
  max-width: ${({ theme }) => theme.breakpoints.lg};
  border-left: 2px dashed #8080803d;
  border-right: 2px dashed #8080803d;
`;

export { BaseContainer };
