export const APPLICATION_STATUSES = [
  'saved',
  'applied',
  'under_review',
  'interviewing',
  'offer_received',
  'accepted',
  'rejected',
  'withdrawn'
] as const



export const APPLICATION_STATUSES_UI = [
  { label: "Saved", value: "saved" },
  { label: "Applied", value: "applied" },
  { label: "Under Review", value: "under_review" },
  { label: "Interviewing", value: "interviewing" },
  { label: "Offer Received", value: "offer_received" },
  { label: "Accepted", value: "accepted" },
  { label: "Rejected", value: "rejected" },
  { label: "Withdrawn", value: "withdrawn" },
] as const;


export const JOB_TYPE_OPTIONS = [
  { label: 'Full-time', value: 'full-time' },
  { label: 'Part-time', value: 'part-time' },
  { label: 'Internship', value: 'internship' },
  { label: 'Contract', value: 'contract' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'Volunteer', value: 'volunteer' }
] as const
