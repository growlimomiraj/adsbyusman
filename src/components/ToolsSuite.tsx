import React, { useState } from "react";
import {
  Search,
  Sparkles,
  Zap,
  TrendingUp,
  ArrowRight,
  HelpCircle,
  Copy,
  Check,
} from "lucide-react";
import { KeywordIdea, HeadlineIdea } from "../types";

export const ToolsSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"keywords" | "headlines">("keywords");

  // Keyword tool states
  const [keywordInput, setKeywordInput] = useState("digital marketing");
  const [keywordLoading, setKeywordLoading] = useState(false);
  const [keywordResults, setKeywordResults] = useState<KeywordIdea[]>([
    { keyword: "digital marketing course", volume: 49500, cpc: 4.80, difficulty: 46, intent: "Commercial", trend: "+28%" },
    { keyword: "digital marketing strategy template", volume: 18100, cpc: 3.20, difficulty: 32, intent: "Informational", trend: "+35%" },
    { keyword: "digital marketing agency near me", volume: 27100, cpc: 9.40, difficulty: 64, intent: "Transactional", trend: "+19%" },
    { keyword: "what is digital marketing definition", volume: 74000, cpc: 1.85, difficulty: 29, intent: "Informational", trend: "+12%" },
    { keyword: "digital marketing tools 2026", volume: 14800, cpc: 5.10, difficulty: 38, intent: "Commercial", trend: "+45%" },
  ]);

  // Headline generator states
  const [headlineTopic, setHeadlineTopic] = useState("SEO Traffic");
  const [headlineLoading, setHeadlineLoading] = useState(false);
  const [headlineResults, setHeadlineResults] = useState<HeadlineIdea[]>([
    { title: "How to Double Your Organic Search Traffic in 90 Days (Step-by-Step)", ctrScore: 95, type: "Actionable Guide" },
    { title: "The 7 Deadly SEO Mistakes That Are Crushing Your Google Rankings", ctrScore: 92, type: "Pain Point & Fear" },
    { title: "Steal My Exact SEO Traffic Playbook (Backed by 10,000+ A/B Tests)", ctrScore: 97, type: "Authority Case Study" },
    { title: "Why Most Blogs Get Zero Traffic in 2026 (And How to Win Instead)", ctrScore: 89, type: "Curiosity Loop" },
  ]);

  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  const handleSearchKeywords = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keywordInput.trim()) return;
    setKeywordLoading(true);
    try {
      const res = await fetch("/api/keyword-ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keywordInput }),
      });
      const data = await res.json();
      if (data.results && Array.isArray(data.results)) {
        setKeywordResults(data.results);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setKeywordLoading(false);
    }
  };

  const handleGenerateHeadlines = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!headlineTopic.trim()) return;
    setHeadlineLoading(true);
    try {
      const res = await fetch("/api/headline-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: headlineTopic }),
      });
      const data = await res.json();
      if (data.headlines && Array.isArray(data.headlines)) {
        setHeadlineResults(data.headlines);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setHeadlineLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTitle(text);
    setTimeout(() => setCopiedTitle(null), 2000);
  };

  return (
    <section id="tools" className="py-20 bg-slate-50 border-t border-slate-200/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f25f22] text-xs font-bold uppercase tracking-wider mb-3">
            Ubersuggest & Marketing Suite
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Free Marketing <span className="text-[#f25f22]">Tools Lab</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Test the same intelligence engines that power over 3 million monthly marketers. Explore high-intent keywords and engineer viral click-through titles in real time.
          </p>

          {/* Sub Navigation Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-200/80 border border-slate-300 mt-8">
            <button
              onClick={() => setActiveTab("keywords")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "keywords"
                  ? "bg-[#f25f22] text-white shadow-md"
                  : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Keyword Opportunity Explorer</span>
            </button>
            <button
              onClick={() => setActiveTab("headlines")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "headlines"
                  ? "bg-[#f25f22] text-white shadow-md"
                  : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Viral Headline Generator</span>
            </button>
          </div>
        </div>

        {/* Tool 1: Keyword Explorer */}
        {activeTab === "keywords" && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-1">
                Ubersuggest Keyword Research
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Discover high-volume, low-competition keywords with exact search intent and CPC.
              </p>
            </div>

            <form onSubmit={handleSearchKeywords} className="flex flex-col sm:flex-row gap-2.5 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  placeholder="Enter any keyword (e.g. saas pricing, fitness app, crm)"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 focus:bg-white text-slate-900 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none text-base font-semibold"
                />
              </div>
              <button
                type="submit"
                disabled={keywordLoading}
                className="px-6 py-3.5 bg-[#f25f22] hover:bg-[#d94e16] text-white text-sm font-extrabold uppercase tracking-wide rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap min-w-[150px] flex items-center justify-center gap-2"
              >
                {keywordLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <span>Search Ideas</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Keyword Results Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 relative">
              <table className="w-full text-left text-sm text-slate-700 min-w-[700px]">
                <thead className="bg-slate-50 text-xs font-black uppercase text-slate-500 tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-3 sticky left-0 bg-slate-50 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)] min-w-[200px]">Keyword Idea</th>
                    <th className="px-5 py-3 whitespace-nowrap">Monthly Volume</th>
                    <th className="px-5 py-3 whitespace-nowrap">CPC (USD)</th>
                    <th className="px-5 py-3 whitespace-nowrap">SEO Difficulty (SD)</th>
                    <th className="px-5 py-3 whitespace-nowrap">Intent</th>
                    <th className="px-5 py-3 whitespace-nowrap">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {keywordResults.map((item, idx) => (
                    <tr key={idx} className="group hover:bg-orange-50/40 transition-colors">
                      <td className="px-5 py-3.5 font-bold text-slate-900 sticky left-0 bg-white group-hover:bg-orange-50/70 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)] min-w-[200px]">
                        {item.keyword}
                      </td>
                      <td className="px-5 py-3.5 text-slate-800 font-bold whitespace-nowrap">
                        {item.volume.toLocaleString()}
                      </td>
                      <td className="px-5 py-3.5 font-semibold text-emerald-600 whitespace-nowrap">
                        ${item.cpc.toFixed(2)}
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            item.difficulty < 35
                              ? "bg-emerald-100 text-emerald-800"
                              : item.difficulty < 55
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {item.difficulty} / 100
                        </span>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {item.intent}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-bold text-emerald-600 text-xs whitespace-nowrap">
                        {item.trend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tool 2: AI Headline Generator */}
        {activeTab === "headlines" && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-1">
                AI Viral Headline & Hook Crafter
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Generate high-CTR click-through headlines tested to outperform generic titles by up to 240%.
              </p>
            </div>

            <form onSubmit={handleGenerateHeadlines} className="flex flex-col sm:flex-row gap-2.5 mb-8">
              <div className="relative flex-1">
                <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                <input
                  type="text"
                  value={headlineTopic}
                  onChange={(e) => setHeadlineTopic(e.target.value)}
                  placeholder="Enter any topic or industry (e.g. Email Marketing, AI Coding, Real Estate)"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 focus:bg-white text-slate-900 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none text-base font-semibold"
                />
              </div>
              <button
                type="submit"
                disabled={headlineLoading}
                className="px-6 py-3.5 bg-[#f25f22] hover:bg-[#d94e16] text-white text-sm font-extrabold uppercase tracking-wide rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap min-w-[150px] flex items-center justify-center gap-2"
              >
                {headlineLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Writing...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Hooks</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="space-y-3">
              {headlineResults.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-orange-300 transition-colors"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-orange-100 text-[#f25f22]">
                        {item.type}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> CTR Score: {item.ctrScore}/100
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      &ldquo;{item.title}&rdquo;
                    </h4>
                  </div>

                  <button
                    onClick={() => handleCopy(item.title)}
                    className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    {copiedTitle === item.title ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Title</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
