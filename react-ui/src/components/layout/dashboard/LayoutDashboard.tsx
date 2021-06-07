import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../navigation/Sidebar';

const LayoutDashboard = ({ children }) => (
  <Container>
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

const Container = styled.section`
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
`;

const Content = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
`;

export { LayoutDashboard };
