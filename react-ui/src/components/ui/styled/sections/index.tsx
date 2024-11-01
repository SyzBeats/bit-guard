import styled from 'styled-components';

const SectionBase = styled.section`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`;

const SectionBackground = styled(SectionBase)`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionGradientBase = styled(SectionBase)`
  background-image: ${({ theme }) => theme.gradients.grey};
`;

export { SectionBackground, SectionBase, SectionGradientBase };
