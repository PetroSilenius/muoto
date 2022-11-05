/*
  Warnings:

  - The `value` column on the `answers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "answers" DROP COLUMN "value",
ADD COLUMN     "value" TEXT[];
