import React, { useState } from "react";
import { ProfileConfig } from "../types";
import { LegalTab } from "./LegalModal";
import { ToolType } from "./InteractiveToolsModal";
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Radio, 
  Sparkles, 
  Share2, 
  ShieldCheck, 
  Headphones,
  ArrowUpRight
} from "lucide-react";

interface ExactFooterProps {
  profile: ProfileConfig;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
  onOpenCustomizer?: () => void;
  onOpenLegal: (tab: LegalTab) => void;
  onOpenTool: (tool: ToolType) => void;
  onOpenCareers?: () => void;
  onFocusAudit?: () => void;
}

export const ExactFooter: React.FC<ExactFooterProps> = ({
  profile,
  onNavigate,
  onOpenConsultation,
  onOpenLegal,
}) => {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  const leaderName = profile?.name || "Muhammad Usman";
  const brandTitle = leaderName.replace(/\s+/g, "").toUpperCase();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
  };

  const handleCopyProfileLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const socialLinks = [
    {
      id: "linkedin",
      name: "LinkedIn",
      count: "380K+",
      url: "https://www.linkedin.com",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
    },
    {
      id: "youtube",
      name: "YouTube",
      count: "1.4M+",
      url: "https://www.youtube.com",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      id: "x",
      name: "X (Twitter)",
      count: "520K+",
      url: "https://x.com",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      name: "Instagram",
      count: "290K+",
      url: "https://www.instagram.com",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
    {
      id: "podcast",
      name: "Podcast",
      count: "Top 1%",
      url: "https://podcasts.apple.com",
      iconSvg: (
        <Headphones className="w-4 h-4" />
      ),
    },
  ];

  return (
    <footer className="bg-[#f25f22] text-white pt-16 sm:pt-20 pb-10 relative overflow-hidden">
      {/* Subtle architectural ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* MAIN THREE COLUMNS: Brand & Legal, Growth Platforms, Newsletter            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Executive Identity (md:col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate("home")}
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white hover:opacity-90 cursor-pointer text-left font-sans"
              >
                {brandTitle}
              </button>
              <span className="text-white/40 text-xl font-light">|</span>
              <span className="text-xs font-black tracking-wider px-2 py-0.5 rounded bg-white/15 text-white">
                EN
              </span>
            </div>

            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed font-normal">
              Enterprise organic search intelligence, predictive analytics, and performance growth infrastructure architected by {leaderName}.
            </p>

            {/* Legal Links Bar */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs text-white/95 font-medium pt-1">
              <button onClick={() => onOpenLegal("privacy")} className="hover:underline cursor-pointer">
                Privacy
              </button>
              <span className="text-white/40">•</span>
              <button onClick={() => onOpenLegal("ccpa")} className="hover:underline cursor-pointer">
                Do Not Sell My Info
              </button>
              <span className="text-white/40">•</span>
              <button onClick={() => onOpenLegal("terms")} className="hover:underline cursor-pointer">
                Terms of Service
              </button>
              <span className="text-white/40">•</span>
              <button onClick={() => onOpenLegal("cookies")} className="hover:underline cursor-pointer">
                Cookie Settings
              </button>
            </div>

            {/* High Contrast Accessibility Toggle */}
            <div className="flex items-center gap-2 text-xs text-white/90 pt-1">
              <input
                type="checkbox"
                id="high-contrast-footer"
                onChange={(e) => {
                  if (e.target.checked) {
                    document.documentElement.classList.add("contrast-125");
                  } else {
                    document.documentElement.classList.remove("contrast-125");
                  }
                }}
                className="w-4 h-4 rounded accent-slate-900 cursor-pointer"
              />
              <label htmlFor="high-contrast-footer" className="cursor-pointer select-none font-medium">
                High Contrast Accessibility
              </label>
            </div>

            {/* Copyright Guarantee & Discreet Admin Portal Link */}
            <div className="pt-2 text-xs text-white/75 font-normal flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-200" />
                <span>© {new Date().getFullYear()} {leaderName} &amp; Growlimo, LLC. All rights reserved.</span>
              </div>
              <span className="text-white/40 hidden sm:inline">•</span>
              <a
                href="#admin"
                className="text-white/70 hover:text-white underline decoration-white/30 text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                title="Muhammad Usman's Executive Admin Portal"
              >
                <span>Executive Admin</span>
              </a>
            </div>
          </div>

          {/* Column 2: GROWLIMO SOLUTIONS (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/80">
              GROWLIMO SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-white/95">
              <li>
                <button
                  onClick={() => onNavigate("growlimo")}
                  className="hover:underline cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Growlimo Performance Agency</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/20 uppercase">Global</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("growlimo")}
                  className="hover:underline cursor-pointer text-left flex items-center justify-between w-full"
                >
                  <span>Enterprise SEO &amp; AI Visibility</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("growlimo")}
                  className="hover:underline cursor-pointer text-left flex items-center justify-between w-full"
                >
                  <span>Performance Paid Media &amp; ROAS</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("growlimo")}
                  className="hover:underline cursor-pointer text-left flex items-center justify-between w-full"
                >
                  <span>Conversion Rate Optimization</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blog")}
                  className="hover:underline cursor-pointer text-left"
                >
                  Marketing Playbook &amp; Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:underline cursor-pointer text-left font-bold text-amber-200 flex items-center gap-1"
                >
                  <span>Work With {leaderName}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: NEWSLETTER & VIP BRIEFING (md:col-span-5) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/80">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>EXECUTIVE BRIEFING</span>
            </div>
            
            <p className="text-base sm:text-lg font-bold text-white">
              Stay Ahead of Algorithmic Changes
            </p>
            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
              Receive {leaderName}&apos;s weekly strategic breakdowns on Google Core updates, ChatGPT search citations, and enterprise acquisition models.
            </p>

            {/* Newsletter Input Form */}
            {subscribed ? (
              <div className="p-4 rounded-xl bg-white/20 border border-white/30 text-xs font-bold text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>You&apos;re subscribed! Welcome to {leaderName}&apos;s executive circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your executive email"
                    required
                    className="flex-1 min-w-0 px-4 py-3 text-xs sm:text-sm text-slate-900 bg-white rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xs"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-slate-950 hover:bg-black text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shrink-0 shadow-md active:scale-95"
                  >
                    Subscribe
                  </button>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2 text-[11px] text-white/85 leading-snug">
                  <input
                    type="checkbox"
                    id="newsletter-terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-3.5 h-3.5 rounded accent-slate-950 mt-0.5 cursor-pointer shrink-0"
                  />
                  <label htmlFor="newsletter-terms" className="cursor-pointer">
                    I agree to receive strategic marketing insights from {leaderName} and Growlimo. Unsubscribe at any time.
                  </label>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* AT THE END IN ONE LINE: PREMIUM SOCIAL PLUGIN HUB                         */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left: Follow Title & Verified Status */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-black text-white tracking-wide">
              Follow {leaderName} around the web
            </span>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[11px] font-bold text-orange-100">
              <Radio className="w-3 h-3 text-emerald-300 animate-pulse" />
              <span>Verified Channels</span>
            </div>
          </div>

          {/* Right: The Social Plugin in ONE Line */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
            {socialLinks.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#f25f22] border border-white/20 hover:border-white transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:-translate-y-0.5"
                title={`${platform.name} - ${platform.count}`}
              >
                <div className="transition-transform group-hover:scale-110">
                  {platform.iconSvg}
                </div>
                <span className="text-xs font-bold whitespace-nowrap">
                  {platform.name}
                </span>
                <span className="text-[10px] font-black opacity-80 group-hover:opacity-100 px-1.5 py-0.2 rounded bg-white/20 group-hover:bg-[#f25f22]/10 group-hover:text-[#f25f22] whitespace-nowrap">
                  {platform.count}
                </span>
              </a>
            ))}

            {/* Quick Share Link Action in the Same Line */}
            <button
              type="button"
              onClick={handleCopyProfileLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#f25f22] border border-white/20 hover:border-white transition-all duration-200 cursor-pointer shadow-2xs text-xs font-bold active:scale-95 whitespace-nowrap"
              title="Copy Profile Hub Link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300 group-hover:text-emerald-600" />
                  <span className="text-emerald-200">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
