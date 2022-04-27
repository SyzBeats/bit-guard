/*
  Warnings:

  - Added the required column `title` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Signal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Signal" ADD COLUMN     "title" TEXT NOT NULL;
