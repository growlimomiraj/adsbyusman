import React, { useState } from "react";
import { AlertCircle, CheckCircle2, TrendingDown, DollarSign, Target, ShieldAlert, Award, ArrowRight } from "lucide-react";

interface GoogleAdsGraderPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const GoogleAdsGraderPage: React.FC<GoogleAdsGraderPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [monthlySpend, setMonthlySpend] = useState(15000);
  const [industry, setIndustry] = useState("B2B SaaS / Tech");
  const [analyzed, setAnalyzed] = useState(true);

  // Dynamic waste calculator
  const wastedMonthly = Math.round(monthlySpend * 0.26);
  const wastedAnnual = wastedMonthly * 12;

  return (
    <div className="bg-white text-slate-900 animate-in fade-in duration-300">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-900 via-slate-900 to-slate-900 text-white pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <button onClick={() => onNavigate("home")} className="hover:text-white cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#f25f22]">Google Ads Grader</span>
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
              Google Ads Grader
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Find out where you&apos;re wasting ad spend in minutes. Compare your account against thousands of top-performing Google Ads benchmarks.
            </p>
          </div>

          {/* Calculator Inputs */}
          <div className="max-w-2xl mx-auto bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Monthly Google Ad Spend
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Math.max(1000, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 font-bold text-slate-900 focus:outline-none focus:border-[#f25f22]"
                    step="1000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Industry / Category
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 font-semibold text-slate-900 bg-white focus:outline-none focus:border-[#f25f22]"
                >
                  <option>B2B SaaS / Tech</option>
                  <option>E-Commerce / Retail</option>
                  <option>Financial Services / Fintech</option>
                  <option>Healthcare &amp; Medtech</option>
                  <option>Professional Services &amp; Legal</option>
                </select>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Estimated Wasted Monthly Spend</span>
                <div className="text-2xl sm:text-3xl font-black text-amber-900 mt-0.5">
                  ${wastedMonthly.toLocaleString()} <span className="text-xs font-normal text-amber-700">/ mo (${wastedAnnual.toLocaleString()} / yr)</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#f25f22] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:bg-[#d94e14] transition-colors cursor-pointer shrink-0"
              >
                Recover This Spend →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Scorecard Breakdown */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Account Grade</span>
              <div className="text-6xl font-black text-amber-500 my-2">C+</div>
              <span className="text-xs font-bold text-slate-700">Score: 68 / 100</span>
              <p className="text-[11px] text-slate-500 mt-2">Trailing behind top 20% tier competitors</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Average Quality Score</span>
              <div className="text-6xl font-black text-[#f25f22] my-2">5.4<span className="text-xl font-normal text-slate-400">/10</span></div>
              <span className="text-xs font-bold text-red-600">Paying ~24% CPC Penalty</span>
              <p className="text-[11px] text-slate-500 mt-2">Ad copy relevance disconnected from landing page</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Negative Keyword Health</span>
              <div className="text-6xl font-black text-red-500 my-2">41%</div>
              <span className="text-xs font-bold text-red-600">High Leakage Risk</span>
              <p className="text-[11px] text-slate-500 mt-2">Broad match expansion triggering junk clicks</p>
            </div>
          </div>

          {/* Detailed Diagnostic Areas */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs">
            <h3 className="text-xl font-black text-slate-900 mb-6">Priority Fix Recommendations</h3>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-red-950">Add 200+ Negative Keywords Immediately</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-black uppercase">Critical Priority</span>
                  </div>
                  <p className="text-xs text-red-900/80 mt-1">
                    Your broad match search terms are capturing competitor login inquiries, free tool seekers, and non-commercial queries that drain ad budget without converting.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-amber-950">Deploy Value-Based Bidding (VBB) &amp; Offline CAPI</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase">High Impact</span>
                  </div>
                  <p className="text-xs text-amber-900/80 mt-1">
                    Google&apos;s smart bidding algorithms are optimizing for low-value volume rather than qualified pipeline revenue. Sync qualified CRM stages back to Google Ads.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-emerald-950">Responsive Search Ad (RSA) Asset Optimization</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">Verified Good</span>
                  </div>
                  <p className="text-xs text-emerald-900/80 mt-1">
                    Pinning strategies and diverse headline variations maintain Excellent ad strength rating across core transactional ad groups.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-bold text-slate-900">Want a Growlimo PPC Architect to review your actual account?</h5>
                <p className="text-xs text-slate-500">We will find at least 20% in immediate wasted spend or improve ROAS within 30 days.</p>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#f25f22] hover:bg-[#d94e14] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer shrink-0"
              >
                Schedule PPC Audit →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
