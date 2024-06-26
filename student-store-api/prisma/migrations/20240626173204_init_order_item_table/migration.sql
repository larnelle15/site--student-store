/*
  Warnings:

  - The primary key for the `order_items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_ietm_id` on the `order_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_pkey",
DROP COLUMN "order_ietm_id",
ADD COLUMN     "order_item_id" SERIAL NOT NULL,
ADD CONSTRAINT "order_items_pkey" PRIMARY KEY ("order_item_id");
