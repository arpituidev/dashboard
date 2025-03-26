/*
  Warnings:

  - You are about to drop the column `totalPuchase` on the `PurchaseSummary` table. All the data in the column will be lost.
  - Added the required column `totalPurchased` to the `PurchaseSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "totalPuchase",
ADD COLUMN     "totalPurchased" DOUBLE PRECISION NOT NULL;
