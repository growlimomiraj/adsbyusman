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

  const countries = [
    "United States",
    "Canada",
    "Brazil",
    "India",
    "Australia",
    "United Kingdom",
    "Japan",
    "Malaysia",
    "Germany",
    "Hong Kong",
    "Singapore",
    "France",
    "Italy",
    "Netherlands",
    "Spain",
    "Argentina",
    "Chile",
    "Colombia",
    "Mexico",
  ];

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
        <div className="flex items-center justify-center gap-2 text-[#666666] text-sm font-normal mb-14 sm:mb-16">
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

        {/* Meet My Award-Winning Global Ad Agency Section matching screan2.PNG */}
        <div id="agency-section" className="pt-2 pb-0">
          <p className="text-[#f25f22] text-[16px] sm:text-[18px] font-semibold tracking-normal mb-1 text-center">
            Meet My Award-Winning
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#223544] tracking-tight mb-5 text-center">
            Global Ad Agency
          </h2>

          {/* Worldwide Locations List exactly matching screan2.PNG */}
          <div className="text-[13px] sm:text-[14px] text-[#6b7280] leading-relaxed mb-8 text-center space-y-1 font-normal">
            <p>United States • Canada • Brazil • India • Australia •</p>
            <p>United Kingdom • Japan • Malaysia • Germany •</p>
            <p>Hong Kong • Singapore • France • Italy •</p>
            <p>Netherlands • Spain • Argentina • Chile •</p>
            <p>Colombia • Mexico</p>
          </div>

          {/* Growlimo Agency Executive Showcase - Unified Mobile & Desktop Centered Stacked Layout */}
          <div className="relative w-full max-w-2xl mx-auto my-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-[#fbfcfe] to-[#f4f7fa] shadow-xl">
            {/* Subtle top accent line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#f25f22] via-[#ff783e] to-[#3b7cb5]" />

            <div className="relative px-6 sm:px-10 py-8 sm:py-10 flex flex-col items-center text-center gap-8">
              
              {/* Brand Identity & Executive Title */}
              <div className="flex flex-col items-center z-10 space-y-4 w-full">
                {/* Brandmark Header */}
                <div className="flex items-center justify-center gap-3.5">
                  {/* High-definition rounded brand logo */}
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl border-[3.5px] border-[#f25f22] flex items-center justify-center bg-white shadow-md shadow-orange-500/10 shrink-0">
                    <span className="text-[#f25f22] font-black text-xl sm:text-2xl tracking-tight select-none">
                      GL
                    </span>
                  </div>

                  {/* Brand Typography */}
                  <div className="flex flex-col text-left select-none">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase leading-none font-sans">
                      GROWLIMO
                    </h2>
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] text-[#3b7cb5] uppercase mt-1 leading-none">
                      PERFORMANCE AGENCY
                    </span>
                  </div>
                </div>

                {/* Executive Bio & Agency Mission */}
                <div className="space-y-2 max-w-lg mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50/80 border border-orange-200/60 text-[#f25f22] text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#f25f22] animate-pulse"></span>
                    <span>Executive Leadership</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    Muhammad Usman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Founder &amp; Chief Growth Officer directing global search acquisition, high-ROI paid media infrastructure, and enterprise revenue growth for world-class brands.
                  </p>
                </div>
              </div>

              {/* High-End Executive Portrait Presentation with Sticky Presence */}
              <div className="shrink-0 z-10 w-full flex justify-center sticky top-24 self-start">
                {/* Ambient glow behind portrait */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#f25f22]/30 via-orange-200/40 to-blue-200/40 rounded-3xl blur-lg opacity-80 pointer-events-none" />

                {/* Portrait Frame Container: Static, Locked, and Unchangeable */}
                <div className="relative w-72 sm:w-84 md:w-96 h-[440px] sm:h-[490px] rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200/90 shadow-2xl flex flex-col justify-end select-none group">
                  {/* Hidden file input specifically to load your Google office image */}
                  <input
                    id="hero-photo-direct-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = async (event) => {
                          const base64Url = event.target?.result as string;
                          if (base64Url) {
                            try {
                              await fetch("/api/upload-usman-photo", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ imageBase64: base64Url }),
                              });
                            } catch (err) {
                              console.error(err);
                            }
                            try {
                              const saved = localStorage.getItem("growlimo_profile_config");
                              const curr = saved ? JSON.parse(saved) : {};
                              curr.avatarUrl = base64Url;
                              localStorage.setItem("growlimo_profile_config", JSON.stringify(curr));
                            } catch (err) {}
                            window.location.reload();
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />

                  {/* Muhammad Usman Photo with High-Definition Rendering */}
                  <img
                    src={profile.avatarUrl || "/usman.png"}
                    alt="Muhammad Usman"
                    loading="eager"
                    decoding="async"
                    style={{
                      imageRendering: "crisp-edges",
                      filter: "contrast(1.04) brightness(1.02)",
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                    }}
                    referrerPolicy="no-referrer"
                  />

                  {/* Clean, subtle photo update button in top-left */}
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("hero-photo-direct-upload");
                      if (el) el.click();
                    }}
                    className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white text-[11px] font-bold border border-white/20 hover:border-[#f25f22] backdrop-blur-md shadow-lg flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
                    title="Click to select your photo file"
                  >
                    <span>📷</span>
                    <span>Upload Your Photo</span>
                  </button>

                  {/* Subtle Google Partner Badge */}
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold flex items-center gap-1.5 shadow-lg select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>Google Certified</span>
                  </div>

                  {/* Gradient shadow overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent pointer-events-none" />

                  {/* Executive Nameplate Bar */}
                  <div className="relative z-20 m-3.5 sm:m-4 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center justify-between pointer-events-none text-left">
                    <div>
                      <div className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight leading-tight">
                        Muhammad Usman
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-[#f25f22] tracking-wide mt-0.5 leading-tight">
                        Founder &amp; Chief Growth Officer
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 pl-2.5 border-l border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wider">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Executive Credibility Metrics in Unified Grid */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-2 w-full max-w-lg border-t border-slate-200/70">
                <div className="bg-white/80 border border-slate-200/60 rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                  <div className="text-base sm:text-xl font-black text-slate-900">100M+</div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Organic Clicks</div>
                </div>
                <div className="bg-white/80 border border-slate-200/60 rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                  <div className="text-base sm:text-xl font-black text-[#f25f22]">$45M+</div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Revenue Built</div>
                </div>
                <div className="bg-white/80 border border-slate-200/60 rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                  <div className="text-base sm:text-xl font-black text-[#3b7cb5]">18+</div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Global Markets</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
