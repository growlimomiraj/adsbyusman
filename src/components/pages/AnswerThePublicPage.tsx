import React, { useState } from "react";
import { Search, Globe, HelpCircle, GitFork, ArrowRightLeft, Sparkles, Download, Copy, Check } from "lucide-react";

interface AnswerThePublicPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const AnswerThePublicPage: React.FC<AnswerThePublicPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [topic, setTopic] = useState("seo");
  const [currentTopic, setCurrentTopic] = useState("seo");
  const [activeCategory, setActiveCategory] = useState<"questions" | "prepositions" | "comparisons">("questions");
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setCurrentTopic(topic.trim());
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const questionGroups = [
    {
      modifier: "WHAT",
      color: "border-orange-200 bg-orange-50/60 text-orange-950",
      badgeColor: "bg-[#f25f22] text-white",
      queries: [
        { q: `what is ${currentTopic} and how does it work`, vol: "49,500", cpc: "$8.20" },
        { q: `what does an ${currentTopic} agency do`, vol: "18,100", cpc: "$12.40" },
        { q: `what is technical ${currentTopic}`, vol: "14,800", cpc: "$9.50" },
        { q: `what is the roi of ${currentTopic}`, vol: "8,900", cpc: "$14.10" },
      ],
    },
    {
      modifier: "HOW",
      color: "border-blue-200 bg-blue-50/60 text-blue-950",
      badgeColor: "bg-blue-600 text-white",
      queries: [
        { q: `how to rank on google with ${currentTopic}`, vol: "33,100", cpc: "$7.50" },
        { q: `how long does ${currentTopic} take to work`, vol: "22,400", cpc: "$11.00" },
        { q: `how to do keyword research for ${currentTopic}`, vol: "16,200", cpc: "$6.80" },
        { q: `how to optimize core web vitals for ${currentTopic}`, vol: "9,400", cpc: "$8.90" },
      ],
    },
    {
      modifier: "WHY",
      color: "border-emerald-200 bg-emerald-50/60 text-emerald-950",
      badgeColor: "bg-emerald-600 text-white",
      queries: [
        { q: `why is ${currentTopic} important for business`, vol: "27,100", cpc: "$9.30" },
        { q: `why ${currentTopic} rankings drop suddenly`, vol: "12,800", cpc: "$13.50" },
        { q: `why hiring an ${currentTopic} expert matters`, vol: "8,200", cpc: "$15.20" },
        { q: `why backlinks are still crucial for ${currentTopic}`, vol: "6,900", cpc: "$8.40" },
      ],
    },
    {
      modifier: "CAN",
      color: "border-purple-200 bg-purple-50/60 text-purple-950",
      badgeColor: "bg-purple-600 text-white",
      queries: [
        { q: `can ${currentTopic} be done with ai`, vol: "24,500", cpc: "$10.20" },
        { q: `can small businesses compete in ${currentTopic}`, vol: "11,300", cpc: "$7.80" },
        { q: `can ${currentTopic} replace paid ads`, vol: "9,100", cpc: "$12.00" },
        { q: `can bad links hurt your ${currentTopic}`, vol: "7,400", cpc: "$9.10" },
      ],
    },
  ];

  const prepositionGroups = [
    {
      modifier: "FOR",
      color: "border-amber-200 bg-amber-50/60 text-amber-950",
      badgeColor: "bg-amber-600 text-white",
      queries: [
        { q: `${currentTopic} for ecommerce brands`, vol: "28,200", cpc: "$11.50" },
        { q: `${currentTopic} for b2b saas companies`, vol: "19,400", cpc: "$16.80" },
        { q: `${currentTopic} for local business`, vol: "34,000", cpc: "$13.20" },
        { q: `${currentTopic} for beginners guide`, vol: "22,100", cpc: "$5.40" },
      ],
    },
    {
      modifier: "WITH",
      color: "border-teal-200 bg-teal-50/60 text-teal-950",
      badgeColor: "bg-teal-600 text-white",
      queries: [
        { q: `${currentTopic} with ai content tools`, vol: "21,800", cpc: "$8.90" },
        { q: `${currentTopic} with python automation`, vol: "12,400", cpc: "$6.10" },
        { q: `${currentTopic} with ubersuggest`, vol: "9,600", cpc: "$4.50" },
        { q: `${currentTopic} with programmatic landing pages`, vol: "7,200", cpc: "$14.20" },
      ],
    },
    {
      modifier: "WITHOUT",
      color: "border-rose-200 bg-rose-50/60 text-rose-950",
      badgeColor: "bg-rose-600 text-white",
      queries: [
        { q: `${currentTopic} without buying backlinks`, vol: "14,200", cpc: "$9.80" },
        { q: `${currentTopic} without writing code`, vol: "18,500", cpc: "$6.40" },
        { q: `${currentTopic} without blogging`, vol: "8,900", cpc: "$7.20" },
      ],
    },
  ];

  const comparisonGroups = [
    {
      modifier: "VS / VERSUS",
      color: "border-indigo-200 bg-indigo-50/60 text-indigo-950",
      badgeColor: "bg-indigo-600 text-white",
      queries: [
        { q: `${currentTopic} vs paid search ads`, vol: "41,000", cpc: "$14.50" },
        { q: `${currentTopic} vs social media marketing`, vol: "24,800", cpc: "$9.20" },
        { q: `${currentTopic} agency vs in-house team`, vol: "11,200", cpc: "$18.40" },
        { q: `${currentTopic} audit vs full retainer`, vol: "5,800", cpc: "$12.90" },
      ],
    },
    {
      modifier: "OR",
      color: "border-slate-200 bg-slate-50 text-slate-900",
      badgeColor: "bg-slate-700 text-white",
      queries: [
        { q: `${currentTopic} or ppc for new startups`, vol: "19,300", cpc: "$11.00" },
        { q: `${currentTopic} or content marketing first`, vol: "13,600", cpc: "$8.40" },
      ],
    },
  ];

  return (
    <div className="bg-white text-slate-900 animate-in fade-in duration-300">
      {/* Top Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#1e232d] text-white pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <button onClick={() => onNavigate("home")} className="hover:text-white cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#f25f22]">AnswerThePublic</span>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs text-orange-200 font-semibold mb-2">
              <span>by</span>
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 bg-[#f25f22] text-white rounded text-[10px] font-black">
                GL
              </span>
              <span className="font-bold text-white uppercase tracking-wider text-xs">GROWLIMO</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Answer The Public
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Discover what your customers are asking in real time. Our search listening tool taps into Google autocomplete to generate raw consumer search insights.
            </p>
          </div>

          {/* Search Input Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter a topic, brand or keyword (e.g. SEO, CRM, Coffee)..."
                className="w-full py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Results View */}
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top category tabs */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveCategory("questions")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === "questions"
                    ? "bg-[#f25f22] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                Questions (16)
              </button>
              <button
                onClick={() => setActiveCategory("prepositions")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === "prepositions"
                    ? "bg-[#f25f22] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <GitFork className="w-4 h-4" />
                Prepositions (11)
              </button>
              <button
                onClick={() => setActiveCategory("comparisons")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === "comparisons"
                    ? "bg-[#f25f22] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <ArrowRightLeft className="w-4 h-4" />
                Comparisons (6)
              </button>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing insights for: <span className="font-bold text-slate-900">&ldquo;{currentTopic}&rdquo;</span>
            </div>
          </div>

          {/* Questions Grid */}
          {activeCategory === "questions" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questionGroups.map((group, gIdx) => (
                <div key={gIdx} className={`border rounded-2xl p-6 ${group.color} shadow-xs`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${group.badgeColor}`}>
                      {group.modifier}
                    </span>
                    <span className="text-xs font-semibold opacity-70">
                      {group.queries.length} high-intent queries
                    </span>
                  </div>

                  <div className="space-y-3">
                    {group.queries.map((item, qIdx) => {
                      const id = `q-${gIdx}-${qIdx}`;
                      return (
                        <div
                          key={qIdx}
                          className="bg-white/90 hover:bg-white rounded-xl p-3.5 border border-white/60 shadow-2xs flex items-center justify-between gap-3 transition-colors group"
                        >
                          <div className="flex-1">
                            <p className="text-xs font-bold text-slate-900 leading-snug">{item.q}</p>
                            <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-500 font-medium">
                              <span>Vol: <strong className="text-slate-800">{item.vol}</strong></span>
                              <span>Est. CPC: <strong className="text-emerald-700">{item.cpc}</strong></span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(item.q, id)}
                            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-orange-100 hover:text-[#f25f22] flex items-center justify-center text-slate-500 transition-colors cursor-pointer shrink-0"
                            title="Copy query"
                          >
                            {copiedIndex === id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Prepositions Grid */}
          {activeCategory === "prepositions" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prepositionGroups.map((group, gIdx) => (
                <div key={gIdx} className={`border rounded-2xl p-6 ${group.color} shadow-xs`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${group.badgeColor}`}>
                      {group.modifier}
                    </span>
                    <span className="text-xs font-semibold opacity-70">
                      {group.queries.length} queries
                    </span>
                  </div>

                  <div className="space-y-3">
                    {group.queries.map((item, qIdx) => {
                      const id = `p-${gIdx}-${qIdx}`;
                      return (
                        <div
                          key={qIdx}
                          className="bg-white/90 hover:bg-white rounded-xl p-3.5 border border-white/60 shadow-2xs flex items-center justify-between gap-3 transition-colors group"
                        >
                          <div className="flex-1">
                            <p className="text-xs font-bold text-slate-900 leading-snug">{item.q}</p>
                            <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-500 font-medium">
                              <span>Vol: <strong className="text-slate-800">{item.vol}</strong></span>
                              <span>Est. CPC: <strong className="text-emerald-700">{item.cpc}</strong></span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(item.q, id)}
                            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-orange-100 hover:text-[#f25f22] flex items-center justify-center text-slate-500 transition-colors cursor-pointer shrink-0"
                            title="Copy query"
                          >
                            {copiedIndex === id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Comparisons Grid */}
          {activeCategory === "comparisons" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {comparisonGroups.map((group, gIdx) => (
                <div key={gIdx} className={`border rounded-2xl p-6 ${group.color} shadow-xs`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${group.badgeColor}`}>
                      {group.modifier}
                    </span>
                    <span className="text-xs font-semibold opacity-70">
                      {group.queries.length} queries
                    </span>
                  </div>

                  <div className="space-y-3">
                    {group.queries.map((item, qIdx) => {
                      const id = `c-${gIdx}-${qIdx}`;
                      return (
                        <div
                          key={qIdx}
                          className="bg-white/90 hover:bg-white rounded-xl p-3.5 border border-white/60 shadow-2xs flex items-center justify-between gap-3 transition-colors group"
                        >
                          <div className="flex-1">
                            <p className="text-xs font-bold text-slate-900 leading-snug">{item.q}</p>
                            <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-500 font-medium">
                              <span>Vol: <strong className="text-slate-800">{item.vol}</strong></span>
                              <span>Est. CPC: <strong className="text-emerald-700">{item.cpc}</strong></span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(item.q, id)}
                            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-orange-100 hover:text-[#f25f22] flex items-center justify-center text-slate-500 transition-colors cursor-pointer shrink-0"
                            title="Copy query"
                          >
                            {copiedIndex === id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Conversion Prompt */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-xs">
            <h3 className="text-xl font-black text-slate-900 mb-2">Want to rank for all of these high-intent questions?</h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
              Growlimo engineers content hubs that capture answer box snippets and generative AI citations across Google.
            </p>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-8 py-3.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
            >
              Get a Customized Content Strategy →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
