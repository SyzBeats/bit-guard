import styled from 'styled-components';

interface Props {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  padded?: boolean;
  equal?: boolean;
}

const FlexGridEqual = styled.div<Props>`
  display: flex;
  gap: 4rem;
  padding: ${({ padded }) => (padded ? '0 2rem' : '0')};

  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'initial'};

  & > * {
    flex: ${({ equal }) => (equal ? '1' : 'initial')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export { FlexGridEqual };
