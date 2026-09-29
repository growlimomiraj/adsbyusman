import React, { useState } from "react";
import { X, Check, RotateCcw, User, Mail, Briefcase, Building, Sparkles } from "lucide-react";
import { ProfileConfig } from "../types";
import { defaultProfile } from "../data/marketingData";

interface PortfolioCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileConfig;
  onSaveProfile: (newProfile: ProfileConfig) => void;
}

export const PortfolioCustomizerModal: React.FC<PortfolioCustomizerModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  const [formData, setFormData] = useState<ProfileConfig>({ ...profile });

  if (!isOpen) return null;

  const handleApplyPreset = (type: "usman" | "custom") => {
    if (type === "usman") {
      setFormData({ ...defaultProfile });
    } else {
      setFormData({
        name: "Khalid Miraj",
        company: "KM Growth Agency",
        title: "Digital Growth Marketer, SEO Specialist & Acquisition Consultant",
        email: "khalidmiraj413@gmail.com",
        phone: "+1 (800) 555-0199",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        tagline: "Helping companies generate millions of visitors and turn clicks into recurring revenue.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f25f22] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Portfolio Personalization
          </div>
          <h3 className="text-2xl font-black text-slate-950">
            Customize Portfolio Identity
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Switch between Muhammad Usman (GROWLIMO) or personalize with your custom agency name, title, and contact details.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => handleApplyPreset("usman")}
            className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
              formData.name === "MUHAMMAD USMAN"
                ? "bg-orange-50 border-[#f25f22] text-[#f25f22] ring-2 ring-orange-200"
                : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
            }`}
          >
            <p className="font-extrabold text-sm">Muhammad Usman</p>
            <p className="text-[11px] font-normal text-slate-500">GROWLIMO Agency style</p>
          </button>

          <button
            type="button"
            onClick={() => handleApplyPreset("custom")}
            className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
              formData.name !== "MUHAMMAD USMAN"
                ? "bg-orange-50 border-[#f25f22] text-[#f25f22] ring-2 ring-orange-200"
                : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
            }`}
          >
            <p className="font-extrabold text-sm">Personalized Mode</p>
            <p className="text-[11px] font-normal text-slate-500">Custom personal branding</p>
          </button>
        </div>

        {/* Custom Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Name (Displayed in Header & Logo)
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Company / Agency Name
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Headline Title & Subtitle
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Contact Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">
                Muhammad Usman Sticky Photo (Official Google Office)
              </label>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                Permanent Disk Replacement
              </span>
            </div>

            {/* Permanent Photo Preview & 1-Click Replace */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#f25f22] bg-slate-900 shrink-0 shadow-xs">
                <img
                  src={`/usman_google.jpg?t=${Date.now()}`}
                  alt="Muhammad Usman"
                  className="w-full h-full object-cover object-[center_20%]"
                  onError={(e) => {
                    e.currentTarget.src = "/usman.png";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f25f22] hover:bg-[#d94e16] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-xs">
                  <span>Replace With Your Google Office Photo...</span>
                  <input
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
                              const res = await fetch("/api/upload-usman-photo", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ imageBase64: base64Url }),
                              });
                              if (res.ok) {
                                window.location.reload();
                              }
                            } catch (err) {
                              console.error("Failed to upload photo", err);
                            }
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
                <p className="text-[10px] text-slate-500 mt-1">
                  Click above to choose your IMG_1655 image. It will permanently replace /usman.png on the server and reload.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleApplyPreset("usman")}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Muhammad Usman</span>
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#f25f22] hover:bg-[#d94e16] text-white text-xs font-black uppercase tracking-wide shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Save & Update Site</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
