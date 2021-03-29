import { InMemoryCache, makeVar } from '@apollo/client';

/**
 * @description create the initial reactive variables to access
 * them via Apollo cache
 */
export const currentMessage = makeVar(null);

/**
 * @description define field policies to enable the read functionality of reactive variables
 */
export const cache = new InMemoryCache({
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
