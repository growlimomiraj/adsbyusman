export interface SeoIssue {
  id: string;
  category: 'Technical' | 'On-Page' | 'Speed' | 'Backlinks' | 'Content';
  title: string;
  severity: 'critical' | 'warning' | 'good';
  description: string;
  recommendation: string;
}

export interface KeywordItem {
  keyword: string;
  volume: number;
  difficulty: number;
  cpc: number;
  position: number;
}

export interface TrafficHistoryPoint {
  month: string;
  traffic: number;
  organicKeywords: number;
}

export interface ActionPlanItem {
  phase: string;
  title: string;
  impact: 'High' | 'Medium';
  effort: 'Low' | 'Medium' | 'High';
  description: string;
}

export interface AuditResult {
  url: string;
  domain: string;
  overallScore: number;
  summary?: string;
  metrics: {
    organicMonthlyTraffic: number;
    domainAuthority: number;
    backlinks: number;
    organicKeywords: number;
    speedScore: number;
    mobileFriendly: boolean;
    indexedPages: number;
  };
  trafficHistory: TrafficHistoryPoint[];
  issues: SeoIssue[];
  topKeywords: KeywordItem[];
  actionPlan: ActionPlanItem[];
}

export interface KeywordIdea {
  keyword: string;
  volume: number;
  cpc: number;
  difficulty: number;
  intent: string;
  trend: string;
}

export interface HeadlineIdea {
  title: string;
  ctrScore: number;
  type: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    increase: string;
  }[];
  challenge: string;
  solution: string;
  quote: string;
  author: string;
  role: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  expectedImpact: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  publishedDate: string;
  stats: string;
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  duration: string;
  topics: string[];
  description: string;
}

export interface ProfileConfig {
  name: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  avatarUrl: string;
  tagline: string;
}
