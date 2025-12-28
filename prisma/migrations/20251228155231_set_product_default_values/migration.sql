/*
  Warnings:

  - Made the column `discountPercent` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cashbackPercent` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "discountPercent" SET NOT NULL,
ALTER COLUMN "discountPercent" SET DEFAULT 0,
ALTER COLUMN "cashbackPercent" SET NOT NULL,
ALTER COLUMN "cashbackPercent" SET DEFAULT 0;
