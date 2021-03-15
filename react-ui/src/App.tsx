import React from 'react';
import './style/App.css';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout/Layout';
import { theme } from './themes/theme-brand';
import Header from './components/navigation/Header';
import AppState from './context/app/AppState';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <Layout>
          <Header />
          <p>test</p>
        </Layout>
      </AppState>
    </ThemeProvider>
  );
}

export default App;
