import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Globe, Sparkles } from "lucide-react";
import { ProfileConfig } from "../../types";

interface ContactPageProps {
  profile: ProfileConfig;
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ profile, onNavigate }) => {
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("$10,000 - $25,000 / mo");
  const [goal, setGoal] = useState("Enterprise SEO & Organic Growth");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!website || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 animate-in fade-in duration-300">
      <section className="bg-gradient-to-b from-slate-50 via-white to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button onClick={() => onNavigate("home")} className="hover:text-[#f25f22] cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#f25f22]">Work With Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 text-[#f25f22] text-xs font-black uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Scale Your Marketing Pipeline
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Work With <span className="text-[#f25f22]">Growlimo</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Ready to outrank your competitors and accelerate your digital revenue? Fill out the form and a senior growth director will conduct an initial teardown of your website and present a customized strategy roadmap.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-orange-50 text-[#f25f22] flex items-center justify-center font-black text-xs shrink-0">
                    24h
                  </div>
                  <span>Fast guaranteed 24-hour turnaround on custom proposals</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xs shrink-0">
                    ✓
                  </div>
                  <span>Direct analysis by seasoned senior directors, not junior reps</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs shrink-0">
                    $0
                  </div>
                  <span>100% free with no obligation to sign</span>
                </div>
              </div>
            </div>

            {/* Proposal Submission Form */}
            <div className="lg:col-span-6">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-7 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Proposal Request Confirmed</h3>
                    <p className="text-sm text-slate-600 mb-6">
                      Thank you! A Growlimo Senior Growth Specialist has received your website details and will deliver your custom marketing audit and proposal within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#f25f22] text-white text-xs font-bold uppercase rounded-lg"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Website URL *</label>
                      <input
                        type="text"
                        required
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="yourcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#f25f22]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#f25f22]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@yourcompany.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#f25f22]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#f25f22]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Monthly Ad / Marketing Budget</label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#f25f22]"
                        >
                          <option>$5,000 - $10,000 / mo</option>
                          <option>$10,000 - $25,000 / mo</option>
                          <option>$25,000 - $50,000 / mo</option>
                          <option>$50,000 - $100,000 / mo</option>
                          <option>$100,000+ / mo (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Primary Growth Focus</label>
                      <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#f25f22]"
                      >
                        <option>Enterprise SEO &amp; Organic Search</option>
                        <option>Paid Search &amp; Performance Social Ads</option>
                        <option>Conversion Rate Optimization (CRO)</option>
                        <option>Enterprise Content Marketing &amp; Digital PR</option>
                        <option>GA4 &amp; Modern Data Warehousing</option>
                        <option>Full-Service Integrated Retainer</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer mt-2"
                    >
                      Request My Free Proposal →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
