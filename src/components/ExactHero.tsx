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
  profile,
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
    <section id="audit-section" className="bg-white pt-6 sm:pt-10 pb-10 sm:pb-14 relative overflow-hidden">
      {/* Background contour lines positioned relative to centered content so they stay gracefully aligned on wide desktop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-5xl mx-auto">
        <div className="absolute top-0 right-0 sm:-right-8 lg:right-4 w-72 sm:w-96 h-72 sm:h-96 opacity-20 sm:opacity-25">
          <svg viewBox="0 0 400 400" fill="none" className="w-full h-full text-slate-500 stroke-current">
            <path d="M 120 -50 C 220 50, 320 150, 450 100" strokeWidth="1.2" />
            <path d="M 90 -20 C 190 80, 290 180, 450 140" strokeWidth="1.2" />
            <path d="M 60 10 C 160 110, 260 210, 450 180" strokeWidth="1.2" />
            <path d="M 30 40 C 130 140, 230 240, 450 220" strokeWidth="1.2" />
            <path d="M 0 70 C 100 170, 200 270, 450 260" strokeWidth="1.2" />
            <path d="M -30 100 C 70 200, 170 300, 450 300" strokeWidth="1.2" />
            <path d="M -60 130 C 40 230, 140 330, 450 340" strokeWidth="1.2" />
            <path d="M -90 160 C 10 260, 110 360, 450 380" strokeWidth="1.2" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 text-center">
        {/* Main Headline matching screa 1.PNG */}
        <h1 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight leading-[1.25] text-center mb-3">
          <div className="flex justify-center">
            <span className="relative inline-block text-[#1a1a1a]">
              Let&apos;s Grow Your Business
              {/* Signature orange underline with rounded ends */}
              <span className="absolute left-0 -bottom-0.5 w-full h-[3.5px] bg-[#f25f22] rounded-full"></span>
            </span>
          </div>
          <span className="text-[#70757a] font-semibold">Through</span>
          <br />
          <span className="text-[#70757a] font-semibold">Digital Marketing.</span>
        </h1>

        {/* Step 1 subtitle in clean grey matching screa 1.PNG */}
        <p className="text-[15px] sm:text-[17px] text-[#70757a] font-normal mb-6 text-center">
          Step 1: Order your free bespoke SEO + AI Visibility Audit
        </p>

        {/* High-conversion Form: Vertical Stack of Input + Button matching screa 1.PNG */}
        <form onSubmit={handleSubmit} className="w-full mb-3">
          <div className="flex flex-col gap-3">
            <input
              ref={auditInputRef}
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Your Website URL"
              className="w-full px-4 py-3.5 sm:py-4 text-[15px] text-slate-800 placeholder:text-[#a0a0a0] bg-white border border-[#d1d5db] rounded-md focus:outline-none focus:border-[#f25f22] shadow-2xs font-normal"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 sm:py-4 px-6 text-[15px] font-extrabold tracking-wider uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] active:scale-[0.99] rounded-md shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                <span>ORDER FREE AUDIT</span>
              )}
            </button>
          </div>
        </form>

        {/* Starburst badge + hint matching screa 1.PNG */}
        <div className="flex items-center justify-center gap-2 text-[#666666] text-sm font-normal mb-2">
          {/* Orange 8-point star with radiating accent dots matching screa 1.PNG */}
          <svg className="w-5 h-5 text-[#f25f22] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.5l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" />
            <circle cx="12" cy="0.8" r="0.8" />
            <circle cx="21" cy="4.5" r="0.8" />
            <circle cx="23.2" cy="12" r="0.8" />
            <circle cx="21" cy="19.5" r="0.8" />
            <circle cx="12" cy="23.2" r="0.8" />
            <circle cx="3" cy="19.5" r="0.8" />
            <circle cx="0.8" cy="12" r="0.8" />
            <circle cx="3" cy="4.5" r="0.8" />
          </svg>
          <span>Manual teardown delivered directly to your email.</span>
        </div>
      </div>
    </section>
  );
};
