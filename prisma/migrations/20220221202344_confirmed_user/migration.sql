-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmed" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "PublicSignal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PublicSignal_pkey" PRIMARY KEY ("id")
);
