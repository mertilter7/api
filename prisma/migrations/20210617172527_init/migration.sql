/*
  Warnings:

  - You are about to drop the column `newsId` on the `images` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `newsId` ON `images`;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `newsId`;

-- AlterTable
ALTER TABLE `news` ADD COLUMN `imagesId` INTEGER;

-- AddForeignKey
ALTER TABLE `News` ADD FOREIGN KEY (`imagesId`) REFERENCES `Images`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
