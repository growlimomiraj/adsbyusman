import React, { useState, useEffect } from "react";
import {
  X,
  Search,
  ArrowLeft,
  RefreshCw,
  BarChart2,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export type ToolType = "blog" | "answerthepublic" | "google-ads-grader" | "ubersuggest";

interface InteractiveToolsModalProps {
  toolType: ToolType | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  snippet: string;
  content: string;
}

export const InteractiveToolsModal: React.FC<InteractiveToolsModalProps> = ({
  toolType,
  onClose,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<ToolType>(toolType || "blog");

  useEffect(() => {
    if (toolType) {
      setActiveTab(toolType);
    }
  }, [toolType]);

  // ----------------------------------------------------
  // TOOL 1: BLOG STATE
  // ----------------------------------------------------
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [blogSearchQuery, setBlogSearchQuery] = useState("");
  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");

  const articles: Article[] = [
    {
      id: "cro-playbook-2026",
      title: "The 2026 Conversion Rate Playbook: How We Doubled Demo Requests for B2B Tech",
      category: "Conversion Rate",
      date: "August 28, 2026",
      readTime: "8 min read",
      author: "MUHAMMAD USMAN",
      snippet: "How reducing form friction and introducing dynamic value calculators boosted qualified demo bookings by 112% without increasing ad budget.",
      content: `Conversion rate optimization (CRO) is rarely about changing button colors. In high-value B2B and consumer decision journeys, conversion happens when friction is eliminated and risk is reversed.

The 3 Key Interventions:
1. Dynamic Multi-Step Form: Instead of displaying 7 intimidating input boxes at once, we asked for the website URL first. This micro-commitment increased completion rates by 41%.
2. Real-Time Calendar Booking: Rather than the generic 'Our sales rep will email you in 24 hours', we integrated instant calendar slot selection. Show-up rates skyrocketed from 52% to 88%.
3. Explicit Risk Reversal: Placed a micro-copy guarantee: 'No credit card required. SOC2 Type II Certified. Instant 14-day access' directly under the submit button.`,
    },
    {
      id: "programmatic-seo",
      title: "Programmatic SEO at Scale: How We Built 14,000 High-Intent Landing Pages That Convert",
      category: "Programmatic SEO",
      date: "August 12, 2026",
      readTime: "11 min read",
      author: "MUHAMMAD USMAN",
      snippet: "How to capture long-tail commercial intent at scale without creating thin content or risking Google helpful content penalties.",
      content: `Programmatic SEO is not about auto-generating low-quality AI articles. It is about building structured, database-driven web applications that satisfy specific user queries.

Architecture Framework:
1. Identifying Structured Intent: Look for queries that follow programmatic patterns (e.g. '[Tool A] vs [Tool B] Comparison', 'Average Cost of [Service] in [City]', 'Best [Software] for [Industry]').
2. Proprietary Data Gathering: Build or license clean datasets. For example, our B2B clients crawl integration APIs, pricing plans, and performance benchmarks.
3. Automated Quality Auditing: Ensure that if a database row lacks sufficient metadata, the page is excluded from indexation to protect overall domain crawl health.`,
    },
    {
      id: "paid-media-scaling",
      title: "The Zero-Waste Paid Acquisition Playbook: Scaling Google Ads to 4.8x ROAS",
      category: "Paid Advertising",
      date: "July 24, 2026",
      readTime: "7 min read",
      author: "MUHAMMAD USMAN",
      snippet: "A transparent teardown of negative keyword isolation, first-party CRM bidding, and single-topic ad groups that cut cost per acquisition by 41%.",
      content: `Most PPC managers set up campaigns and rely blindly on automated Smart Bidding. Without strict data guardrails, Google optimizes for clicks, not revenue.

GROWLIMO's 3-Tier PPC Architecture:
1. Negative Keyword Fortification: We maintain a master negative keyword list containing 1,800+ terms covering job applicants, technical support, free alternatives, and academic research.
2. Value-Based Bidding (VBB): Rather than bidding on form submissions (which often include spam), we pass the client's Stripe and HubSpot closed revenue data back to Google Ads via offline conversion tracking.
3. Ad Copy Psychology: We strictly ban generic ad slogans. Every ad includes social proof numbers, pricing transparency, and the primary pain point directly in the H1 headline.`,
    },
    {
      id: "eeat-algorithm-recovery",
      title: "Google Core Update Recovery: How to Audit & Rebuild Topical Authority",
      category: "Algorithmic Recovery",
      date: "July 08, 2026",
      readTime: "10 min read",
      author: "MUHAMMAD USMAN",
      snippet: "Step-by-step diagnostic framework for reversing drops from Google Core and Helpful Content updates, restoring lost organic positions.",
      content: `When a Google Core Update causes an organic traffic drop, the worst reaction is panic-updating meta descriptions. Algorithmic penalties are site-wide assessments of trust and utility.

Our Recovery Diagnostic Sequence:
1. Content Pruning & Consolidation: We run a full site crawl mapping organic clicks from Google Search Console against page age. Thin or redundant pages are 301 redirected to pillar guides or removed.
2. Real Human Author Credentials: Every transactional and YMYL article must have an accredited subject matter expert author bio with Schema.org Person verification.
3. Technical Anchor Text Distribution: Over-optimized exact match anchor text is neutralized, and natural brand links are strengthened.`,
    },
    {
      id: "core-web-vitals-deep",
      title: "Technical SEO Speed Engineering: Sub-Second Load Times with Next-Gen Stack",
      category: "Technical SEO",
      date: "June 20, 2026",
      readTime: "6 min read",
      author: "MUHAMMAD USMAN",
      snippet: "How resolving Cumulative Layout Shift (CLS) and Interaction to Next Paint (INP) directly increases organic keyword ranking and customer retention.",
      content: `Google officially transitioned from First Input Delay (FID) to Interaction to Next Paint (INP). Speed is no longer just how fast an HTML document renders—it is how responsive the page is when a user taps a menu or submits a form.

Key Engineering Rules:
1. Script Deferral: Third-party tracking scripts (Hotjar, Meta Pixel, Google Tag Manager) must be executed using web workers or deferred until after the initial interaction.
2. Modern Media Encodings: Replace PNG and JPEG with WebP and AVIF formats, serving appropriate widths via responsive srcset.
3. Zero-CLS Aspect Ratios: Reserve explicit width and height dimensions on every image, iframe, and advertising container to prevent jarring layout jumps during loading.`,
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
      art.snippet.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(blogSearchQuery.toLowerCase());
    const matchesCategory =
      blogCategoryFilter === "All" || art.category.toLowerCase().includes(blogCategoryFilter.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // ----------------------------------------------------
  // TOOL 2: ANSWER THE PUBLIC STATE
  // ----------------------------------------------------
  const [atpKeyword, setAtpKeyword] = useState("seo audit");
  const [isSearchingAtp, setIsSearchingAtp] = useState(false);
  const [atpCategoryFilter, setAtpCategoryFilter] = useState<"all" | "question" | "preposition" | "comparison">("all");
  const [atpItems, setAtpItems] = useState<
    Array<{ type: "question" | "preposition" | "comparison"; query: string; volume: number; cpc: number }>
  >([
    { type: "question", query: "how to do an seo audit for a website", volume: 14800, cpc: 4.85 },
    { type: "question", query: "what does an seo audit include", volume: 8200, cpc: 3.4 },
    { type: "question", query: "why is an seo audit important for business", volume: 5400, cpc: 5.1 },
    { type: "question", query: "how long does an seo audit take", volume: 3900, cpc: 2.75 },
    { type: "question", query: "can I do an seo audit myself", volume: 6100, cpc: 3.2 },
    { type: "preposition", query: "seo audit for ecommerce website", volume: 9600, cpc: 6.2 },
    { type: "preposition", query: "seo audit with google analytics", volume: 4300, cpc: 3.1 },
    { type: "preposition", query: "seo audit for b2b saas", volume: 7800, cpc: 8.4 },
    { type: "preposition", query: "seo audit without agency", volume: 2900, cpc: 1.95 },
    { type: "comparison", query: "seo audit vs technical audit", volume: 3200, cpc: 4.1 },
    { type: "comparison", query: "seo audit tools comparison", volume: 5100, cpc: 5.3 },
    { type: "comparison", query: "free seo audit vs paid audit", volume: 4600, cpc: 3.8 },
  ]);

  const handleSearchAtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!atpKeyword.trim()) return;
    setIsSearchingAtp(true);
    setTimeout(() => {
      const term = atpKeyword.trim().toLowerCase();
      setAtpItems([
        { type: "question", query: `how to optimize ${term}`, volume: 12400, cpc: 4.5 },
        { type: "question", query: `what is ${term} in marketing`, volume: 9800, cpc: 3.1 },
        { type: "question", query: `why does ${term} matter`, volume: 5600, cpc: 2.8 },
        { type: "question", query: `can ${term} increase sales`, volume: 4200, cpc: 3.9 },
        { type: "preposition", query: `${term} for small business`, volume: 8300, cpc: 5.2 },
        { type: "preposition", query: `${term} with google search console`, volume: 3700, cpc: 2.9 },
        { type: "preposition", query: `${term} without technical experience`, volume: 2400, cpc: 1.8 },
        { type: "comparison", query: `${term} vs traditional advertising`, volume: 4100, cpc: 4.0 },
        { type: "comparison", query: `best ${term} software comparison`, volume: 6700, cpc: 6.5 },
      ]);
      setIsSearchingAtp(false);
    }, 400);
  };

  const filteredAtpItems = atpItems.filter((item) => {
    if (atpCategoryFilter === "all") return true;
    return item.type === atpCategoryFilter;
  });

  // ----------------------------------------------------
  // TOOL 3: GOOGLE ADS GRADER STATE
  // ----------------------------------------------------
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [adIndustry, setAdIndustry] = useState("B2B SaaS");
  const [isGradingAds, setIsGradingAds] = useState(false);
  const [gradedResult, setGradedResult] = useState<{
    grade: string;
    score: number;
    wastedMonthly: number;
    wastedAnnual: number;
    diagnostics: Array<{ area: string; status: string; impact: string; fix: string }>;
  }>({
    grade: "B",
    score: 7.4,
    wastedMonthly: 1250,
    wastedAnnual: 15000,
    diagnostics: [
      {
        area: "Broad Match Filtering",
        status: "Warning",
        impact: "$620/mo leakage",
        fix: "Isolate high-intent phrase queries into dedicated ad groups to stop irrelevant search terms.",
      },
      {
        area: "Negative Keyword Coverage",
        status: "Needs Work",
        impact: "$380/mo leakage",
        fix: "Add universal negative lists covering free tiers, careers, and academic queries.",
      },
      {
        area: "Landing Page Match & Quality Score",
        status: "Good",
        impact: "Optimal CPC",
        fix: "Headline copy directly reflects primary search term intent.",
      },
      {
        area: "Conversion Tracking & Enhanced Conversions",
        status: "Warning",
        impact: "Sub-optimal bidding",
        fix: "Enable offline CRM conversion feeds so Google Smart Bidding optimizes for revenue, not form fills.",
      },
    ],
  });

  const handleCalculateAds = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGradingAds(true);
    setTimeout(() => {
      const spend = Number(adSpend) || 5000;
      const wastedPercent = adIndustry === "B2B SaaS" ? 0.28 : adIndustry === "E-Commerce" ? 0.22 : 0.25;
      const wastedMonthly = Math.round(spend * wastedPercent);
      const wastedAnnual = wastedMonthly * 12;
      const grade = wastedPercent <= 0.2 ? "A" : wastedPercent <= 0.25 ? "B" : "C";
      const score = grade === "A" ? 8.8 : grade === "B" ? 7.4 : 6.1;

      setGradedResult({
        grade,
        score,
        wastedMonthly,
        wastedAnnual,
        diagnostics: [
          {
            area: "Broad Match Query Bleed",
            status: "Warning",
            impact: `$${Math.round(wastedMonthly * 0.45)}/mo wasted`,
            fix: "Review search term reports and isolate intent with strict phrase matching.",
          },
          {
            area: "Negative Keyword Coverage",
            status: "Action Required",
            impact: `$${Math.round(wastedMonthly * 0.35)}/mo wasted`,
            fix: "Deploy master negative lists for support, job seeker, and irrelevant queries.",
          },
          {
            area: "Quality Score Relevance",
            status: "Fair",
            impact: "Higher average CPC",
            fix: "Ensure ad copy headlines directly align with target search query semantics.",
          },
          {
            area: "Value-Based Bidding & CRM Sync",
            status: "Recommended",
            impact: "Missing ROAS lift",
            fix: "Pass closed-won revenue back to Google to train Smart Bidding on actual sales.",
          },
        ],
      });
      setIsGradingAds(false);
    }, 400);
  };

  // ----------------------------------------------------
  // TOOL 4: GROWSUGGEST STATE
  // ----------------------------------------------------
  const [suggestQuery, setSuggestQuery] = useState("content marketing");
  const [isLoadingSuggest, setIsLoadingSuggest] = useState(false);
  const [suggestData, setSuggestData] = useState<{
    volume: number;
    cpc: number;
    difficulty: number;
    keywords: Array<{ keyword: string; volume: number; cpc: number; difficulty: string }>;
  }>({
    volume: 74000,
    cpc: 7.2,
    difficulty: 68,
    keywords: [
      { keyword: "content marketing strategy", volume: 22200, cpc: 8.5, difficulty: "Medium" },
      { keyword: "b2b content marketing examples", volume: 9900, cpc: 11.2, difficulty: "High" },
      { keyword: "content marketing tools for business", volume: 8100, cpc: 6.4, difficulty: "Easy" },
      { keyword: "how to create a content marketing plan", volume: 6400, cpc: 4.8, difficulty: "Easy" },
      { keyword: "content marketing roi metrics", volume: 4800, cpc: 9.3, difficulty: "Medium" },
      { keyword: "content marketing vs copy writing", volume: 5200, cpc: 3.1, difficulty: "Easy" },
    ],
  });

  const handleSearchSuggest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestQuery.trim()) return;
    setIsLoadingSuggest(true);
    setTimeout(() => {
      const q = suggestQuery.trim().toLowerCase();
      setSuggestData({
        volume: 48500,
        cpc: 5.8,
        difficulty: 62,
        keywords: [
          { keyword: `${q} guide`, volume: 14200, cpc: 4.2, difficulty: "Easy" },
          { keyword: `best ${q} software`, volume: 9800, cpc: 7.9, difficulty: "Medium" },
          { keyword: `${q} checklist for 2026`, volume: 6100, cpc: 3.8, difficulty: "Easy" },
          { keyword: `enterprise ${q} strategy`, volume: 4500, cpc: 12.4, difficulty: "High" },
          { keyword: `${q} pricing benchmarks`, volume: 3900, cpc: 6.5, difficulty: "Medium" },
        ],
      });
      setIsLoadingSuggest(false);
    }, 400);
  };

  if (!toolType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white flex flex-col shadow-2xl border border-slate-200 rounded-2xl max-w-5xl w-full h-[90vh] overflow-hidden">
        {/* Top Minimal Header & 4-Tool Navigation */}
        <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between gap-4 bg-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f25f22]" />
            <span className="text-xs font-black tracking-wider uppercase text-slate-900">
              GROWLIMO
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-medium">Resources</span>
          </div>

          {/* Simple Clean Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold overflow-x-auto">
            <button
              onClick={() => {
                setActiveTab("blog");
                setSelectedArticleId(null);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "blog"
                  ? "bg-white text-slate-900 shadow-2xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setActiveTab("answerthepublic")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "answerthepublic"
                  ? "bg-white text-slate-900 shadow-2xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Answer The Public
            </button>
            <button
              onClick={() => setActiveTab("google-ads-grader")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "google-ads-grader"
                  ? "bg-white text-slate-900 shadow-2xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Google Ads Grader
            </button>
            <button
              onClick={() => setActiveTab("ubersuggest")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "ubersuggest"
                  ? "bg-white text-slate-900 shadow-2xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              GrowSuggest
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {/* ==================================================== */}
          {/* TOOL 1: BLOG                                         */}
          {/* ==================================================== */}
          {activeTab === "blog" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {selectedArticleId ? (
                // Clean Article Reader View
                <div className="space-y-6 animate-in fade-in">
                  <button
                    onClick={() => setSelectedArticleId(null)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Articles</span>
                  </button>

                  {(() => {
                    const art = articles.find((a) => a.id === selectedArticleId);
                    if (!art) return null;
                    return (
                      <article className="space-y-6">
                        <div className="space-y-2 border-b border-slate-100 pb-5">
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 font-bold text-[11px]">
                              {art.category}
                            </span>
                            <span>•</span>
                            <span>{art.readTime}</span>
                            <span>•</span>
                            <span>{art.date}</span>
                            <span>•</span>
                            <span className="text-slate-900 font-semibold">By {art.author}</span>
                          </div>
                          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {art.title}
                          </h1>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
                          {art.content}
                        </div>
                      </article>
                    );
                  })()}
                </div>
              ) : (
                // Clean Article Directory View
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Marketing & Growth Blog
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Practical playbooks, frameworks, and strategies from Muhammad Usman and the GROWLIMO team.
                      </p>
                    </div>

                    <div className="relative w-full sm:w-64">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={blogSearchQuery}
                        onChange={(e) => setBlogSearchQuery(e.target.value)}
                        placeholder="Search articles..."
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white text-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  {/* Category Filters */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                    {["All", "Conversion Rate", "Programmatic SEO", "Paid Advertising", "Algorithmic Recovery", "Technical SEO"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setBlogCategoryFilter(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                          blogCategoryFilter === cat
                            ? "bg-slate-900 text-white font-bold"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Articles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredArticles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => setSelectedArticleId(art.id)}
                        className="p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer bg-white group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 mb-2">
                            <span className="text-slate-600 font-semibold">{art.category}</span>
                            <span>{art.readTime}</span>
                          </div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#f25f22] transition-colors mb-2 leading-snug">
                            {art.title}
                          </h3>
                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                            {art.snippet}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-[#f25f22]">
                          <span>Read Playbook</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==================================================== */}
          {/* TOOL 2: ANSWER THE PUBLIC                           */}
          {/* ==================================================== */}
          {activeTab === "answerthepublic" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Answer The Public
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Discover the search queries, commercial questions, and topics users are asking online.
                </p>
              </div>

              {/* Search input */}
              <form onSubmit={handleSearchAtp} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={atpKeyword}
                    onChange={(e) => setAtpKeyword(e.target.value)}
                    placeholder="Enter keyword or topic (e.g. ecommerce seo, b2b saas, crm)..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearchingAtp}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-2 shrink-0 shadow-2xs"
                >
                  {isSearchingAtp ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Search className="w-3.5 h-3.5" />
                  )}
                  <span>Search</span>
                </button>
              </form>

              {/* Category Filter */}
              <div className="flex items-center gap-1.5 text-xs">
                {(
                  [
                    { id: "all", label: "All Queries" },
                    { id: "question", label: "Questions" },
                    { id: "preposition", label: "Prepositions" },
                    { id: "comparison", label: "Comparisons" },
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setAtpCategoryFilter(cat.id)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                      atpCategoryFilter === cat.id
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Clean Results Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <div className="overflow-x-auto relative">
                  <table className="w-full text-left text-xs min-w-[500px]">
                    <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5 whitespace-nowrap min-w-[90px]">Category</th>
                        <th className="p-3.5 sticky left-0 bg-slate-50 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)] min-w-[200px]">Search Query</th>
                        <th className="p-3.5 text-right whitespace-nowrap min-w-[110px]">Monthly Volume</th>
                        <th className="p-3.5 text-right whitespace-nowrap min-w-[90px]">Est. CPC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-normal text-slate-800">
                      {filteredAtpItems.map((item, idx) => (
                        <tr key={idx} className="group hover:bg-slate-50/80 transition-colors">
                          <td className="p-3.5 capitalize font-medium text-slate-500 text-[11px] whitespace-nowrap">
                            {item.type}
                          </td>
                          <td className="p-3.5 font-semibold text-slate-900 sticky left-0 bg-white group-hover:bg-slate-50/80 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]">
                            {item.query}
                          </td>
                          <td className="p-3.5 text-right font-medium text-slate-700 whitespace-nowrap">
                            {item.volume.toLocaleString()}
                          </td>
                          <td className="p-3.5 text-right font-medium text-slate-700 whitespace-nowrap">
                            ${item.cpc.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TOOL 3: GOOGLE ADS GRADER                           */}
          {/* ==================================================== */}
          {activeTab === "google-ads-grader" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Google Ads Grader
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Benchmark your paid search performance against vertical averages to isolate wasted spend.
                </p>
              </div>

              {/* Calculator Parameters */}
              <form onSubmit={handleCalculateAds} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Monthly Ad Spend ($USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                      <input
                        type="number"
                        min="500"
                        step="500"
                        value={adSpend}
                        onChange={(e) => setAdSpend(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white text-slate-900 font-bold transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Primary Industry
                    </label>
                    <select
                      value={adIndustry}
                      onChange={(e) => setAdIndustry(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white text-slate-900 font-medium cursor-pointer transition-all"
                    >
                      <option value="B2B SaaS">B2B SaaS / Software</option>
                      <option value="E-Commerce">E-Commerce & DTC</option>
                      <option value="Local Services">Professional & Local Services</option>
                      <option value="Healthcare">Healthcare & Clinical</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isGradingAds}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
                >
                  {isGradingAds ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <BarChart2 className="w-3.5 h-3.5" />}
                  <span>Grade My Account</span>
                </button>
              </form>

              {/* Graded Results */}
              <div className="space-y-4 animate-in fade-in">
                {/* Score & Waste Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-2xl shrink-0">
                      {gradedResult.grade}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Efficiency Score: {gradedResult.score} / 10
                      </p>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {gradedResult.grade === "A"
                          ? "Top-tier efficiency with minimal waste"
                          : gradedResult.grade === "B"
                          ? "Healthy account with addressable leakage"
                          : "Significant budget waste detected"}
                      </h3>
                    </div>
                  </div>

                  <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-6">
                    <p className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider">Estimated Annual Wasted Spend</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-rose-600">
                      ${gradedResult.wastedAnnual.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-slate-400">${gradedResult.wastedMonthly.toLocaleString()} / month</p>
                  </div>
                </div>

                {/* Diagnostic Area Breakdown */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Diagnostic Analysis & Recommendations
                  </h4>
                  <div className="space-y-2">
                    {gradedResult.diagnostics.map((diag, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">{diag.area}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                              {diag.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">{diag.fix}</p>
                        </div>
                        <div className="text-right sm:shrink-0">
                          <span className="text-xs font-bold text-rose-600">{diag.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TOOL 4: GROWSUGGEST                                 */}
          {/* ==================================================== */}
          {activeTab === "ubersuggest" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  GrowSuggest Keyword Explorer
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Analyze search volume, competition difficulty, and CPC benchmarks for any query.
                </p>
              </div>

              {/* Keyword Search Form */}
              <form onSubmit={handleSearchSuggest} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={suggestQuery}
                    onChange={(e) => setSuggestQuery(e.target.value)}
                    placeholder="Enter keyword (e.g. content marketing, crm software, seo audit)..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoadingSuggest}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-2 shrink-0 shadow-2xs"
                >
                  {isLoadingSuggest ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Search className="w-3.5 h-3.5" />
                  )}
                  <span>Analyze</span>
                </button>
              </form>

              {/* 3 Metric Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">Monthly Search Volume</p>
                  <p className="text-xl font-extrabold text-slate-900 mt-1">
                    {suggestData.volume.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">estimated searches / mo</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">Cost Per Click (CPC)</p>
                  <p className="text-xl font-extrabold text-slate-900 mt-1">
                    ${suggestData.cpc.toFixed(2)}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">average Google Ads bid</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">SEO Difficulty</p>
                  <p className="text-xl font-extrabold text-slate-900 mt-1">
                    {suggestData.difficulty} <span className="text-xs font-normal text-slate-400">/ 100</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">organic competition rating</p>
                </div>
              </div>

              {/* Keyword Variations Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <div className="overflow-x-auto relative">
                  <table className="w-full text-left text-xs min-w-[480px]">
                    <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5 sticky left-0 bg-slate-50 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)] min-w-[180px]">Keyword Idea</th>
                        <th className="p-3.5 text-right whitespace-nowrap min-w-[110px]">Monthly Volume</th>
                        <th className="p-3.5 text-right whitespace-nowrap min-w-[90px]">Est. CPC</th>
                        <th className="p-3.5 text-right whitespace-nowrap min-w-[90px]">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-normal text-slate-800">
                      {suggestData.keywords.map((kw, i) => (
                        <tr key={i} className="group hover:bg-slate-50/80 transition-colors">
                          <td className="p-3.5 font-semibold text-slate-900 sticky left-0 bg-white group-hover:bg-slate-50/80 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]">
                            {kw.keyword}
                          </td>
                          <td className="p-3.5 text-right font-medium text-slate-700 whitespace-nowrap">
                            {kw.volume.toLocaleString()}
                          </td>
                          <td className="p-3.5 text-right font-medium text-slate-700 whitespace-nowrap">
                            ${kw.cpc.toFixed(2)}
                          </td>
                          <td className="p-3.5 text-right whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                kw.difficulty === "Easy"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : kw.difficulty === "Medium"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-rose-50 text-rose-700"
                              }`}
                            >
                              {kw.difficulty}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
