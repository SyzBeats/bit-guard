import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { cache } from './config/apollo/cache';

import Dashboard from './components/pages/dashboard/Dashboard';
import { theme } from './style/themes/theme-brand';
import './style/App.css';

import { LandingPage } from './components/pages/landing/LandingPage';
import Login from './components/authentication/Login';
import ProtectedRoute from './components/routes/Protected';
import PublicOnlyRoute from './components/routes/PublicOnly';
import SignUp from './components/authentication/Signup';
import { RevealPage } from './components/pages/reveal/RevealPage';

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

// global error handler
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // executes a function for each graphql error
    for (let error of graphQLErrors) {
      // ensure that once a token is expired, the user is redirected to the login page
      if (error.message === 'jwt expired') {
        localStorage.removeItem('token');
        window.location.reload();
      }
    }
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="reveal" element={<RevealPage />}>
              <Route path=":secret">
                <Route path=":key" />
              </Route>
            </Route>

            <Route
              path="/login"
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicOnlyRoute>
                  <SignUp />
                </PublicOnlyRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
