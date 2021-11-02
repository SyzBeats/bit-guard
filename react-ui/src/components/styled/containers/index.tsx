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
  padding: 5rem 0;
  max-width: ${({ theme }) => theme.breakpoints.lg};
`;
export { BaseContainer };
