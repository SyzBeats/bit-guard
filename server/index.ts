/* eslint-disable wrap-iife */
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import express from 'express';
import * as fs from 'fs';
import cors from 'cors';
import { createContext } from './context';
import { Query, Mutation, Message, Link, User } from './resolvers';
// routes
import __public from './rest-routes/public';
import options from './config/options';

// @ts-ignore
const app = express();

app.use(cors(options.cors));

const resolvers = {
  Query,
  Mutation,
  Message,
  Link,
  User,
};

const server = new ApolloServer({
  typeDefs: gql`
    ${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf-8')}
  `,
  resolvers,
  context: ({ req }) => createContext(req),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

(async function start() {
  await server.start();

  app.use('/public', __public);

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
})();
