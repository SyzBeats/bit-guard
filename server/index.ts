/* eslint-disable wrap-iife */
import * as fs from 'fs';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import express from 'express';
import cors from 'cors';

import { createContext } from './context';
import { Query, Mutation, Message, Link, User } from './resolvers';
import options from './config/options';

// routes
import __public from './rest-routes/public';

const PORT = process.env.PORT || options.port;
const app = express();

app.use(cors(options.cors));
app.use('/public', __public);

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

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
})();
