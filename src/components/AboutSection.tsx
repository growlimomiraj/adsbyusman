import React from "react";
import { Award, BookOpen, Star, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { ProfileConfig } from "../types";
import { accolades } from "../data/marketingData";

interface AboutSectionProps {
  profile: ProfileConfig;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  onOpenConsultation,
}) => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image and Key Accolade Pills */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
              <img
                src={profile.avatarUrl || "/usman.png"}
                alt={profile.name}
                className="w-full h-[450px] sm:h-[500px] object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <p className="text-xl font-black">{profile.name}</p>
                <p className="text-orange-400 text-xs font-semibold">
                  {profile.title}
                </p>
              </div>
            </div>

            {/* Accolade floating banner */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f25f22] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Global Recognition
                </p>
                <p className="text-sm font-extrabold text-slate-950">
                  Top 10 Marketer in World
                </p>
                <p className="text-[11px] text-slate-500 font-semibold">Forbes Magazine</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Accolades */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f25f22] text-xs font-bold uppercase tracking-wider">
              About The Marketer & Strategist
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Helping Businesses Unlock <br />
              <span className="text-[#f25f22]">Predictable, Scalable Growth</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                I&apos;m a leading growth marketer and the founder of{" "}
                <strong className="text-slate-900 font-bold">GROWLIMO</strong>. Over the past 15+ years, I&apos;ve helped companies like Amazon, Google, Microsoft, and Viacom scale their organic visibility and turn search traffic into loyal paying customers.
              </p>
              <p>
                My core philosophy has always been simple:{" "}
                <em className="text-slate-900 font-semibold">
                  &ldquo;Give away 95% of your marketing playbook for free, and build world-class agency infrastructure to execute for companies that want it done right.&rdquo;
                </em>
              </p>
            </div>

            {/* Accolades List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {accolades.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">
                    {item.organization}
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 text-sm sm:text-base font-extrabold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] active:scale-98 rounded-full shadow-lg shadow-orange-500/25 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Work With {profile.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#tools"
                className="px-6 py-3.5 text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-200/60 rounded-full transition-colors"
              >
                Try Free Tools (Ubersuggest)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
