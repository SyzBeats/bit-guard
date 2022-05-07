-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "Metrics" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Metrics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Metrics" ADD CONSTRAINT "Metrics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
