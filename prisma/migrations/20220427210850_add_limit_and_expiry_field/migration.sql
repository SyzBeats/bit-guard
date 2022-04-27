/*
  Warnings:

  - Added the required column `expire` to the `RateLimit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `limit` to the `RateLimit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RateLimit" ADD COLUMN     "expire" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "limit" INTEGER NOT NULL;
