import React from 'react';
import styled from 'styled-components';

const LayoutLanding = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

const Container = styled.section`
  min-height: 100vh;
`;

const Content = styled.div`
  background: #f9f9f9;
  height: 100%;
`;

export { LayoutLanding };
