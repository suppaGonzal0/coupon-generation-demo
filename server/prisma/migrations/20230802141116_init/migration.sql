/*
  Warnings:

  - The primary key for the `coupon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `code` on the `coupon` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `coupon` DROP PRIMARY KEY,
    MODIFY `code` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`code`);
