import styled from 'styled-components';

import { PropsChildren } from '~/types/types-components';
import { Sidebar } from '~/components/ui/navigation/Sidebar';

const LayoutDashboard = ({ children }: PropsChildren) => (
  <Container>
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

// --- Styled components ---

const Container = styled.section`
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  background: #e9e9e9;
`;

const Content = styled.div`
  transition: all 0.3s ease-in-out;
  max-width: 160rem;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
`;

export { LayoutDashboard };
