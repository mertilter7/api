/*
  Warnings:

  - You are about to drop the column `imagesId` on the `news` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `imagesId` ON `news`;

-- AlterTable
ALTER TABLE `images` ADD COLUMN `newsId` INTEGER,
    ADD COLUMN `slideId` INTEGER;

-- AlterTable
ALTER TABLE `news` DROP COLUMN `imagesId`;

-- CreateTable
CREATE TABLE `Slides` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(300) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `News`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `Slides`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
