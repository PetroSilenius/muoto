/*
  Warnings:

  - The values [activity] on the enum `questionType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "questionType_new" AS ENUM ('feeling', 'positive_trait', 'negative_trait');
ALTER TABLE "questions" ALTER COLUMN "type" TYPE TEXT;
UPDATE "questions" SET "type" = 'feeling' WHERE "type" = 'activity';
ALTER TABLE "questions" ALTER COLUMN "type" TYPE "questionType_new" USING "type"::text::"questionType_new";
ALTER TYPE "questionType" RENAME TO "questionType_old";
ALTER TYPE "questionType_new" RENAME TO "questionType";
DROP TYPE "questionType_old";
COMMIT;
