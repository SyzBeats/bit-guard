import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { setContext } from '@apollo/client/link/context';
import { cache } from './config/cache';
import { theme } from './themes/theme-brand';
import AppState from './context/app/AppState';
import Layout from './components/layout/Layout';
import Header from './components/navigation/Header';
import Main from './components/layout/Main';
import './style/App.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
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
