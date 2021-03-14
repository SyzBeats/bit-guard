import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import * as fs from 'fs';
import { createContext } from './context';
import { Query, Mutation, Message, Link, User } from './resolvers';
// routes
import __public from './rest_routes/public';

// @ts-ignore
const app = express();

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

server.applyMiddleware({ app, path: '/graphql' });

app.use('/public', __public);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
