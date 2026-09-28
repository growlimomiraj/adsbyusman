import React, { useState } from "react";
import { Search, Clock, Calendar, ArrowRight, User, Share2, Bookmark, CheckCircle2, ChevronLeft } from "lucide-react";
import { ProfileConfig } from "../../types";

interface BlogPageProps {
  profile: ProfileConfig;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  category: "SEO" | "Paid Ads" | "CRO" | "Social Media" | "Content Marketing";
  excerpt: string;
  readTime: string;
  date: string;
  commentsCount: number;
  featured?: boolean;
  content: string[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ profile, onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingArticle, setReadingArticle] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "ai-search-2026",
      title: "How AI Is Reshaping Google Search: 7 Things Marketers Must Do in 2026",
      category: "SEO",
      excerpt: "Google's search generative experience is changing how clicks are distributed. Here is the exact playbook we use at Growlimo to maintain traffic and earn AI search citations.",
      readTime: "8 min read",
      date: "September 18, 2026",
      commentsCount: 142,
      featured: true,
      content: [
        "If you've been paying attention to Google lately, you already know that search is undergoing its biggest transformation since the introduction of RankBrain.",
        "AI Overviews and Search Generative Experience (SGE) are answering simple queries directly on the search engine results page (SERP). That means standard top-of-funnel informational blog posts that just regurgitate basic definitions will see their organic CTR plummet by 30% to 50%.",
        "So what should you do? Here are the 3 foundational shifts you need to make right now:",
        "1. Focus on Proprietary Data and Original Research: Google's AI models cannot synthesize data that does not yet exist. When you publish original benchmark surveys, customer transaction data, or original tests, the AI MUST cite your website as the primary source.",
        "2. Optimize for Information Gain: Every piece of content you produce must introduce novel insights, expert perspectives, and actionable calculators or diagrams that cannot be generated in 2 seconds by an LLM.",
        "3. Build Real Brand Authority: Entity optimization and authoritative digital PR backlinks from tier-1 media outlets are more important than ever. Brand queries remain immune to zero-click AI summaries.",
      ],
    },
    {
      id: "double-conversion-rate",
      title: "How to Double Your Conversion Rate Without Changing Your Product",
      category: "CRO",
      excerpt: "Traffic is useless if visitors don't convert. Here are 5 psychological micro-tweaks that doubled lead volume on over 200 client websites.",
      readTime: "6 min read",
      date: "September 15, 2026",
      commentsCount: 89,
      content: [
        "Most companies obsess over getting more traffic. But the fastest way to double your revenue is actually fixing the leaky bucket you already have.",
        "If your site gets 100,000 visitors a month at a 1.5% conversion rate, you generate 1,500 leads. If you increase that conversion rate to 3.0%, you get 3,000 leads without spending an additional penny on ads.",
        "Step 1: Eliminate the form fields nobody cares about. Every field you remove from your signup form increases completion rates by an average of 14%.",
        "Step 2: Add social proof directly next to the primary CTA button. Don't bury reviews in a separate tab. Place verified customer logos and star ratings right beneath your primary action button.",
        "Step 3: Test a two-step multi-page form. Starting with a low-friction question (e.g. 'What is your website URL?') creates psychological momentum that leads to higher checkout completions.",
      ],
    },
    {
      id: "google-vs-meta-ads",
      title: "Google Ads vs. Meta Ads: Where Should You Spend Your Next $10,000?",
      category: "Paid Ads",
      excerpt: "Should you capture existing search intent or create brand-new demand? A transparent financial breakdown for founders and CMOs.",
      readTime: "7 min read",
      date: "September 12, 2026",
      commentsCount: 67,
      content: [
        "One of the questions I get asked most frequently by founders is: 'Usman, I have $10,000 a month to spend on paid ads. Should I put it into Google or Meta?'",
        "The short answer: It depends entirely on whether active commercial intent already exists for your solution.",
        "Google Ads is high-intent capture. When someone searches 'hire enterprise seo agency' or 'best crm software for real estate', they are actively looking to purchase. The CPC is higher, but the conversion cycle is significantly shorter.",
        "Meta (Facebook & Instagram) is demand generation. Users aren't looking for you; they are scrolling through reels. You need disruptive visual hooks and high-emotional resonance to stop their thumbs.",
        "Our golden rule: If your product solves a problem people actively search for, start with Google Search Ads. Once you achieve profitable unit economics, use Meta to scale top-of-funnel retargeting.",
      ],
    },
    {
      id: "high-authority-backlinks",
      title: "How to Build High-Authority Backlinks in 2026 (Without Paying for Links)",
      category: "SEO",
      excerpt: "Buying links gets you penalized. Here is the modern digital PR methodology Growlimo uses to earn natural links from Forbes, NYT, and WSJ.",
      readTime: "9 min read",
      date: "September 08, 2026",
      commentsCount: 115,
      content: [
        "Backlinks remain one of the top three Google ranking factors. But the days of automated link networks, paid guest posts on spam sites, and spammy directory submissions are completely over.",
        "Google's SpamBrain algorithm actively discounts low-tier paid links. If you want sustainable rankings, you must earn genuine editorial citations from high-trust media.",
        "How do we do this at scale? We use Data Journalism.",
        "We survey 1,000 business executives on an emerging industry challenge, package the findings into a clean benchmark infographic, and pitch the exclusive dataset to journalists looking for verified statistics.",
        "Journalists need credible data for their daily articles. When you provide the data, they link to your website as the primary citation. That is how you earn 50+ DR80+ backlinks in a single month.",
      ],
    },
    {
      id: "viral-short-form-video",
      title: "The B2B Playbook for Short-Form Video (Reels, TikTok, and YouTube Shorts)",
      category: "Social Media",
      excerpt: "B2B doesn't have to mean boring. How to turn complex technical expertise into viral clips that drive enterprise pipeline.",
      readTime: "5 min read",
      date: "September 04, 2026",
      commentsCount: 54,
      content: [
        "Think TikTok and YouTube Shorts are just for teenagers dancing? Think again.",
        "C-level executives and enterprise buyers consume short-form video every single day on LinkedIn and YouTube. The difference is the hook.",
        "If you start a video with 'Today I want to talk about cybersecurity', they will swipe away in 0.8 seconds.",
        "If you start with 'Here is how a $50M company lost everything in 14 minutes due to one unpatched line of code', you capture 100% of their attention.",
        "Deliver the key takeaway within 45 seconds, and direct viewers to download the comprehensive whitepaper or audit tool in the comments.",
      ],
    },
    {
      id: "content-pillar-strategy",
      title: "The Topic Cluster Architecture: How to Organize Content for Maximum Topical Authority",
      category: "Content Marketing",
      excerpt: "Stop writing random disconnected blog posts. Learn how pillar pages and internal linking clusters signal domain expertise to Google.",
      readTime: "8 min read",
      date: "August 29, 2026",
      commentsCount: 78,
      content: [
        "Google doesn't evaluate blog posts in isolation anymore. It looks at Topical Authority.",
        "If you want to rank for 'e-commerce marketing', writing one 3,000-word guide isn't enough. You need an interconnected hub with supporting sub-topic articles covering email retention, checkout optimization, paid ad scaling, and customer segmentation.",
        "By structuring your content with strict parent-child URL hierarchies and contextual internal links pointing back to the core pillar, you signal to Google that your domain is the ultimate authority on the subject.",
      ],
    },
  ];

  const categories = ["All", "SEO", "Paid Ads", "CRO", "Social Media", "Content Marketing"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white text-slate-900 animate-in fade-in duration-300">
      {/* Blog Article Reader Modal / Full View */}
      {readingArticle ? (
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setReadingArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f25f22] hover:text-[#d94e14] mb-8 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to All Articles
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-orange-100/70 text-[#f25f22] text-xs font-bold uppercase tracking-wider mb-4">
              {readingArticle.category}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.2] mb-6">
              {readingArticle.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src="/usman.png"
                  alt="Muhammad Usman"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#f25f22] bg-slate-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80";
                  }}
                />
                <div>
                  <div className="text-sm font-black text-slate-900">Muhammad Usman</div>
                  <div className="text-xs text-slate-500">Founder of Growlimo • {readingArticle.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{readingArticle.readTime}</span>
              </div>
            </div>

            {/* Article Body Content */}
            <div className="space-y-6 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              {readingArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Box within article */}
            <div className="mt-12 p-8 rounded-2xl bg-orange-50 border border-orange-200">
              <h3 className="text-xl font-black text-slate-900 mb-2">Want Growlimo to implement this for your business?</h3>
              <p className="text-sm text-slate-600 mb-6">
                Our agency executes complete, done-for-you growth campaigns that drive millions of visitors and high-value sales.
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-8 py-3.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
              >
                Get a Free Strategy Proposal →
              </button>
            </div>
          </div>
        </article>
      ) : (
        <>
          {/* Header Banner */}
          <section className="bg-gradient-to-b from-slate-50 via-white to-white pt-10 pb-12 border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
                <button onClick={() => onNavigate("home")} className="hover:text-[#f25f22] cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-[#f25f22]">Marketing Blog</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#f25f22] mb-2">
                    <span>by Muhammad Usman</span>
                    <span>•</span>
                    <span>1,500+ Published Guides</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    Digital Marketing <span className="text-[#f25f22]">Blog</span>
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
                    Your #1 resource for actionable digital marketing strategies, SEO trends, and conversion playbooks to scale your online business.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="w-full md:w-80">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search marketing articles..."
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f25f22]"
                    />
                  </div>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#f25f22] text-white shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Feed */}
          <section className="py-12 bg-slate-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setReadingArticle(post)}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-lg hover:border-orange-300 transition-all flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3">
                        <span className="text-[#f25f22] uppercase tracking-wider">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#f25f22] transition-colors leading-snug mb-3">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <img
                          src="/usman.png"
                          alt="Muhammad Usman"
                          className="w-6 h-6 rounded-full object-cover border border-[#f25f22]"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80";
                          }}
                        />
                        <span className="font-bold text-slate-800">Muhammad Usman</span>
                      </div>
                      <span className="text-[#f25f22] font-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read Guide →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
