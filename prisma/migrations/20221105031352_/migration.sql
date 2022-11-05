-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "description" TEXT;

-- RenameForeignKey
ALTER TABLE "images" RENAME CONSTRAINT "users_images_id_fkey" TO "images_user_id_fkey";
