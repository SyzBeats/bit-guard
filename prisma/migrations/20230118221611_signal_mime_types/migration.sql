-- CreateEnum
CREATE TYPE "Type" AS ENUM ('text', 'image', 'video', 'audio', 'file');

-- CreateEnum
CREATE TYPE "Extension" AS ENUM ('txt', 'png', 'jpg', 'jpeg', 'gif', 'mp4', 'mp3', 'wav', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar', 'tar', 'gz');

-- AlterTable
ALTER TABLE "PublicSignal" ADD COLUMN     "extension" "Extension" DEFAULT 'txt',
ADD COLUMN     "type" "Type" NOT NULL DEFAULT 'text';

-- AlterTable
ALTER TABLE "Signal" ADD COLUMN     "extension" "Extension" DEFAULT 'txt',
ADD COLUMN     "type" "Type" NOT NULL DEFAULT 'text';
