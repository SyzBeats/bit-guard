import React from 'react';
import './style/App.css';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout/Layout';
import { theme } from './themes/theme-brand';
import Header from './components/navigation/Header';
import AppState from './context/app/AppState';
import Main from './components/layout/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <Layout>
          <Header />
          <Main>
            {/* Routes */}
            {/* Dashboard */}
            <h2>Dashboard</h2>
          </Main>
        </Layout>
      </AppState>
    </ThemeProvider>
  );
}

export default App;
