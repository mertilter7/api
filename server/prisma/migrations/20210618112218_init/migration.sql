/*
  Warnings:

  - You are about to drop the column `description` on the `slides` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `slides` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `slides` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `newsId` ON `images`;

-- AlterTable
ALTER TABLE `slides` DROP COLUMN `description`,
    DROP COLUMN `subtitle`,
    DROP COLUMN `title`;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `News`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `Slides`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
