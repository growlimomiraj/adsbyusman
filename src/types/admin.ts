export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  website: string;
  revenue: string;
  budget?: string;
  goal: string;
  source: string; // e.g., "Consultation Modal", "Growlimo Proposal", "Audit Report CTA", "Ads Grader"
  status: "New" | "Contacted" | "In Discovery" | "Proposal Sent" | "Won" | "Archived";
  score: number; // 0-100 lead quality rating based on revenue & budget
  dealValueEst: number; // e.g., estimated ARR / retainers
  notes?: string;
  createdAt: string;
  country?: string;
}

export interface SiteAuditLog {
  id: string;
  domain: string;
  score: number;
  monthlyTraffic: number;
  domainAuthority: number;
  ipLocation?: string;
  timestamp: string;
  emailCaptured?: string;
}

export interface AdminAnalyticsSummary {
  totalLeads: number;
  pipelineValue: number;
  conversionRate: number;
  averageDealSize: number;
  auditsConducted: number;
  leadsThisMonth: number;
  qualifiedRate: number;
}
