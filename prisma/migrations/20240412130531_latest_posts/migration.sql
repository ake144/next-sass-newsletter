/*
  Warnings:

  - You are about to drop the column `icon` on the `Latest` table. All the data in the column will be lost.
  - Added the required column `image` to the `Latest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Latest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Latest" DROP COLUMN "icon",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL;
