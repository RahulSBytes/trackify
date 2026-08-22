/*
  Warnings:

  - The values [inr,usd,eur,gbp,cad,aud,sgd,aed] on the enum `Currency` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `salaryDisclosed` on the `applications` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Currency_new" AS ENUM ('INR', 'USD', 'EUR', 'GBP', 'CAD', 'AUD', 'SGD', 'AED');
ALTER TABLE "applications" ALTER COLUMN "salaryCurrency" TYPE "Currency_new" USING ("salaryCurrency"::text::"Currency_new");
ALTER TYPE "Currency" RENAME TO "Currency_old";
ALTER TYPE "Currency_new" RENAME TO "Currency";
DROP TYPE "public"."Currency_old";
COMMIT;

-- AlterTable
ALTER TABLE "applications" DROP COLUMN "salaryDisclosed",
ADD COLUMN     "isUnpaid" BOOLEAN NOT NULL DEFAULT false;
