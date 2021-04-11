import styled from 'styled-components';

const SectionBase = styled.section`
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: center;
`;

const SectionBackground = styled(SectionBase)`
  color: white;
  background-color: ${({ theme }) => theme.colors.background};
`;

export { SectionBackground, SectionBase };
