export const APPLICATION_STATUSES = [
  'wishlist',
  'applied',
  'under_review',
  'interviewing',
  'offer_received',
  'accepted',
  'rejected',
  'withdrawn'
] as const

export const APPLICATION_STATUSES_UI = [
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
  { label: "Indian Rupee (₹)", value: "inr" },
  { label: "US Dollar ($)", value: "usd" },
  { label: "Euro (€)", value: "eur" },
  { label: "British Pound (£)", value: "gbp" },
  { label: "Canadian Dollar (C$)", value: "cad" },
  { label: "Australian Dollar (A$)", value: "aud" },
  { label: "Singapore Dollar (S$)", value: "sgd" },
  { label: "UAE Dirham (د.إ)", value: "aed" },
] as const;

export const JOB_TYPE_OPTIONS = [
  { label: 'Full-time', value: 'full-time' },
  { label: 'Part-time', value: 'part-time' },
  { label: 'Internship', value: 'internship' },
  { label: 'Contract', value: 'contract' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'Volunteer', value: 'volunteer' },
  { label: 'Other', value: 'other' }
] as const


export const JOB_MODE_OPTIONS = [
  { label: 'Remote', value: 'remote' },
  { label: 'On-site', value: 'onsite' },
  { label: 'Hybrid', value: 'hybrid' },
] as const




export const OPTIONAL_FIELD_KEYS = [
  'job_description',
  'salary_or_stipend',
  'portal',
  'application_url',
  'application_deadline',
  'notes',
  'follow_up_date',
] as const;



export const JOB_PORTALS_UI = [
  { label: "LinkedIn", value: "linkedin" },
  { label: "Naukri", value: "naukri" },
  { label: "Indeed", value: "indeed" },
  { label: "Wellfound", value: "wellfound" },
  { label: "Instahyre", value: "instahyre" },
  { label: "Glassdoor", value: "glassdoor" },
  { label: "Company Careers", value: "company_careers" },
  { label: "Referral", value: "referral" },
  { label: "Internshala", value: "internshala" },
  { label: "Foundit", value: "foundit" },
  { label: "Cutshort", value: "cutshort" },
  { label: "Upwork", value: "upwork" },
  { label: "Toptal", value: "toptal" },
  { label: "AngelList", value: "angellist" },
  { label: "Other", value: "other" },
] as const;



export const FIELD_INFO = [
  {
    key: 'job_description',
    label: 'Job Description',
    description: 'Paste the role summary, responsibilities, or requirements from the posting for quick reference later.',
  },
  {
    key: 'salary_or_stipend',
    label: 'Salary / Stipend',
    description: 'Accepts shorthand like 12k, 15L, 2Cr, or a range like 25k-45k. Leave blank if undisclosed.',
  },
  {
    key: 'portal',
    label: 'Portal',
    description: 'Where you found this job — LinkedIn, Naukri, Indeed, Referral, or paste the posting URL directly.',
  },
  {
    key: 'application_url',
    label: 'Application URL',
    description: 'Link to the original job posting, so you can revisit it anytime without searching again.',
  },
  {
    key: 'application_deadline',
    label: 'Application Deadline',
    description: 'Last date to apply, if mentioned in the posting. Helps prioritize time-sensitive applications.',
  },
  {
    key: 'notes',
    label: 'Notes',
    description: 'Jot down anything worth remembering — recruiter details, referral info, or things to ask in the interview.',
  },
  {
    key: 'follow_up_date',
    label: 'Follow-up Date',
    description: 'Set a reminder date to check in on your application if you haven\'t heard back.',
  },
] as const