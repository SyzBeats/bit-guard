import React from 'react';
import './style/App.css';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout/Layout';
import { theme } from './themes/theme-brand';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <p>test</p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
