import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { cache } from './config/cache';
import { theme } from './themes/theme-brand';
import AppState from './context/app/AppState';
import Dashboard from './components/dashboard/Dashboard';
import { LandingPage } from './components/pages/landing/LandingPage';
import './style/App.css';
import Login from './components/authentication/Login';

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </AppState>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
