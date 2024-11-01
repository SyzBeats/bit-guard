import styled from 'styled-components';

import Navigation from '../../pages/home/Navigation';
import Footer from '../generic/footer/Footer';

import { PropsChildren } from '~/types/types.components';

const LayoutMain = ({ children }: PropsChildren) => (
  <Container>
    <Content>
      <Navigation />
      {children}
      <Footer />
    </Content>
  </Container>
);


// --- Styled components ---
const Container = styled.main`
  min-height: 100vh;
`;

const Content = styled.div`
  background: #f9f9f9;
  height: 100%;
`;

export { LayoutMain };
