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

const BaseContainer = styled.div`
  width: 100%;
  padding: 10rem 2rem;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  border-left: 2px dashed #8080803d;
  border-right: 2px dashed #8080803d;
`;
export { BaseContainer };
