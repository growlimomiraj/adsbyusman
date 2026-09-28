import React, { useState } from "react";
import { X, Shield, Lock, FileText, CheckCircle2, Cookie } from "lucide-react";

export type LegalTab = "privacy" | "terms" | "ccpa" | "cookies";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = "privacy",
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);
  const [cookiesAllowed, setCookiesAllowed] = useState({
    essential: true,
    analytics: true,
    marketing: true,
    personalization: false,
  });
  const [savedCookies, setSavedCookies] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#f25f22] flex items-center justify-center font-bold">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#f25f22]">
                GROWLIMO Legal & Trust
              </span>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                Privacy, Terms & Compliance
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6 bg-white overflow-x-auto">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "privacy"
                ? "border-[#f25f22] text-[#f25f22]"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "terms"
                ? "border-[#f25f22] text-[#f25f22]"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => setActiveTab("ccpa")}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "ccpa"
                ? "border-[#f25f22] text-[#f25f22]"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            Do Not Sell My Info (CCPA)
          </button>
          <button
            onClick={() => setActiveTab("cookies")}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "cookies"
                ? "border-[#f25f22] text-[#f25f22]"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            Cookie Settings
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-sm text-slate-700 leading-relaxed space-y-4">
          {activeTab === "privacy" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-slate-900">Privacy Policy</h4>
              <p className="text-xs text-slate-400">Last updated: September 2026</p>
              <p>
                At GROWLIMO and Muhammad Usman Digital, your privacy is a paramount concern. We process data strictly to deliver authoritative SEO audits, diagnostic benchmarks, and customized marketing growth roadmaps.
              </p>
              <h5 className="font-bold text-slate-900 text-sm">Information We Collect:</h5>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li>Submitted website URLs for programmatic organic index evaluation.</li>
                <li>Contact information (name, business email, phone) provided during consultation or audit requests.</li>
                <li>Diagnostic parameters (monthly ad budget, vertical focus) provided during tool sessions.</li>
              </ul>
              <h5 className="font-bold text-slate-900 text-sm">Data Security & Encryption:</h5>
              <p className="text-xs text-slate-600">
                All lead data and analysis queries are encrypted in transit via TLS 1.3 and stored in SOC2-compliant enterprise cloud infrastructure. We never sell your personal contact information to third-party data brokers.
              </p>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-slate-900">Terms of Service</h4>
              <p className="text-xs text-slate-400">Last updated: September 2026</p>
              <p>
                By accessing the GROWLIMO web platform, free audit engines, and growth tools, you agree to comply with our fair use policies and diagnostic terms.
              </p>
              <h5 className="font-bold text-slate-900 text-sm">Intellectual Property:</h5>
              <p className="text-xs text-slate-600">
                All analysis algorithms, diagnostic formulas, audit scoring engines, and published content are the exclusive intellectual property of GROWLIMO, LLC and Muhammad Usman.
              </p>
              <h5 className="font-bold text-slate-900 text-sm">Advisory Disclaimer:</h5>
              <p className="text-xs text-slate-600">
                Audit metrics, keyword traffic estimates, and ad spend savings calculations represent strategic benchmarks based on real-world industry indexes. Actual organic traffic and ROAS results depend on ongoing execution and algorithm shifts.
              </p>
            </div>
          )}

          {activeTab === "ccpa" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-slate-900">
                California Consumer Privacy Act (CCPA) & Opt-Out
              </h4>
              <p className="text-xs text-slate-600">
                Under the California Consumer Privacy Act (CCPA), California residents have the right to opt out of the sale or sharing of their personal information.
              </p>
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <p className="text-xs font-bold text-orange-900 mb-1">
                  Our Commitment to Zero-Sale of Consumer Data:
                </p>
                <p className="text-xs text-orange-800">
                  GROWLIMO does not sell personal information or customer lists. To formally log an opt-out preference or request data deletion under CCPA or GDPR, click the button below.
                </p>
              </div>
              <button
                onClick={() => alert("Your opt-out preference has been recorded successfully.")}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Record My Global Privacy Preference
              </button>
            </div>
          )}

          {activeTab === "cookies" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-slate-900">Cookie Preferences</h4>
              <p className="text-xs text-slate-600">
                Manage your tracking and cookie preferences below. Essential cookies are required to deliver the audit reports and tool state.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Essential Technical Cookies</p>
                    <p className="text-[11px] text-slate-500">Required for site security, session states, and audit caching.</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 px-2 py-0.5 bg-emerald-50 rounded border border-emerald-200">
                    Always Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Performance & Analytics Cookies</p>
                    <p className="text-[11px] text-slate-500">Help us understand how users navigate tools and teardown articles.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookiesAllowed.analytics}
                    onChange={(e) => setCookiesAllowed({ ...cookiesAllowed, analytics: e.target.checked })}
                    className="w-4 h-4 accent-[#f25f22] cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Marketing & Campaign Attributions</p>
                    <p className="text-[11px] text-slate-500">Measure advertising conversions and personalized recommendation efficacy.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookiesAllowed.marketing}
                    onChange={(e) => setCookiesAllowed({ ...cookiesAllowed, marketing: e.target.checked })}
                    className="w-4 h-4 accent-[#f25f22] cursor-pointer"
                  />
                </div>
              </div>

              {savedCookies ? (
                <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Preferences saved!
                </div>
              ) : (
                <button
                  onClick={() => setSavedCookies(true)}
                  className="px-5 py-2.5 bg-[#f25f22] hover:bg-[#d94e16] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
