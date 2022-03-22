import { createHttpLink } from '@apollo/client';
import { InMemoryCache, makeVar } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

import environment from './environment';

/**
 * @description create the initial reactive variables to access
 * them via Apollo cache
 */
const currentMessage = makeVar(null);

/**
 * @description define field policies to enable the read functionality of reactive variables
 */
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // current selected employee
        currentEmployee: {
          read() {
            return currentMessage();
          },
        },
      },
    },
  },
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
    for (const error of graphQLErrors) {
      // ensure that once a token is expired, the user is redirected to the login page
      if (['jwt expired', 'invalid signature'].includes(error.message)) {
        localStorage.removeItem('token');

        window.location.reload();
      }
    }
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const httpLink = createHttpLink({
  uri: `${environment.API_URL}/graphql`,
});

export default {
  cache,
  currentMessage,
  errorLink,
  authLink,
  httpLink,
};
