import React, { useState } from "react";
import { Globe, Menu, X, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { ProfileConfig } from "../types";

interface ExactHeaderProps {
  profile: ProfileConfig;
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
  onOpenCustomizer?: () => void;
}

export const ExactHeader: React.FC<ExactHeaderProps> = ({
  profile,
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = ["EN", "ES", "PT", "DE", "FR", "IT"];

  const navLinks = [
    { id: "growlimo", label: "Growlimo Agency" },
    { id: "blog", label: "Playbook & Blog" },
    { id: "about", label: "About Usman" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Group: MUHAMMAD USMAN by [GL] growlimo  |  EN */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={() => onNavigate("home")}
              className="flex flex-col group py-1 text-left cursor-pointer"
            >
              <span className="text-[19px] sm:text-[22px] font-extrabold tracking-tight text-[#f25f22] uppercase leading-none font-sans flex items-baseline">
                <span>USMAN</span>
                <span className="text-[#f25f22] font-black leading-none ml-0.5">.</span>
              </span>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-500 font-medium">
                <span className="text-[9px] text-slate-400">by</span>
                <span className="inline-flex items-center justify-center px-1 py-0.5 bg-white border border-[#f25f22] rounded-[3px] text-[8px] font-black text-[#f25f22] leading-none">
                  GL
                </span>
                <span className="font-bold text-slate-700 tracking-tight text-[10px] uppercase">growlimo</span>
              </div>
            </button>

            {/* Subtle Vertical Divider Line matching screa 1.PNG */}
            <div className="h-7 w-[1px] bg-slate-200 shrink-0 hidden sm:block" />

            {/* Language Selector: EN ∨ matching screa 1.PNG */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-[13px] font-semibold text-slate-600 hover:text-slate-900 cursor-pointer py-1 transition-colors"
                aria-label="Select Language"
              >
                <span>{selectedLang}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {langDropdownOpen && (
                <div className="absolute left-0 mt-2 w-28 bg-white rounded-lg shadow-xl border border-slate-100 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-bold hover:bg-orange-50 hover:text-[#f25f22] transition-colors ${
                        selectedLang === lang ? "text-[#f25f22] bg-orange-50/50" : "text-slate-700"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? "text-[#f25f22] bg-orange-50/70"
                    : "text-slate-700 hover:text-[#f25f22] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Orange CTA Button: Work With Us */}
            <button
              onClick={onOpenConsultation}
              className="ml-3 px-5 py-2.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Work With Us
            </button>
          </nav>

          {/* Right Mobile/Tablet Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-3.5 py-2 bg-[#f25f22] text-white font-bold text-xs uppercase tracking-wider rounded-md sm:inline-block"
            >
              Work With Us
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-md border border-slate-300 flex flex-col items-center justify-center gap-1 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer bg-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <>
                  <span className="w-5 h-[2px] bg-slate-900 rounded-full"></span>
                  <span className="w-5 h-[2px] bg-slate-900 rounded-full"></span>
                  <span className="w-5 h-[2px] bg-slate-900 rounded-full"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-4">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#f25f22]">
              Explore Muhammad Usman &amp; Growlimo
            </p>
            <nav className="flex flex-col space-y-2 text-sm font-bold text-slate-800">
              <button
                onClick={() => {
                  onNavigate("home");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-2 rounded-lg text-left cursor-pointer ${
                  currentPage === "home" ? "text-[#f25f22] bg-orange-50" : "hover:text-[#f25f22]"
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-2 rounded-lg text-left cursor-pointer ${
                    currentPage === link.id ? "text-[#f25f22] bg-orange-50" : "hover:text-[#f25f22]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#f25f22] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg text-center"
              >
                Request Free Marketing Proposal →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
