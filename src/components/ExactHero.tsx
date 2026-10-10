import React, { useState } from "react";
import { ProfileConfig } from "../types";

interface ExactHeroProps {
  profile: ProfileConfig;
  onAnalyze: (url: string) => void;
  isLoading: boolean;
  auditInputRef: React.RefObject<HTMLInputElement | null>;
  onOrderAudit?: (url: string) => void;
}

export const ExactHero: React.FC<ExactHeroProps> = ({
  onAnalyze,
  isLoading,
  auditInputRef,
  onOrderAudit,
}) => {
  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = urlInput.trim();
    if (onOrderAudit) {
      onOrderAudit(target || "shopify.com");
    } else {
      onAnalyze(target || "shopify.com");
    }
  };

  return (
    <section 
      id="audit-section" 
      className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center justify-center pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-slate-950 font-sans"
    >
      {/* Background Image: Auditorium / Conference Stage */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-conference-bg.jpg"
          alt="Digital Marketing Keynote Conference"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.70] contrast-[1.1]"
        />
        {/* Layered dark gradients for maximum contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/65 to-slate-950/95" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Headline matching reference */}
        <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-white leading-[1.15] mb-5 sm:mb-6 max-w-4xl">
          Let’s grow{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 text-white">your business</span>
            {/* Signature orange rounded underline bar */}
            <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-[6px] sm:h-[10px] bg-[#ff5e29] rounded-full z-0 opacity-95"></span>
          </span>
          <br className="hidden sm:inline" />{" "}
          through digital marketing.
        </h1>

        {/* Subtitle matching reference */}
        <p className="text-sm sm:text-base lg:text-[18px] text-slate-200/95 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10 text-center">
          Drop in your URL to get a free read on how you show up on Google and in AI answers — plus, the exact moves to grow. The same tools being used by +5,000 brands.
        </p>

        {/* High-conversion Search Bar Pill matching reference */}
        <div className="w-full max-w-2xl mx-auto bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-2xl shadow-black/60 border border-white/20">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1 flex items-center">
              <input
                ref={auditInputRef}
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://www.yourwebsite.com"
                className="w-full px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-transparent outline-none font-medium"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-black tracking-wider uppercase text-white bg-[#ff5e29] hover:bg-[#e04f1e] active:scale-[0.99] rounded-lg sm:rounded-xl shadow-lg shadow-orange-600/30 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Analyzing...</span>
                </div>
              ) : (
                <span>START MY ANALYSIS</span>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
