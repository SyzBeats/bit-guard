// Import PrismaClient
import { PrismaClient } from '@prisma/client';

import { IS_PROD } from '../config/keys';

// Declare prisma variable
let prisma: PrismaClient;

// Check if running in production
if (IS_PROD) {
  prisma = new PrismaClient();
} else {
  // Use globalThis to access the global object and avoid errors
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}
export { prisma };
