import React, { useState } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Search, BarChart3, Target, Share2, Award, Globe, Users, Building2 } from "lucide-react";
import { ProfileConfig } from "../../types";

interface GrowlimoAgencyPageProps {
  profile: ProfileConfig;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const GrowlimoAgencyPage: React.FC<GrowlimoAgencyPageProps> = ({
  profile,
  onNavigate,
  onOpenConsultation,
}) => {
  const [formUrl, setFormUrl] = useState("");
  const [formBudget, setFormBudget] = useState("$10k - $25k / mo");
  const [formGoal, setFormGoal] = useState("Enterprise SEO & Organic Growth");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formUrl.trim()) return;
    setFormSubmitted(true);
  };

  const agencyStats = [
    { number: "1,000+", label: "Global Marketers", icon: Users },
    { number: "19", label: "Global Offices", icon: Globe },
    { number: "4.8x", label: "Average Client ROAS", icon: TrendingUp },
    { number: "250M+", label: "Monthly Visits Generated", icon: BarChart3 },
  ];

  const servicePillars = [
    {
      title: "Earned Media & Enterprise SEO",
      desc: "Dominate commercial Google search rankings. We architect high-performance technical foundations, high-intent topic clusters, and digital PR campaigns that acquire editorial links from the world's most authoritative publications.",
      deliverables: ["Full Technical Architecture & Core Web Vitals", "AI Search & Google Gemini/SGE Optimization", "Commercial Intent Topical Authority Mapping", "High-Tier Digital PR & Media Placement"],
      icon: Search,
    },
    {
      title: "Performance Paid Media",
      desc: "Scale customer acquisition with algorithmic bidding, deep creative testing, and multi-channel synchronization across Google Search, YouTube, Meta, TikTok, and LinkedIn.",
      deliverables: ["Full-Funnel Paid Search & Social Architecture", "High-Volume Creative Production & Hook Testing", "First-Party Data Segmentation & Retargeting", "Value-Based Bidding & Server-Side CAPI Tracking"],
      icon: TrendingUp,
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Turn your existing traffic into paying customers. We deploy behavioral analytics, user heatmaps, and scientific A/B split testing to increase visitor-to-lead and checkout completion rates.",
      deliverables: ["Heatmap & Session Friction Diagnostics", "A/B and Multivariate Experimentation", "Checkout & Lead Gen Flow Redesign", "Psychological Copywriting & Value Tuning"],
      icon: Target,
    },
    {
      title: "Data Science & Marketing Analytics",
      desc: "Eliminate attribution blind spots. We build unified modern data stacks that track customer touchpoints from first click to multi-year customer lifetime value (LTV).",
      deliverables: ["Google Analytics 4 & BigQuery Warehousing", "Multi-Touch Attribution Modeling", "Predictive Churn & Customer Lifetime Value", "Executive Real-Time Looker Studio Dashboards"],
      icon: BarChart3,
    },
    {
      title: "Content Marketing & Viral PR",
      desc: "Publish authoritative industry research, benchmarks, and interactive tools that position your brand as the undisputed leader in your category.",
      deliverables: ["Proprietary Industry Data Surveys", "Long-Form Pillar Guides & Research Hubs", "Infographics & High-Velocity Social Assets", "Syndicated Media Distribution"],
      icon: Share2,
    },
    {
      title: "Social Media & Executive Thought Leadership",
      desc: "Establish your founders and brand leaders as omnipresent voices on LinkedIn, YouTube, and X with viral content systems.",
      deliverables: ["Executive Ghostwriting & Thought Leadership", "Short-Form Video Production (Reels, TikTok, Shorts)", "Omnichannel Audience Community Building", "Reputation & Brand Sentiment Protection"],
      icon: Building2,
    },
  ];

  const caseStudies = [
    {
      client: "Adobe",
      metric: "+312%",
      label: "Growth in High-Value Commercial Footprint",
      desc: "Restructured multi-regional keyword taxonomy and scaled organic search visibility for Adobe Creative Cloud and Enterprise software solutions.",
    },
    {
      client: "Western Union",
      metric: "+184%",
      label: "Qualified Organic Traffic Growth",
      desc: "Expanded international search dominance across 40+ countries and accelerated cross-border money transfer digital customer acquisition.",
    },
    {
      client: "SoFi",
      metric: "4.1x",
      label: "Improvement in Blended CAC",
      desc: "Optimized full-funnel search intent and paid media bidding strategy to drive high-margin financial loan applications at scale.",
    },
    {
      client: "Champion",
      metric: "+62%",
      label: "Increase in E-Commerce Organic Revenue",
      desc: "Implemented technical e-commerce faceted navigation fixes and targeted lifestyle apparel queries that doubled non-brand conversions.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button onClick={() => onNavigate("home")} className="hover:text-[#f25f22] cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#f25f22]">Growlimo Performance Agency</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f25f22] text-xs font-bold mb-4 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Adweek Fastest Growing Agency • AOY Winner
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] mb-6">
                Grow Your Traffic, Leads &amp; Revenue with <span className="text-[#f25f22]">Growlimo</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Founded by Muhammad Usman, Growlimo is an award-winning global performance marketing agency that helps Fortune 500 brands and high-growth companies outpace their competition through data-driven SEO, paid media, and conversion optimization.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="px-8 py-4 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Request a Free Proposal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("services-grid");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-4 border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Explore Capabilities
                </button>
              </div>
            </div>

            {/* Quick Proposal Box */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-orange-100 rounded-2xl p-7 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f25f22] animate-ping" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#f25f22]">Get In Touch</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  Ready to 2x–5x your digital growth?
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  Get a personalized multi-channel audit and execution roadmap from our senior strategy team.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-sm font-bold text-emerald-900 mb-1">Proposal Request Received!</h4>
                    <p className="text-xs text-emerald-700">
                      A Growlimo Senior Growth Director will review your website and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleProposalSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Website URL</label>
                      <input
                        type="text"
                        required
                        value={formUrl}
                        onChange={(e) => setFormUrl(e.target.value)}
                        placeholder="example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#f25f22] focus:ring-1 focus:ring-[#f25f22]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Primary Growth Objective</label>
                      <select
                        value={formGoal}
                        onChange={(e) => setFormGoal(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#f25f22]"
                      >
                        <option>Enterprise SEO &amp; Organic Growth</option>
                        <option>Paid Media &amp; Performance Marketing</option>
                        <option>Conversion Rate Optimization (CRO)</option>
                        <option>Data &amp; GA4 Analytics Infrastructure</option>
                        <option>Full-Service Integrated Digital Strategy</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Monthly Marketing Budget</label>
                      <select
                        value={formBudget}
                        onChange={(e) => setFormBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#f25f22]"
                      >
                        <option>$5k - $10k / mo</option>
                        <option>$10k - $25k / mo</option>
                        <option>$25k - $75k / mo</option>
                        <option>$75k+ / mo (Enterprise)</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer mt-2"
                    >
                      Get My Free Proposal →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Agency Stats Bar */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {agencyStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <Icon className="w-6 h-6 text-[#f25f22] mb-2" />
                  <span className="text-3xl sm:text-4xl font-black text-white">{stat.number}</span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Services Grid */}
      <section id="services-grid" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#f25f22]">Full-Service Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
              Engineered to Drive Predictable Revenue
            </h2>
            <p className="text-slate-600">
              Unlike traditional agencies that work in silos, Growlimo unites search, paid media, creative, and analytics into one cohesive customer acquisition engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePillars.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-orange-300 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f25f22] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                    <div className="space-y-2 mb-6">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#f25f22] bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Consult With Specialists →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#f25f22]">Proven Results</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
              Real Impact for Industry Leaders
            </h2>
            <p className="text-slate-600">
              See how we help the world&apos;s most recognized brands accelerate commercial performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">{cs.client}</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#f25f22]">{cs.metric}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{cs.label}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{cs.desc}</p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Verified Client Outcome</span>
                  <button onClick={onOpenConsultation} className="text-[#f25f22] hover:underline cursor-pointer">
                    Read Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#f25f22] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
            Ready to Outrank and Outsell Your Competitors?
          </h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
            Speak with a Growlimo strategist today to receive a free, no-obligation audit and growth roadmap for your brand.
          </p>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-10 py-4 bg-white text-[#f25f22] hover:bg-slate-100 font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            Request Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
