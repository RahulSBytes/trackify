// ================= ENUMS =================

enum JobType {
  FULL_TIME,
  PART_TIME,
  INTERNSHIP,
  CONTRACT,
  FREELANCE,
}

enum JobMode {
  REMOTE,
  ONSITE,
  HYBRID,
}

enum ApplicationStatus {
  WISHLIST,
  APPLIED,
  INTERVIEWING,
  OFFER,
  REJECTED,
  WITHDRAWN,
}

enum SalaryPeriod {
  MONTHLY,
  ANNUAL,
}

enum Currency {
  INR,
  USD,
  EUR,
  GBP,
}

// ================= MODELS =================

// model User {
//   id           string        @id @default(cuid())
//   email        String        @unique
//   name         String?
//   applications Application[]

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }

// model Application {
//   id     String @id @default(cuid())
//   userId String
//   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

//   // Core (required)
//   role    String
//   company String
//   type    JobType
//   logo    String?

//   status ApplicationStatus @default(WISHLIST)

//   // Job details (optional)
//   mode     JobMode?
//   location String?

//   // Salary (flat columns, nullable — undisclosed by default)
//   salaryMin       Int?
//   salaryMax       Int?
//   salaryCurrency  Currency?
//   salaryPeriod    SalaryPeriod?
//   salaryDisclosed Boolean       @default(false)

//   // Application tracking
//   portal          String?
//   applicationUrl  String?

//   // Important dates
//   dateApplied         DateTime? @db.Date
//   applicationDeadline DateTime? @db.Date
//   followUpDate        DateTime? @db.Date

//   // Long-form
//   jobDescription String?
//   notes          String?

//   // Timestamps
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   @@index([userId, status])
//   @@index([userId, createdAt])
//   @@map("applications")
// }