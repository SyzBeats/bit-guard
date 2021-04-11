import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { cache } from './config/cache';
import { theme } from './themes/theme-brand';
import AppState from './context/app/AppState';
import Dashboard from './components/dashboard/Dashboard';
import { LandingPage } from './components/pages/landing/LandingPage';
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
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </AppState>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
