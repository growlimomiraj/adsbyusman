import React from "react";
import { Award, BookOpen, Mic, CheckCircle2, TrendingUp, Building2, Quote } from "lucide-react";
import { ProfileConfig } from "../../types";

interface AboutPageProps {
  profile: ProfileConfig;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ profile, onNavigate, onOpenConsultation }) => {
  const accolades = [
    {
      source: "The Wall Street Journal",
      quote: "A top influencer on the web.",
    },
    {
      source: "Forbes",
      quote: "One of the top 10 marketers in the world.",
    },
    {
      source: "Entrepreneur Magazine",
      quote: "Created one of the 100 most brilliant companies.",
    },
    {
      source: "President Barack Obama",
      quote: "Recognized as a top 100 entrepreneur under the age of 30.",
    },
    {
      source: "United Nations",
      quote: "Recognized as a top 100 entrepreneur under the age of 35.",
    },
    {
      source: "United States Congress",
      quote: "Special Congressional Recognition for contributions to digital commerce.",
    },
  ];

  const milestones = [
    {
      year: "Age 16",
      title: "Built First Website",
      desc: "Couldn't find a job, so built Monster.com competitor 'Advice Monkey' and learned SEO the hard way.",
    },
    {
      year: "2006",
      title: "Co-Founded Crazy Egg",
      desc: "Pioneered heatmap analytics that revolutionized website user behavioral tracking worldwide.",
    },
    {
      year: "2008",
      title: "Pioneered Conversion Analytics",
      desc: "Engineered people-centric funnel and cohort analytics for modern SaaS and e-commerce companies.",
    },
    {
      year: "2016",
      title: "Recognized Growth Leader",
      desc: "Published industry-defining growth playbooks on sustainable traffic and brand equity.",
    },
    {
      year: "2017",
      title: "Launched Growlimo",
      desc: "Founded performance marketing agency to combine enterprise capabilities with entrepreneur agility.",
    },
    {
      year: "Present",
      title: "1,000+ Global Marketers",
      desc: "Growlimo wins industry growth accolades, managing billions in client pipeline.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 animate-in fade-in duration-300">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button onClick={() => onNavigate("home")} className="hover:text-[#f25f22] cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#f25f22]">About Muhammad Usman</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-black uppercase tracking-widest text-[#f25f22]">Who Is Muhammad Usman?</span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-6 leading-tight">
                Helping You Succeed Through <span className="text-[#f25f22]">Online Marketing</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Muhammad Usman is an enterprise performance marketing strategist and founder of Growlimo. He has engineered scalable customer acquisition systems and AI search visibility frameworks driving hundreds of millions in revenue for hyper-growth brands.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8 font-normal">
                Recognized across industry circles for pioneering algorithmic paid media bidding, organic ranking architecture, and user-centric conversion rate optimization.
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-8 py-3.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
              >
                Work With Muhammad &amp; Growlimo →
              </button>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f25f22]/30 via-orange-100 to-amber-100 rounded-3xl -rotate-2 scale-102" />
                <div className="relative bg-white border-2 border-orange-200/90 rounded-3xl p-4 shadow-2xl group">
                  <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner select-none">
                    <img
                      src="/usman.png"
                      alt="Muhammad Usman"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="text-center pt-3 pb-1">
                    <div className="font-black text-slate-900 text-lg uppercase tracking-tight flex items-center justify-center gap-1.5">
                      <span>Muhammad Usman</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" title="Active"></span>
                    </div>
                    <div className="text-xs text-[#f25f22] font-bold tracking-wide">Founder & Chief Growth Officer, Growlimo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Accolades Grid */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#f25f22]">Industry Accolades</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Recognized by Global Publications &amp; Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accolades.map((item, idx) => (
              <div key={idx} className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-xs flex flex-col justify-between">
                <div>
                  <Quote className="w-6 h-6 text-[#f25f22] mb-3 opacity-90" />
                  <p className="text-sm text-slate-200 font-medium italic mb-4 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs font-bold text-orange-200 uppercase tracking-wider">
                  — {item.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#f25f22]">The Entrepreneurial Story</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">
              From Teenage Scrapper to Global Agency Leader
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              How relentless testing, data obsession, and giving away free tools built one of the world&apos;s most influential marketing platforms.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-slate-200">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f25f22] text-white font-black text-xs shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-2xs">
                  <span className="text-xs font-black text-[#f25f22] uppercase tracking-wider">{milestone.year}</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">{milestone.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
