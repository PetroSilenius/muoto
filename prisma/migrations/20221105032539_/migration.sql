/*
  Warnings:

  - Added the required column `type` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "questionType" AS ENUM ('activity', 'positive_trait', 'negative_trait');

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "type" "questionType" NOT NULL;
