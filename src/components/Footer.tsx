import React from "react";
import { ProfileConfig } from "../types";
import { ArrowUp, Globe, Shield, Heart } from "lucide-react";

interface FooterProps {
  profile: ProfileConfig;
  onOpenConsultation: () => void;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenConsultation,
  onOpenCustomizer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-900">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                {profile.name}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#f25f22]"></span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {profile.company} is a global performance marketing agency that helps the world&apos;s leading brands scale organic search traffic, paid acquisition, and conversion rates.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#f25f22] hover:bg-[#d94e16] rounded-xl shadow-md transition-all cursor-pointer"
              >
                Work With Us
              </button>
              <button
                onClick={onOpenCustomizer}
                className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors"
              >
                Customize Portfolio
              </button>
            </div>
          </div>

          {/* Col 2: Services & Agency */}
          <div className="space-y-3">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#f25f22]">
              Agency Services
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Paid Search & Social Ads
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Conversion Rate Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Content Marketing & Viral SEO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Social & Executive Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Data & Attribution Modeling
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Free Tools */}
          <div className="space-y-3">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#f25f22]">
              Free Marketing Tools
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Ubersuggest Keyword Finder
                </a>
              </li>
              <li>
                <a href="#audit-results" className="hover:text-white transition-colors">
                  SEO Website Analyzer
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  AI Viral Headline Crafter
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Competitor Traffic Estimator
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Backlink Authority Checker
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Guides */}
          <div className="space-y-3">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#f25f22]">
              Resources & Insights
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Marketing School Podcast
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  SEO in 2026 Playbook
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About {profile.name}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-white text-left transition-colors"
                >
                  Contact Strategists
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Locations, Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5" /> Global Offices: San Diego, New York, London, São Paulo, Bengaluru, Sydney
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {profile.company}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
