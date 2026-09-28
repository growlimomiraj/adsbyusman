import { CaseStudy, ServiceItem, ArticleItem, PodcastEpisode, ProfileConfig } from "../types";

export const defaultProfile: ProfileConfig = {
  name: "Muhammad Usman",
  company: "Growlimo",
  title: "Founder & Chief Growth Officer",
  email: "contact@growlimo.com",
  phone: "+1 (800) 555-0199",
  avatarUrl: "/usman.png",
  tagline: "Helping companies generate millions of visitors and turn clicks into predictable revenue.",
};

export const sampleDomains = [
  { name: "Shopify", url: "shopify.com", traffic: "78.4M visits/mo", category: "E-Commerce" },
  { name: "Airbnb", url: "airbnb.com", traffic: "94.2M visits/mo", category: "Travel" },
  { name: "Nike", url: "nike.com", traffic: "135.8M visits/mo", category: "Retail" },
  { name: "HubSpot", url: "hubspot.com", traffic: "42.1M visits/mo", category: "B2B SaaS" },
  { name: "Stripe", url: "stripe.com", traffic: "28.5M visits/mo", category: "Fintech" },
];

export const trustedBrands = [
  { name: "Google", logoText: "Google" },
  { name: "Amazon", logoText: "amazon" },
  { name: "Microsoft", logoText: "Microsoft" },
  { name: "Salesforce", logoText: "salesforce" },
  { name: "Adobe", logoText: "Adobe" },
  { name: "Intuit", logoText: "intuit" },
  { name: "Airbnb", logoText: "airbnb" },
  { name: "ViacomCBS", logoText: "VIACOMCBS" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Dominate high-intent Google search rankings with proven technical architectures and authority building.",
    fullDesc: "We don't just optimize for vanity keywords—we identify the exact search queries buyers use right before purchasing. Our team fixes technical roadblocks, scales editorial content, and acquires tier-one media backlinks.",
    iconName: "Search",
    deliverables: [
      "Full Technical SEO & Core Web Vitals Audit",
      "High-Intent Commercial Keyword Roadmap",
      "Enterprise Content Architecture & Topical Clusters",
      "Authoritative Digital PR & Media Link Building",
      "Continuous Algorithm Penalty Safeguards",
    ],
    expectedImpact: "+120% to +400% organic qualified traffic within 6-12 months",
  },
  {
    id: "paid-media",
    title: "Performance Paid Media",
    shortDesc: "Scale profitable customer acquisition across Google Ads, Meta, TikTok, YouTube, and LinkedIn.",
    fullDesc: "Stop burning ad budgets on clicks that bounce. We deploy algorithmic bidding structures, ruthless creative testing, and multi-touch attribution to maximize your blended return on ad spend (ROAS).",
    iconName: "TrendingUp",
    deliverables: [
      "Full-Funnel Campaign Architecture (Search, Social, Display)",
      "High-Volume Ad Creative & Hook Iteration Lab",
      "Audience Segmentation & First-Party Data Retargeting",
      "Server-Side Conversion API (CAPI) Tracking",
      "Weekly Spend & Profitability Dashboards",
    ],
    expectedImpact: "Average 3.4x to 5.2x verified Return On Ad Spend (ROAS)",
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    shortDesc: "Turn existing traffic into paying customers with scientific A/B split testing and user research.",
    fullDesc: "Getting traffic is only half the battle. If your conversion rate jumps from 1.5% to 3.0%, your revenue doubles without spending a penny more on advertising. We engineer high-converting checkout flows and landing pages.",
    iconName: "Target",
    deliverables: [
      "User Heatmap, Session Recording & Scroll Depth Analysis",
      "Checkout & Sign-Up Friction Elimination",
      "Rigorous Multi-Variant & A/B Split Testing",
      "High-Converting Landing Page Redesigns",
      "Persuasive Copywriting & Value Proposition Tuning",
    ],
    expectedImpact: "+35% to +85% uplift in visitor-to-lead / buyer conversion rate",
  },
  {
    id: "content-marketing",
    title: "Content Marketing & Viral SEO",
    shortDesc: "Publish authoritative industry guides, data studies, and infographics that attract passive links forever.",
    fullDesc: "Generic AI blog posts no longer rank. We build comprehensive research hubs, benchmark surveys, and interactive tools that earn natural backlinks from Forbes, TechCrunch, and New York Times.",
    iconName: "FileText",
    deliverables: [
      "Original Industry Benchmark & Data Survey Reports",
      "Long-Form Comprehensive Pillar Strategy",
      "Infographics & Shareable Visual Assets",
      "Syndication & Newsletter Distribution Campaigns",
      "AI-Assisted Editorial Workflows with Human Editorial Polish",
    ],
    expectedImpact: "5x more editorial backlinks and 10x social share velocity",
  },
  {
    id: "social-media",
    title: "Social Media & Executive Branding",
    shortDesc: "Transform founders and brands into omnipresent industry thought leaders on LinkedIn, X, and YouTube.",
    fullDesc: "People buy from people, not faceless corporations. We capture your authentic voice, script viral short-form video clips, and execute relentless distribution across high-impact social channels.",
    iconName: "Share2",
    deliverables: [
      "Executive Ghostwriting & LinkedIn Thought Leadership",
      "Short-Form Video Production (YouTube Shorts, Reels, TikTok)",
      "Community Management & Influencer Collaborations",
      "Viral Organic Distribution Loops",
      "Brand Sentiment & Crisis Monitoring",
    ],
    expectedImpact: "10M+ organic impressions and tens of thousands of loyal subscribers",
  },
  {
    id: "analytics",
    title: "Data, Analytics & AI Attribution",
    shortDesc: "Accurately measure every dollar spent with enterprise GA4, server-side tracking, and predictive LTV.",
    fullDesc: "Eliminate blind spots in your marketing funnel. We build clean, unified data pipelines that show you exactly which marketing touchpoints drive real lifetime revenue.",
    iconName: "BarChart3",
    deliverables: [
      "Custom Google Analytics 4 (GA4) & BigQuery Integration",
      "Multi-Touch Attribution Modeling",
      "Customer Lifetime Value (LTV) Prediction Engines",
      "Executive Looker Studio / Tableau Real-Time Dashboards",
      "Automated Anomaly Detection & Churn Alerts",
    ],
    expectedImpact: "100% clarity on customer acquisition costs and attribution",
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "enterprise-saas",
    client: "CloudScale B2B SaaS",
    industry: "Enterprise Cloud & DevOps",
    headline: "From 45K to 380K Monthly Organic Visits (+744%) in 14 Months",
    summary: "CloudScale was struggling against venture-backed competitors who owned the top 10 search results. We identified 120 high-intent product comparison and alternative keywords, re-architected their technical docs, and built an authoritative digital PR campaign.",
    metrics: [
      { label: "Organic Monthly Visitors", value: "382,000", increase: "+744%" },
      { label: "Qualified Demo Requests", value: "2,450/mo", increase: "+312%" },
      { label: "Annual Pipeline Generated", value: "$14.8M", increase: "+$11.2M" },
    ],
    challenge: "Low search visibility for commercial-intent keywords and high reliance on expensive Google Search PPC ads ($42 CPC).",
    solution: "Created 45 technical comparison hubs, fixed JavaScript rendering for single-page app documentation, and launched annual State of DevOps survey earning 340+ tier-1 backlinks.",
    quote: "GROWLIMO turned our organic search from an afterthought into our single largest customer acquisition channel. Their technical acumen is unmatched.",
    author: "Marcus Vance",
    role: "VP of Growth, CloudScale",
    tag: "B2B SaaS Growth",
  },
  {
    id: "dtc-ecommerce",
    client: "Aura Apparel Global",
    industry: "Consumer Retail & Fashion",
    headline: "Scaling DTC Revenue 5.2x while Cutting Customer Acquisition Cost by 41%",
    summary: "Aura was trapped in rising Meta CPMs and diminishing returns. We restructured their creative testing pipeline, introduced TikTok performance UGC, and revamped their checkout flow with dynamic bundle upsells.",
    metrics: [
      { label: "Monthly Revenue", value: "$3.85M", increase: "+420%" },
      { label: "Blended Return on Ad Spend", value: "4.85x", increase: "+1.9x" },
      { label: "Checkout Conversion Rate", value: "3.92%", increase: "+68%" },
    ],
    challenge: "Diminishing returns on Meta Ads post-iOS 14 privacy changes and high cart abandonment rate (76%).",
    solution: "Deployed server-side Conversions API, ran 80 new creator video concepts monthly, and redesigned mobile cart drawer with 1-click Apple Pay upsells.",
    quote: "Our revenue went from plateauing to breaking all-time sales records month after month. The ROI has been phenomenal.",
    author: "Elena Rossi",
    role: "Co-Founder & CMO, Aura Apparel",
    tag: "E-Commerce Scaling",
  },
  {
    id: "fintech-marketplace",
    client: "LendWise Financial",
    industry: "FinTech & Banking",
    headline: "Reclaiming #1 Rank for Commercial Lending Keywords After Core Algorithm Update",
    summary: "After a Google Helpful Content and Core Update wiped out 40% of their organic footprint, LendWise hired us. We pruned thin content, boosted E-E-A-T signals with certified financial reviewers, and rebuilt topical authority.",
    metrics: [
      { label: "Top 3 Ranking Keywords", value: "1,840", increase: "+210%" },
      { label: "Organic Loan Applications", value: "18,400/mo", increase: "+155%" },
      { label: "Estimated Ad Value (Ahrefs)", value: "$640K/mo", increase: "+$410K" },
    ],
    challenge: "Severe algorithmic drop in organic search traffic following algorithmic penalty on YMYL (Your Money Your Life) guidelines.",
    solution: "Re-authored 120 key articles with licensed CFP credentials, eliminated redundant programmatic pages, and optimized internal PageRank flow.",
    quote: "Usman's team didn't just fix the penalty; they doubled our previous peak traffic. They understand Google's algorithm better than anyone in the game.",
    author: "David Chen",
    role: "Head of Marketing, LendWise",
    tag: "SEO Recovery & E-E-A-T",
  },
];

export const articlesData: ArticleItem[] = [
  {
    id: "ai-search-2026",
    title: "How to Rank in Google's AI Overviews & Generative Search Engines (2026 Playbook)",
    category: "Search Marketing",
    readTime: "8 min read",
    excerpt: "Traditional keyword stuffing is completely dead. Here is the exact data-driven framework we use to ensure brands are cited as trusted sources in AI Overviews and ChatGPT search.",
    publishedDate: "September 12, 2026",
    stats: "48.2K Reads",
  },
  {
    id: "cro-framework",
    title: "7 High-Converting Landing Page Frameworks that Consistently Beat the Control",
    category: "Conversion Rate",
    readTime: "6 min read",
    excerpt: "After running over 10,000 A/B split tests on growlimo.com and our agency clients, these 7 psychological design patterns consistently produce a 30%+ increase in sign-ups.",
    publishedDate: "August 28, 2026",
    stats: "32.7K Reads",
  },
  {
    id: "content-scaling",
    title: "The Zero-Click Content Strategy: How to Build a Brand When Nobody Clicks Links",
    category: "Social & Content",
    readTime: "10 min read",
    excerpt: "Platform algorithms want users to stay on LinkedIn, X, and YouTube. Here is how to create native, high-value content that drives brand search volume and direct leads.",
    publishedDate: "August 14, 2026",
    stats: "54.1K Reads",
  },
  {
    id: "b2b-pipeline",
    title: "The Exact Funnel We Used to Generate $500M+ in Client Revenue with Paid Media",
    category: "Paid Advertising",
    readTime: "7 min read",
    excerpt: "A transparent teardown of our full-funnel retargeting structure, lookalike audience strategies, and high-converting video script hooks.",
    publishedDate: "July 30, 2026",
    stats: "61.9K Reads",
  },
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep-2490",
    episodeNumber: 2490,
    title: "Why Most Businesses Are Wasting 50% of Their Marketing Budget Right Now",
    duration: "11:42",
    topics: ["Budget Allocation", "Ad Waste", "Attribution"],
    description: "Muhammad Usman and Eric break down the three hidden money pits in modern digital marketing and how to reallocate capital to highest-ROI channels.",
  },
  {
    id: "ep-2489",
    episodeNumber: 2489,
    title: "The Untapped SEO Channel with 10x Less Competition in 2026",
    duration: "14:18",
    topics: ["International SEO", "YouTube SEO", "AI Search"],
    description: "Discover why international search and non-English markets represent the largest arbitrage opportunity for digital growth this year.",
  },
  {
    id: "ep-2488",
    episodeNumber: 2488,
    title: "How to Build a $10M Agency with Zero Cold Calling",
    duration: "13:05",
    topics: ["Agency Growth", "Free Tools", "Inbound Marketing"],
    description: "The exact story of using proprietary marketing tools and diagnostic software as an inbound client acquisition engine that fills our calendar with enterprise leads.",
  },
];

export const accolades = [
  {
    organization: "The Wall Street Journal",
    quote: "A top influencer on the web.",
    tag: "Press Recognition",
  },
  {
    organization: "Forbes",
    quote: "One of the top 10 online marketers in the world.",
    tag: "Industry Ranking",
  },
  {
    organization: "President Barack Obama",
    quote: "Recognized as a Top 100 Entrepreneur under 30.",
    tag: "White House Honor",
  },
  {
    organization: "United Nations",
    quote: "Recognized as a Top 100 Entrepreneur under the age of 35.",
    tag: "Global Accolade",
  },
];
