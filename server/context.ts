import { PrismaClient } from '@prisma/client';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  req: ExpressContext['req'];
}

export function createContext(req: ExpressContext['req']): Context {
  return { prisma, req };
}
