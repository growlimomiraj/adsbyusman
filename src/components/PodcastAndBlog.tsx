import React, { useState } from "react";
import {
  Headphones,
  Play,
  Pause,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  Volume2,
  CheckCircle2,
} from "lucide-react";
import { articlesData, podcastEpisodes } from "../data/marketingData";
import { PodcastEpisode } from "../types";

export const PodcastAndBlog: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode>(podcastEpisodes[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const togglePlay = (ep: PodcastEpisode) => {
    if (activeEpisode.id === ep.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveEpisode(ep);
      setIsPlaying(true);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
  };

  return (
    <section id="insights" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f25f22] text-xs font-bold uppercase tracking-wider mb-3">
            Guides, Frameworks & Podcast
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Master the Future of <br />
            <span className="text-[#f25f22]">Digital Marketing</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Actionable strategies and audio lessons published weekly. Tested with tens of millions of visitors across hundreds of enterprise client campaigns.
          </p>
        </div>

        {/* Marketing School Podcast Widget */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#f25f22] flex items-center justify-center text-white shadow-lg shadow-orange-500/30 shrink-0">
                <Headphones className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#f25f22]">
                  Daily 10-Minute Growth Lessons
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Marketing School Podcast
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Hosted by Muhammad Usman & Eric Siu • 70M+ Total Downloads
                </p>
              </div>
            </div>

            {/* Currently Playing Control Pill */}
            <div className="bg-slate-900 px-5 py-3 rounded-2xl border border-slate-700 flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-11 h-11 rounded-full bg-[#f25f22] hover:bg-[#d94e16] flex items-center justify-center text-white cursor-pointer shadow-md transition-all shrink-0"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <div className="min-w-0 flex-1 sm:max-w-xs">
                <div className="flex items-center gap-1.5 text-xs text-orange-400 font-bold">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlaying ? "Now Playing" : "Paused"}</span>
                </div>
                <p className="text-xs font-bold text-white truncate">
                  Ep #{activeEpisode.episodeNumber}: {activeEpisode.title}
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                {activeEpisode.duration}
              </span>
            </div>
          </div>

          {/* Episode List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            {podcastEpisodes.map((ep) => {
              const isActive = activeEpisode.id === ep.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => togglePlay(ep)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-slate-900 border-[#f25f22] shadow-md shadow-orange-500/10"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                      <span className="text-[#f25f22] font-black uppercase">
                        Ep. {ep.episodeNumber}
                      </span>
                      <span className="text-slate-500 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {ep.duration}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-white line-clamp-2 leading-snug mb-2">
                      {ep.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {ep.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-800/80 text-xs font-bold text-orange-400">
                    {isActive && isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause Audio</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Listen Now</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Marketing Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="bg-slate-50 hover:bg-orange-50/30 p-6 rounded-2xl border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-3">
                  <span className="text-[#f25f22] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-950 group-hover:text-[#f25f22] transition-colors leading-snug mb-3">
                  {article.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="text-[#f25f22] flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-slate-400 font-semibold">{article.stats}</span>
              </div>
            </article>
          ))}
        </div>

        {/* High-Converting Newsletter Card */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-orange-500/20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Get Muhammad Usman&apos;s Weekly Marketing Teardown
          </h3>
          <p className="text-sm sm:text-base text-orange-100 max-w-xl mx-auto mb-6 leading-relaxed">
            Join over 1,000,000 founders and marketers who receive my weekly data teardowns, SEO algorithm alerts, and conversion experiments.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-full font-bold shadow-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>You&apos;re in! Check your inbox for the 2026 SEO Playbook.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm outline-none focus:ring-4 focus:ring-orange-200 shadow-md"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm uppercase tracking-wide rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Join Free
              </button>
            </form>
          )}

          <p className="text-[11px] text-orange-100/90 mt-3 font-medium">
            Zero spam. Unsubscribe at any time with one click.
          </p>
        </div>
      </div>
    </section>
  );
};
