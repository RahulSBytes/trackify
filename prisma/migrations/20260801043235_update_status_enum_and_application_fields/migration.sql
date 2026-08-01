-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('wishlist', 'applied', 'under_review', 'interviewing', 'offer_received', 'accepted', 'rejected', 'withdrawn');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('full_time', 'part_time', 'internship', 'contract', 'freelance', 'volunteer', 'other');

-- CreateEnum
CREATE TYPE "JobMode" AS ENUM ('remote', 'onsite', 'hybrid');

-- CreateEnum
CREATE TYPE "ApplicationPortal" AS ENUM ('linkedin', 'naukri', 'indeed', 'wellfound', 'instahyre', 'glassdoor', 'company_careers', 'referral', 'internshala', 'foundit', 'cutshort', 'upwork', 'toptal', 'angellist', 'other');

-- CreateEnum
CREATE TYPE "SalaryPeriod" AS ENUM ('monthly', 'annual');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('inr', 'usd', 'eur', 'gbp', 'cad', 'aud', 'sgd', 'aed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "password" TEXT,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "type" "JobType" NOT NULL,
    "logo" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'applied',
    "mode" "JobMode",
    "location" TEXT,
    "salaryMin" INTEGER,
    "salaryMax" INTEGER,
    "salaryCurrency" "Currency",
    "salaryPeriod" "SalaryPeriod",
    "salaryDisclosed" BOOLEAN NOT NULL DEFAULT false,
    "portal" TEXT,
    "applicationUrl" TEXT,
    "dateApplied" DATE,
    "applicationDeadline" DATE,
    "followUpDate" DATE,
    "jobDescription" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "accounts_userId_idx" ON "accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE INDEX "applications_userId_status_idx" ON "applications"("userId", "status");

-- CreateIndex
CREATE INDEX "applications_userId_createdAt_idx" ON "applications"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
