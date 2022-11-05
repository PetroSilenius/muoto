/*
  Warnings:

  - Added the required column `type` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "questionType" AS ENUM ('ACTIVITY', 'POSITIVE_TRAIT', 'NEGATIVE_TRAIT');

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "type" "questionType" NOT NULL;
