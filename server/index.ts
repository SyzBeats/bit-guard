/* eslint-disable wrap-iife */
import * as fs from 'fs';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';

import options from './config/options';
import { createContext } from './context';
import { Query, Mutation, Message, User } from './resolvers';

// Route definitions
import _api from './rest-api/controllers';

// Constants
const app = express();

// Middleware
app.use(express.json({ limit: options.server.limit }));
app.use(cors(options.cors));

// Routes
app.use('/api/public', _api.publicRoutes);

const resolvers = {
  Query,
  Mutation,
  Message,
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

  app.listen({ port: options.server.port }, () => {
    console.log('🚀 Server ready');
  });
})();
