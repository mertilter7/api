-- DropIndex
DROP INDEX `newsId` ON `images`;

-- DropIndex
DROP INDEX `slideId` ON `images`;

-- AlterTable
ALTER TABLE `images` ADD COLUMN `productsId` INTEGER;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `News`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`slideId`) REFERENCES `Slides`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`productsId`) REFERENCES `Products`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
