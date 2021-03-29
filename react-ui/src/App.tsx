import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from 'styled-components';
import './style/App.css';
import Layout from './components/layout/Layout';
import { theme } from './themes/theme-brand';
import Header from './components/navigation/Header';
import AppState from './context/app/AppState';
import Main from './components/layout/Main';
import { cache } from './config/cache';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage
  const token = localStorage.getItem('token');
  // return headers to context to supply httpLink
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
