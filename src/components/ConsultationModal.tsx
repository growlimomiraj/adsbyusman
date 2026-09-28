import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, Building2 } from "lucide-react";
import { ProfileConfig } from "../types";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileConfig;
  initialUrl?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  profile,
  initialUrl = "",
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [revenue, setRevenue] = useState("");
  const [goal, setGoal] = useState("");
  const [website, setWebsite] = useState(initialUrl);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(profile.email || "");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ referenceId: string; message: string } | null>(null);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save lead locally to admin portal pipeline
    try {
      const newLeadObj = {
        id: `LD-${Math.floor(10000 + Math.random() * 90000)}`,
        name: fullName || "Prospect Client",
        email,
        phone: phone || "",
        website: website || "domain.com",
        revenue: revenue || "$1M - $5M / yr",
        budget: "$10k - $25k / mo",
        goal: goal || "Organic Search & Customer Acquisition Scale",
        source: "Consultation Modal",
        status: "New",
        score: 92,
        dealValueEst: 20000,
        notes: "Inbound discovery lead submitted via growth proposal request.",
        createdAt: new Date().toISOString(),
        country: "United Arab Emirates",
      };
      const existing = localStorage.getItem("growlimo_portal_leads");
      const currentList = existing ? JSON.parse(existing) : [];
      localStorage.setItem("growlimo_portal_leads", JSON.stringify([newLeadObj, ...currentList]));
    } catch (saveErr) {
      console.warn("Could not save to portal leads", saveErr);
    }

    try {
      const res = await fetch("/api/lead-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          website,
          revenue,
          goal,
        }),
      });
      const data = await res.json();
      setSubmittedData({
        referenceId: data.referenceId || "GL-849201",
        message: data.message || "Your growth proposal request has been received!",
      });
    } catch (err) {
      console.error(err);
      setSubmittedData({
        referenceId: "GL-849201",
        message: "Your proposal request has been received!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedData ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-950">
              Proposal Request Confirmed!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {submittedData.message}
            </p>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 inline-block text-xs font-mono font-bold text-slate-700">
              Reference ID: {submittedData.referenceId}
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3 text-sm font-extrabold text-white bg-[#f25f22] hover:bg-[#d94e16] rounded-xl shadow-md transition-all cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
                <span>Step {step} of 4</span>
                <span className="text-[#f25f22]">{step * 25}% Complete</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-[#f25f22] transition-all duration-300 rounded-full"
                  style={{ width: `${step * 25}%` }}
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Work With {profile.company}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us about your business to receive a customized growth roadmap and revenue audit.
              </p>
            </div>

            {/* Step 1: Revenue */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-800">
                  What is your company&apos;s current annual or monthly revenue?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Pre-revenue / Startup (<$50K/yr)",
                    "$50K - $250K / year",
                    "$250K - $1M / year",
                    "$1M - $10M+ / year (Enterprise)",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setRevenue(option);
                        handleNext();
                      }}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        revenue === option
                          ? "bg-orange-50 border-[#f25f22] text-[#f25f22] ring-2 ring-orange-200"
                          : "bg-slate-50 border-slate-200 hover:border-orange-300 text-slate-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Primary Goal */}
            {step === 2 && (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-800">
                  What is your primary growth goal for the next 12 months?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Explosive Organic SEO Traffic",
                    "Profitable Paid Media Scaling (ROAS)",
                    "Conversion Rate Optimization (CRO)",
                    "Full-Service Digital Marketing Agency",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setGoal(option);
                        handleNext();
                      }}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        goal === option
                          ? "bg-orange-50 border-[#f25f22] text-[#f25f22] ring-2 ring-orange-200"
                          : "bg-slate-50 border-slate-200 hover:border-orange-300 text-slate-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Website URL */}
            {step === 3 && (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-800">
                  What website URL would you like our strategists to audit?
                </label>
                <input
                  type="text"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="e.g. yourcompany.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 font-semibold text-base focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
                />
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!website.trim()}
                    className="px-5 py-2.5 bg-[#f25f22] hover:bg-[#d94e16] disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-md cursor-pointer"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information & Submit */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@yourcompany.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (Optional for SMS proposal summary)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-1234"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 text-xs text-orange-900 font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#f25f22] shrink-0" />
                  <span>We sign strict NDAs upon request. Your data is 100% confidential.</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !fullName || !email}
                    className="px-6 py-3 bg-[#f25f22] hover:bg-[#d94e16] disabled:opacity-50 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg cursor-pointer flex items-center gap-2"
                  >
                    {isSubmitting ? "Generating Proposal..." : "Request Growth Proposal"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
