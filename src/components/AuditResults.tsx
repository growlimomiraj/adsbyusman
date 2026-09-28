import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Award,
  Link2,
  Search,
  Zap,
  Calendar,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { AuditResult, SeoIssue } from "../types";

interface AuditResultsProps {
  audit: AuditResult;
  onOpenConsultation: () => void;
  onClose?: () => void;
}

export const AuditResults: React.FC<AuditResultsProps> = ({
  audit,
  onOpenConsultation,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"issues" | "keywords" | "roadmap" | "traffic">("issues");
  const [issueFilter, setIssueFilter] = useState<"all" | "critical" | "warning" | "good">("all");
  const [expandedIssueId, setExpandedIssueId] = useState<string | null>(audit.issues[0]?.id || null);

  const filteredIssues = audit.issues.filter((issue) => {
    if (issueFilter === "all") return true;
    return issue.severity === issueFilter;
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-500 border-emerald-500 bg-emerald-50";
    if (score >= 60) return "text-amber-500 border-amber-500 bg-amber-50";
    return "text-rose-500 border-rose-500 bg-rose-50";
  };

  // Find max traffic for SVG chart scaling
  const maxTraffic = Math.max(...audit.trafficHistory.map((p) => p.traffic), 1000);

  return (
    <section id="audit-results" className="py-12 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar with Analyzed URL & Score */}
        <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                <Sparkles className="w-3.5 h-3.5" /> Instant Website Analysis
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
                Audit Report:{" "}
                <span className="text-[#f25f22] underline decoration-orange-500/40">
                  {audit.domain}
                </span>
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                {audit.summary ||
                  `Deep-dive SEO diagnostics, organic visibility index, and immediate keyword expansion opportunities for ${audit.domain}.`}
              </p>
            </div>

            {/* Score Pill & Action Button */}
            <div className="flex items-center gap-5 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center gap-3">
                <div
                  className={`w-18 h-18 rounded-full border-4 flex flex-col items-center justify-center font-black ${getScoreColor(
                    audit.overallScore
                  )} shadow-lg`}
                >
                  <span className="text-2xl leading-none">{audit.overallScore}</span>
                  <span className="text-[9px] uppercase font-bold tracking-tighter opacity-80">
                    / 100
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">SEO Health</p>
                  <p className="text-sm font-semibold text-white">
                    {audit.overallScore >= 80
                      ? "Healthy"
                      : audit.overallScore >= 60
                      ? "Needs Optimization"
                      : "Critical Fixes Needed"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-3 text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] rounded-xl shadow-lg shadow-orange-500/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  Fix My Site
                </button>
                {onClose && (
                  <button
                    onClick={onClose}
                    className="px-3 py-3 text-xs font-bold text-slate-400 hover:text-white bg-slate-700/60 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                    title="Close Report"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 5 High-Impact Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-700/80">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span>Monthly Organic</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {audit.metrics.organicMonthlyTraffic.toLocaleString()}
              </p>
              <p className="text-[11px] text-emerald-400 font-medium mt-0.5">Est. search visits</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Domain Authority</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {audit.metrics.domainAuthority}/100
              </p>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Moz & Ahrefs scale</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <Link2 className="w-4 h-4 text-cyan-400" />
                <span>Total Backlinks</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {audit.metrics.backlinks.toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Referring links</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <Search className="w-4 h-4 text-indigo-400" />
                <span>Organic Keywords</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {audit.metrics.organicKeywords.toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Indexed search terms</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Speed & UX Index</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {audit.metrics.speedScore}/100
              </p>
              <p className="text-[11px] text-emerald-400 font-medium mt-0.5">Core Web Vitals</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3 mb-6">
          <button
            onClick={() => setActiveTab("issues")}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "issues"
                ? "bg-[#f25f22] text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>SEO Issues ({audit.issues.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("traffic")}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "traffic"
                ? "bg-[#f25f22] text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>12-Month Traffic Projection</span>
          </button>

          <button
            onClick={() => setActiveTab("keywords")}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "keywords"
                ? "bg-[#f25f22] text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Top Keywords</span>
          </button>

          <button
            onClick={() => setActiveTab("roadmap")}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "roadmap"
                ? "bg-[#f25f22] text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Muhammad Usman&apos;s 30-Day Growth Plan</span>
          </button>
        </div>

        {/* Tab 1: Issues View */}
        {activeTab === "issues" && (
          <div className="space-y-4">
            {/* Filter pills */}
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-slate-400">Filter by severity:</span>
              {(["all", "critical", "warning", "good"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setIssueFilter(filter)}
                  className={`px-3 py-1 rounded-full uppercase tracking-wider transition-colors capitalize ${
                    issueFilter === filter
                      ? "bg-white text-slate-900 font-extrabold"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* List of issues */}
            <div className="space-y-3">
              {filteredIssues.map((issue) => {
                const isExpanded = expandedIssueId === issue.id;
                return (
                  <div
                    key={issue.id}
                    className="bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedIssueId(isExpanded ? null : issue.id)}
                      className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between text-left gap-4 hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        {issue.severity === "critical" && (
                          <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30">
                            <AlertTriangle className="w-5 h-5" />
                          </div>
                        )}
                        {issue.severity === "warning" && (
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            <AlertTriangle className="w-5 h-5" />
                          </div>
                        )}
                        {issue.severity === "good" && (
                          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                              {issue.category}
                            </span>
                            <span
                              className={`text-[10px] uppercase font-bold tracking-wider ${
                                issue.severity === "critical"
                                  ? "text-rose-400"
                                  : issue.severity === "warning"
                                  ? "text-amber-400"
                                  : "text-emerald-400"
                              }`}
                            >
                              {issue.severity} priority
                            </span>
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-white">
                            {issue.title}
                          </h4>
                        </div>
                      </div>

                      <div className="text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-700/80 bg-slate-900/40 text-sm space-y-3">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Diagnostic Finding:
                          </p>
                          <p className="text-slate-300 leading-relaxed">{issue.description}</p>
                        </div>
                        <div className="bg-orange-500/10 border border-orange-500/20 p-3.5 rounded-lg">
                          <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" /> Muhammad Usman&apos;s Recommended Fix:
                          </p>
                          <p className="text-orange-100 font-medium">{issue.recommendation}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: 12-Month Traffic Projection Chart */}
        {activeTab === "traffic" && (
          <div className="bg-slate-800/80 rounded-xl border border-slate-700 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Estimated 12-Month Organic Traffic Trend
                </h3>
                <p className="text-xs text-slate-400">
                  Search volume trajectory based on current keyword rankings and historical crawl velocity.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                +42% Growth Opportunity Gap
              </span>
            </div>

            {/* Custom Responsive SVG Chart */}
            <div className="w-full h-64 sm:h-72">
              <svg className="w-full h-full" viewBox="0 0 800 240" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f25f22" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#f25f22" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal gridlines */}
                {[0.25, 0.5, 0.75, 1].map((lvl, i) => (
                  <line
                    key={i}
                    x1="40"
                    y1={200 - lvl * 170}
                    x2="780"
                    y2={200 - lvl * 170}
                    stroke="#334155"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                ))}

                {/* Area Fill */}
                <polygon
                  fill="url(#trafficGradient)"
                  points={`40,200 ${audit.trafficHistory
                    .map((p, idx) => {
                      const x = 40 + (idx / (audit.trafficHistory.length - 1)) * 740;
                      const y = 200 - (p.traffic / maxTraffic) * 170;
                      return `${x},${y}`;
                    })
                    .join(" ")} 780,200`}
                />

                {/* Main Curve Line */}
                <polyline
                  fill="none"
                  stroke="#f25f22"
                  strokeWidth="3"
                  points={audit.trafficHistory
                    .map((p, idx) => {
                      const x = 40 + (idx / (audit.trafficHistory.length - 1)) * 740;
                      const y = 200 - (p.traffic / maxTraffic) * 170;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                />

                {/* Data Points */}
                {audit.trafficHistory.map((p, idx) => {
                  const x = 40 + (idx / (audit.trafficHistory.length - 1)) * 740;
                  const y = 200 - (p.traffic / maxTraffic) * 170;
                  return (
                    <g key={idx} className="group">
                      <circle cx={x} cy={y} r="4" fill="#ffffff" stroke="#f25f22" strokeWidth="2.5" />
                      <text
                        x={x}
                        y={225}
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="11"
                        fontWeight="600"
                      >
                        {p.month}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-slate-700 text-center">
              <div>
                <p className="text-xs text-slate-400 font-semibold">Starting Baseline</p>
                <p className="text-base font-bold text-white">
                  {audit.trafficHistory[0]?.traffic.toLocaleString()} visits
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold">Current Pace</p>
                <p className="text-base font-bold text-white">
                  {audit.trafficHistory[audit.trafficHistory.length - 1]?.traffic.toLocaleString()} visits
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold">Target Potential (GROWLIMO)</p>
                <p className="text-base font-bold text-[#f25f22]">
                  {Math.round(
                    (audit.trafficHistory[audit.trafficHistory.length - 1]?.traffic || 1000) * 1.85
                  ).toLocaleString()}{" "}
                  visits
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold">Est. Pipeline Value</p>
                <p className="text-base font-bold text-emerald-400">
                  ${Math.round(audit.metrics.organicMonthlyTraffic * 0.42).toLocaleString()} / yr
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Keywords Table */}
        {activeTab === "keywords" && (
          <div className="bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-700 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <h3 className="font-bold text-white text-base sm:text-lg">
                High-Volume Ranking & Opportunity Keywords
              </h3>
              <span className="text-xs text-slate-400">
                Sorted by search volume and commercial intent
              </span>
            </div>

            <div className="overflow-x-auto relative">
              <table className="w-full text-left text-sm text-slate-300 min-w-[680px]">
                <thead className="bg-slate-900/90 text-xs uppercase font-bold text-slate-400 tracking-wider">
                  <tr>
                    <th className="px-5 py-3 sticky left-0 bg-slate-900/95 z-20 shadow-[2px_0_6px_-2px_rgba(0,0,0,0.5)] min-w-[220px]">
                      Keyword
                    </th>
                    <th className="px-5 py-3 whitespace-nowrap">Search Volume</th>
                    <th className="px-5 py-3 whitespace-nowrap">CPC (Est.)</th>
                    <th className="px-5 py-3 whitespace-nowrap">SEO Difficulty (SD)</th>
                    <th className="px-5 py-3 whitespace-nowrap">Current Pos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {audit.topKeywords.map((kw, i) => (
                    <tr key={i} className="group hover:bg-slate-700/40 transition-colors">
                      <td className="px-5 py-4 font-semibold text-white sticky left-0 bg-slate-800/95 group-hover:bg-slate-750 z-10 shadow-[2px_0_6px_-2px_rgba(0,0,0,0.5)] min-w-[220px]">
                        <div className="flex items-center gap-2">
                          <Search className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span className="leading-snug">{kw.keyword}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 font-bold text-slate-200 whitespace-nowrap">
                        {kw.volume.toLocaleString()} / mo
                      </td>
                      <td className="px-5 py-4 font-medium text-emerald-400 whitespace-nowrap">
                        ${kw.cpc.toFixed(2)}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-bold ${
                              kw.difficulty < 35
                                ? "bg-emerald-500/20 text-emerald-400"
                                : kw.difficulty < 60
                                ? "bg-amber-500/20 text-amber-400"
                                : "bg-rose-500/20 text-rose-400"
                            }`}
                          >
                            {kw.difficulty}
                          </span>
                          <span className="text-xs text-slate-400">
                            {kw.difficulty < 35 ? "Easy" : kw.difficulty < 60 ? "Medium" : "Hard"}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 font-bold text-orange-400 whitespace-nowrap">
                        #{kw.position}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: 30-Day Growth Roadmap */}
        {activeTab === "roadmap" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {audit.actionPlan.map((plan, i) => (
                <div
                  key={i}
                  className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-[#f25f22] uppercase tracking-wider">
                        {plan.phase}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                        <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                          Impact: {plan.impact}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                          Effort: {plan.effort}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{plan.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{plan.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-600/30 via-orange-500/20 to-transparent p-6 rounded-2xl border border-orange-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Want our agency team to execute this roadmap for you?
                </h4>
                <p className="text-xs sm:text-sm text-orange-200">
                  We handle the technical audit fixes, content production, and enterprise link building hands-free.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 text-sm font-extrabold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule Free Growth Call
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
