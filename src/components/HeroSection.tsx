import React, { useState } from "react";
import { Search, Globe, ArrowRight, Award, TrendingUp, CheckCircle2, Zap } from "lucide-react";
import { ProfileConfig } from "../types";
import { sampleDomains } from "../data/marketingData";

interface HeroSectionProps {
  profile: ProfileConfig;
  onAnalyze: (url: string) => void;
  isLoading: boolean;
  auditInputRef: React.RefObject<HTMLInputElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onAnalyze,
  isLoading,
  auditInputRef,
}) => {
  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    onAnalyze(urlInput);
  };

  const handleSelectSample = (sampleUrl: string) => {
    setUrlInput(sampleUrl);
    onAnalyze(sampleUrl);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Iconic Copy & Audit Bar */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-slate-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <Zap className="w-4 h-4 text-[#f25f22] fill-current" />
              <span>Free Instant Website & SEO Audit Engine</span>
            </div>

            {/* Iconic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1] mb-6">
              Do you want <br className="hidden sm:inline" />
              <span className="text-[#f25f22] underline decoration-orange-300 decoration-wavy decoration-2 underline-offset-8">
                more traffic?
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              If you want to grow your business with SEO, paid advertising, and high-converting content, enter your website URL below to get an instant analysis and tailored growth roadmap.
            </p>

            {/* The Muhammad Usman Audit Bar */}
            <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-200/80 max-w-2xl mx-auto lg:mx-0 mb-5">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1 flex items-center">
                  <Globe className="absolute left-3.5 w-5 h-5 text-slate-400" />
                  <input
                    ref={auditInputRef}
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Enter your website URL (e.g. yoursite.com)"
                    className="w-full pl-11 pr-4 py-3.5 text-base sm:text-lg font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50 hover:bg-slate-100/80 focus:bg-white rounded-xl border border-transparent focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3.5 sm:py-0 text-sm sm:text-base font-extrabold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] active:scale-98 rounded-xl shadow-md shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap min-w-[190px]"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Auditing...</span>
                    </>
                  ) : (
                    <>
                      <span>Analyze Website</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Preset Samples */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-600 mb-6">
              <span className="font-semibold text-slate-500">Or test a top brand:</span>
              {sampleDomains.slice(0, 4).map((sample) => (
                <button
                  key={sample.url}
                  onClick={() => handleSelectSample(sample.url)}
                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-[#f25f22] hover:border-orange-200 border border-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  {sample.name} ({sample.url})
                </button>
              ))}
            </div>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Free Instant Analysis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Actionable 30-Day Growth Plan</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Portrait & Floating Accolade Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Glowing circular halo */}
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square rounded-full p-3 bg-gradient-to-tr from-[#f25f22] via-orange-400 to-amber-300 shadow-2xl shadow-orange-500/20 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-900 relative shadow-inner">
                {/* Authentic Expert Portrait */}
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay at bottom for name badge */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent pt-8 pb-4 px-4 text-center">
                  <p className="text-white font-black text-lg tracking-wide uppercase">
                    {profile.name}
                  </p>
                  <p className="text-orange-300 text-xs font-medium">
                    {profile.company} Founder
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Metric 1 (Top Left) */}
            <div className="absolute -top-3 -left-2 sm:top-2 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f25f22] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Monthly Readers</p>
                <p className="text-base font-extrabold text-slate-950">3,000,000+</p>
              </div>
            </div>

            {/* Floating Metric 2 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">The Wall Street Journal</p>
                <p className="text-sm font-extrabold text-slate-950">Top Web Influencer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
