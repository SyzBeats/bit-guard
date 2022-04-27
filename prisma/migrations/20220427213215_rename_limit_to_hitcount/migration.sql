/*
  Warnings:

  - You are about to drop the column `limit` on the `RateLimit` table. All the data in the column will be lost.
  - Added the required column `hitCount` to the `RateLimit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RateLimit" DROP COLUMN "limit",
ADD COLUMN     "hitCount" INTEGER NOT NULL;
