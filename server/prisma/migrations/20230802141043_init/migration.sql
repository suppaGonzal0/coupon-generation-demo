/*
  Warnings:

  - Added the required column `expiryDate` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Coupon_code_key` ON `coupon`;

-- AlterTable
ALTER TABLE `coupon` ADD COLUMN `expiryDate` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`code`);
