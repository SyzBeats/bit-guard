import styled from 'styled-components';

const FlexGridEqual = styled.div`
  display: flex;
  gap: 4rem;
  padding: 0rem 2rem;

  & > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export { FlexGridEqual };
