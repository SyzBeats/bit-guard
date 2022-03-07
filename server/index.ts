/* eslint-disable wrap-iife */
import * as fs from 'fs';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';

import options from './config/options';
import { createContext } from './context';
import { Query, Mutation, Message, Link, User } from './resolvers';

// routes
import __api from './rest-api/controllers';

// constants
const port = options.server.port;
const limit = '100kb';
const app = express();

// middleware
app.use(express.json({ limit }));
app.use(cors(options.cors));
app.use('/api/public', __api.publicRoutes);

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
});

(async function start() {
  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port }, () => {
    console.log('🚀 Server ready');
  });
})();
