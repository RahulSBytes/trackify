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




export const FIELD_INFO = [
  {
    label: 'Job Description',
    description: 'Paste the role summary, responsibilities, or requirements from the posting for quick reference later.',
  },
  {
    label: 'Salary / Stipend',
    description: 'Accepts shorthand like 12k, 15L, 2Cr, or a range like 25k-45k. Leave blank if undisclosed.',
  },
  {
    label: 'Portal',
    description: 'Where you found this job — LinkedIn, Naukri, Indeed, Referral, or paste the posting URL directly.',
  },
  {
    label: 'Application URL',
    description: 'Link to the original job posting, so you can revisit it anytime without searching again.',
  },
  {
    label: 'Application Deadline',
    description: 'Last date to apply, if mentioned in the posting. Helps prioritize time-sensitive applications.',
  },
  {
    label: 'Notes',
    description: 'Jot down anything worth remembering — recruiter details, referral info, or things to ask in the interview.',
  },
  {
    label: 'Follow-up Date',
    description: 'Set a reminder date to check in on your application if you haven\'t heard back.',
  },
] as const