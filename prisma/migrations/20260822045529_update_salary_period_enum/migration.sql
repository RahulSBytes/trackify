/*
  Warnings:

  - The values [monthly,annual] on the enum `SalaryPeriod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SalaryPeriod_new" AS ENUM ('HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'ANNUAL', 'ONE_TIME');
ALTER TABLE "applications" ALTER COLUMN "salaryPeriod" TYPE "SalaryPeriod_new" USING ("salaryPeriod"::text::"SalaryPeriod_new");
ALTER TYPE "SalaryPeriod" RENAME TO "SalaryPeriod_old";
ALTER TYPE "SalaryPeriod_new" RENAME TO "SalaryPeriod";
DROP TYPE "public"."SalaryPeriod_old";
COMMIT;
