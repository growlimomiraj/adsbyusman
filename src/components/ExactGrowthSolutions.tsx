import React, { useState } from "react";
import { TrendingUp, Target, Gauge, Database, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { ProfileConfig } from "../types";

interface ExactGrowthSolutionsProps {
  profile?: ProfileConfig;
  onOpenConsultation: () => void;
  onNavigate?: (page: string) => void;
}

export const ExactGrowthSolutions: React.FC<ExactGrowthSolutionsProps> = ({
  profile,
  onOpenConsultation,
  onNavigate,
}) => {
  const leaderName = profile?.name || "Muhammad Usman";
  const [activePillar, setActivePillar] = useState<number>(0);

  const metrics = [
    { value: "$150M+", label: "Client Revenue Influenced", detail: "Across direct-to-consumer and B2B portfolios" },
    { value: "4.8x", label: "Average Paid ROAS", detail: "Consistent return across omnichannel campaigns" },
    { value: "+320%", label: "Organic Search Growth", detail: "Average 12-month compounding lift" },
    { value: "98%", label: "Partner Retention Rate", detail: "Long-term client partnerships built on performance" },
  ];

  const pillars = [
    {
      id: "organic-ai",
      index: "01",
      title: "Organic Search & Generative AI Visibility (GEO)",
      headline: "Own the First Position on Google and AI Engines",
      desc: "Traditional SEO is no longer enough. We architect full-funnel organic strategies that secure top Google SERP positions while ensuring your brand is cited by ChatGPT, Perplexity, and AI search agents.",
      deliverables: [
        "Generative Engine Optimization (GEO) & AI citation engineering",
        "High-intent keyword clusters with commercial purchase velocity",
        "Technical core web vitals optimization and crawl architecture",
        "Enterprise digital PR and high-authority link acquisition",
      ],
      icon: TrendingUp,
      badge: "Organic Growth",
    },
    {
      id: "paid-performance",
      index: "02",
      title: "High-Velocity Paid Media & Performance Marketing",
      headline: "Turn Ad Spend Into Scalable, Predictable Pipeline",
      desc: "Stop burning capital on unoptimized campaigns. We deploy algorithmic media buying strategies across Google Search, YouTube, Meta, and LinkedIn that systematically lower CAC while increasing customer LTV.",
      deliverables: [
        "Full-funnel Google Ads & Performance Max campaign architecture",
        "Creative testing frameworks with rapid iteration cycles",
        "Negative keyword auditing and click-fraud elimination",
        "B2B account-based marketing and retargeting sequences",
      ],
      icon: Target,
      badge: "Paid Acquisition",
    },
    {
      id: "cro-funnel",
      index: "03",
      title: "Conversion Funnel Engineering & CRO Science",
      headline: "Double Your Revenue Without Spending More on Traffic",
      desc: "Traffic is vanity; conversions are profit. Our conversion optimization lab runs continuous multivariate experiments, UX heatmaps, and psychological checkout improvements to maximize every visitor.",
      deliverables: [
        "Data-driven heuristic UX and customer friction audits",
        "Multivariate landing page experiments and split testing",
        "High-converting checkout flows and lead qualification forms",
        "Personalized onsite messaging based on referral sources",
      ],
      icon: Gauge,
      badge: "Conversion Science",
    },
    {
      id: "data-attribution",
      index: "04",
      title: "Data Intelligence, Attribution & Revenue Analytics",
      headline: "Clarity on Exactly What Drives Profit and Growth",
      desc: "Eliminate attribution blind spots caused by privacy changes and multi-device journeys. We build server-side tracking pipelines that reveal your true customer acquisition costs and lifetime value.",
      deliverables: [
        "Server-side tracking (CAPI) and cookieless measurement",
        "Multi-touch attribution models and blended ROAS dashboards",
        "Customer lifetime value (LTV) cohort analysis and forecasting",
        "Executive-ready BI dashboards reporting real bottom-line revenue",
      ],
      icon: Database,
      badge: "Data & Analytics",
    },
  ];

  return (
    <section id="growth-solutions" className="bg-[#f8fafc] text-slate-900 py-20 sm:py-28 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-[#f25f22] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Performance Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            How {leaderName} Scales Market Leaders
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From search dominance to algorithmic paid acquisition, our performance methodology transforms ambitious brands into category-defining leaders.
          </p>
        </div>

        {/* Executive Metric Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#f25f22] tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                {metric.label}
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Core Pillars: 2x2 Grid with Deep Craft */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = activePillar === idx;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActivePillar(idx)}
                className={`p-8 sm:p-10 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-[#f25f22]/40 shadow-xl ring-1 ring-[#f25f22]/20"
                    : "border-slate-200/90 shadow-xs hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Bar: Icon, Index, Category Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f25f22]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {pillar.badge}
                      </span>
                    </div>

                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {pillar.index}
                    </span>
                  </div>

                  {/* Pillar Heading */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold text-[#f25f22] uppercase tracking-wider mb-4">
                    {pillar.headline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {pillar.desc}
                  </p>

                  {/* Key Deliverables Checkpoints */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                      Core Strategic Levers:
                    </p>
                    {pillar.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#f25f22] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    Custom-engineered for enterprise scale
                  </span>
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#f25f22] hover:text-[#d44810] transition-colors cursor-pointer"
                  >
                    <span>Request Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Executive Callout Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Enterprise Growth Partnerships</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Ready to Outpace Competitors in Revenue and Traffic?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Partner with {leaderName} and our senior growth strategists. We analyze your digital footprint, identify untapped market share, and deliver a comprehensive growth blueprint.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-7 py-4 rounded-xl bg-[#f25f22] hover:bg-[#d44810] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-orange-500/20 cursor-pointer text-center active:scale-95"
            >
              Request Strategy Proposal
            </button>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer text-center"
              >
                Direct Contact
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
