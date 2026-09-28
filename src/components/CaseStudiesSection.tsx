import React, { useState } from "react";
import { ArrowUpRight, TrendingUp, CheckCircle, Quote, Sparkles } from "lucide-react";
import { caseStudiesData } from "../data/marketingData";
import { CaseStudy } from "../types";

interface CaseStudiesSectionProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeCase, setActiveCase] = useState<CaseStudy>(caseStudiesData[0]);

  return (
    <section id="case-studies" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f25f22] text-xs font-bold uppercase tracking-wider mb-3">
            Real Client Proof & Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            We Generate Millions in Traffic. <br />
            <span className="text-[#f25f22]">Here Are The Receipts.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how our tailored technical SEO audits, aggressive link acquisition, and high-converting paid media funnels drive transformative growth.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {caseStudiesData.map((study) => {
            const isSelected = activeCase.id === study.id;
            return (
              <button
                key={study.id}
                onClick={() => setActiveCase(study)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                    : "bg-slate-50 text-slate-800 border-slate-200 hover:border-orange-300 hover:bg-orange-50/20"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-[#f25f22] text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {study.tag}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isSelected ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {study.client}
                  </span>
                </div>
                <h4 className="font-bold text-base line-clamp-2 leading-snug">
                  {study.headline}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Active Case Study Box */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#f25f22]">
                {activeCase.industry}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-1 mb-4 leading-tight">
                {activeCase.headline}
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {activeCase.summary}
              </p>
            </div>

            {/* Verifiable Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeCase.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {metric.label}
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-slate-950">
                    {metric.value}
                  </p>
                  <div className="flex items-center gap-1 text-emerald-600 font-extrabold text-sm mt-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{metric.increase} Growth</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h5 className="text-sm font-black uppercase tracking-wider text-rose-600 mb-2">
                  The Core Challenge
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h5 className="text-sm font-black uppercase tracking-wider text-emerald-600 mb-2">
                  The GROWLIMO Playbook
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* Client Quote Card */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <Quote className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-800/60 pointer-events-none" />
              <p className="text-base sm:text-lg italic text-slate-200 leading-relaxed mb-4 relative z-10">
                &ldquo;{activeCase.quote}&rdquo;
              </p>
              <div className="relative z-10">
                <p className="font-extrabold text-white text-base">
                  {activeCase.author}
                </p>
                <p className="text-xs text-orange-400 font-semibold">
                  {activeCase.role}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] active:scale-98 rounded-full shadow-lg shadow-orange-500/30 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Scale Your Revenue Like This</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
