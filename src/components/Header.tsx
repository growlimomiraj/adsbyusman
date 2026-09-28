import React, { useState } from "react";
import { Sparkles, Globe, Menu, X, ArrowRight, UserCheck, ShieldCheck } from "lucide-react";
import { ProfileConfig } from "../types";

interface HeaderProps {
  profile: ProfileConfig;
  onOpenConsultation: () => void;
  onOpenCustomizer: () => void;
  onFocusAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenConsultation,
  onOpenCustomizer,
  onFocusAudit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = ["EN", "ES", "PT", "DE", "FR", "IT"];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* Top Announcement Bar - signature Growlimo look */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f25f22] text-white tracking-wide">
              AGENCY
            </span>
            <span className="hidden sm:inline text-slate-300">
              Work with our award-winning agency:
            </span>
            <span className="font-semibold text-white">GROWLIMO</span>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1 text-[#f25f22] hover:text-orange-400 font-semibold underline underline-offset-2 ml-1 cursor-pointer transition-colors"
            >
              Get a Proposal <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            {/* Language dropdown */}
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <div className="flex gap-1">
                {languages.slice(0, 4).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={`px-1 rounded font-medium transition-colors ${
                      selectedLang === lang
                        ? "text-white font-bold bg-slate-800"
                        : "hover:text-white"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <span className="hidden md:inline text-slate-600">|</span>

            {/* Quick Profile Mode Switcher */}
            <button
              onClick={onOpenCustomizer}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700"
              title="Customize Portfolio Identity"
            >
              <UserCheck className="w-3 h-3 text-[#f25f22]" />
              <span>Customize Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-baseline group">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors uppercase flex items-baseline">
                <span>USMAN</span>
                <span className="text-[#f25f22] font-black leading-none ml-0.5">.</span>
              </span>
            </a>
            {profile.name !== "MUHAMMAD USMAN" && (
              <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-semibold bg-orange-50 text-[#f25f22] border border-orange-200 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Personalized
              </span>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a
              href="#services"
              className="hover:text-[#f25f22] transition-colors"
            >
              Services & Agency
            </a>
            <a
              href="#tools"
              className="hover:text-[#f25f22] transition-colors flex items-center gap-1"
            >
              Free Tools
              <span className="text-[10px] uppercase font-extrabold bg-[#f25f22]/10 text-[#f25f22] px-1.5 py-0.2 rounded-sm">
                AI
              </span>
            </a>
            <a
              href="#case-studies"
              className="hover:text-[#f25f22] transition-colors"
            >
              Results & Proof
            </a>
            <a
              href="#about"
              className="hover:text-[#f25f22] transition-colors"
            >
              About
            </a>
            <a
              href="#insights"
              className="hover:text-[#f25f22] transition-colors"
            >
              Guides & Podcast
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onFocusAudit}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              Free Audit
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] active:scale-98 rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Do You Want More Traffic?</span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#f25f22]"
            >
              Services & Agency
            </a>
            <a
              href="#tools"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#f25f22]"
            >
              Free Tools (Ubersuggest)
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#f25f22]"
            >
              Case Studies & Proof
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#f25f22]"
            >
              About {profile.name}
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#f25f22]"
            >
              Guides & Podcast
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-sm font-bold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] rounded-full shadow-md"
            >
              Do You Want More Traffic?
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#f25f22]" /> Customize
              Portfolio Details
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
