import { PrismaClient } from '@prisma/client';
import { IS_PROD } from '../config/keys';

let prisma: PrismaClient;

if (IS_PROD) {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export { prisma };
