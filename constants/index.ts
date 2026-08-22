
export const APPLICATION_STATUSES = [
  { label: 'Wishlist', value: 'wishlist' },
  { label: 'Applied', value: 'applied' },
  { label: 'Under Review', value: 'under_review' },
  { label: 'Interviewing', value: 'interviewing' },
  { label: 'Offer Received', value: 'offer_received' },
  { label: 'Accepted', value: 'accepted' },
  { label: 'Rejected', value: 'rejected' },
  { label: 'Withdrawn', value: 'withdrawn' }
] as const

export const CURRENCY_OPTIONS = [
  { label: 'Indian Rupee (₹)', value: 'INR' },
  { label: 'US Dollar ($)', value: 'USD' },
  { label: 'Euro (€)', value: 'EUR' },
  { label: 'UAE Dirham (د.إ)', value: 'AED' },
  { label: 'Singapore Dollar (S$)', value: 'SGD' },
  { label: 'British Pound (£)', value: 'GBP' },
  { label: 'Canadian Dollar (C$)', value: 'CAD' },
  { label: 'Australian Dollar (A$)', value: 'AUD' },
] as const


export const SALARY_PERIOD_OPTIONS = [
  { label: "Hourly",  value: "HOURLY" },
  { label: "Daily",   value: "DAILY" },
  { label: "Weekly",  value: "WEEKLY" },
  { label: "Monthly", value: "MONTHLY" },
  { label: "Yearly",  value: "ANNUAL" },
  { label: "One Time Pay",  value: "ONE_TIME" },
] as const;





export const JOB_TYPE_OPTIONS = [
  { label: 'Full-time', value: 'full_time' },
  { label: 'Part-time', value: 'part_time' },
  { label: 'Internship', value: 'internship' },
  { label: 'Contract', value: 'contract' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'Volunteer', value: 'volunteer' },
  { label: 'Other', value: 'other' }
] as const



export const JOB_MODE_OPTIONS = [
  { label: 'Remote', value: 'remote' },
  { label: 'On-site', value: 'onsite' },
  { label: 'Hybrid', value: 'hybrid' }
] as const

export const OPTIONAL_FIELD_KEYS = [
  'jobDescription',
  'salaryOrStipend',
  'portal',
  'applicationUrl',
  'applicationDeadline',
  'notes',
  'followUpDate'
] as const

export const JOB_PORTALS_UI = [
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'Naukri', value: 'naukri' },
  { label: 'Indeed', value: 'indeed' },
  { label: 'Wellfound', value: 'wellfound' },
  { label: 'Instahyre', value: 'instahyre' },
  { label: 'Glassdoor', value: 'glassdoor' },
  { label: 'Company Careers', value: 'company_careers' },
  { label: 'Referral', value: 'referral' },
  { label: 'Internshala', value: 'internshala' },
  { label: 'Foundit', value: 'foundit' },
  { label: 'Cutshort', value: 'cutshort' },
  { label: 'Upwork', value: 'upwork' },
  { label: 'Toptal', value: 'toptal' },
  { label: 'AngelList', value: 'angellist' },
  { label: 'Other', value: 'other' }
] as const

export const FIELD_INFO = [
  {
    key: 'jobDescription',
    label: 'Job Description',
    description:
      'Paste the role summary, responsibilities, or requirements from the posting for quick reference later.'
  },
  {
    key: 'salaryOrStipend',
    label: 'Salary / Stipend',
    description:
      'Accepts shorthand like 12k, 15L, 2Cr, or a range like 25k-45k. Leave blank if undisclosed.'
  },
  {
    key: 'portal',
    label: 'Portal',
    description:
      'Where you found this job — LinkedIn, Naukri, Indeed, Referral, or paste the posting URL directly.'
  },
  {
    key: 'applicationUrl',
    label: 'Application URL',
    description:
      'Link to the original job posting, so you can revisit it anytime without searching again.'
  },
  {
    key: 'applicationDeadline',
    label: 'Application Deadline',
    description:
      'Last date to apply, if mentioned in the posting. Helps prioritize time-sensitive applications.'
  },
  {
    key: 'notes',
    label: 'Notes',
    description:
      'Jot down anything worth remembering — recruiter details, referral info, or things to ask in the interview.'
  },
  {
    key: 'followUpDate',
    label: 'Follow-up Date',
    description:
      "Set a reminder date to check in on your application if you haven't heard back."
  }
] as const
