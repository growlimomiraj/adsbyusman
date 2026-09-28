import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  TrendingUp,
  BarChart2,
  CheckCircle2,
  AlertTriangle,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Sparkles,
  Shield,
  Eye,
  Hourglass,
  TrendingDown,
  LineChart,
  Target,
  FileCode2,
  FileSearch,
  Check,
  Globe,
  SlidersHorizontal,
  Mail,
  Copy,
  ExternalLink,
  Bot
} from "lucide-react";

interface UbersuggestPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const UbersuggestPage: React.FC<UbersuggestPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [keywordOrDomain, setKeywordOrDomain] = useState("");
  const [searchedQuery, setSearchedQuery] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpStep, setSignUpStep] = useState<"form" | "success">("form");

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // first open by default as in screenshot page 10

  // Testimonials "More reviews" State
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  // Newsletter in orange footer
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [agreeNewsletter, setAgreeNewsletter] = useState(true);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = keywordOrDomain.trim() || "shopify.com";
    setIsSearching(true);
    setTimeout(() => {
      setSearchedQuery(query);
      setIsSearching(false);
      const resultsEl = document.getElementById("ubersuggest-live-results");
      if (resultsEl) {
        resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpEmail) return;
    setSignUpStep("success");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
  };

  const faqs = [
    {
      q: "How much is an Ubersuggest plan?",
      a: "The most affordable plan is our lifetime offer. All you have to do is pay once and have full access – with updates – for life. Ubersuggest pricing is even 90% cheaper than competitor plans. Get started by using the free limited features like the over 500,000 companies that trust my free keyword research tool.",
      highlight: true
    },
    {
      q: "How accurate is Ubersuggest?",
      a: "Ubersuggest pulls data directly from Google's Keyword Planner API, Google Suggest, and our proprietary crawler network index of over 6 billion pages and 100+ million keywords. Search volumes, CPC estimations, and SEO difficulty scores are calibrated daily for over 95% real-world accuracy across 140+ countries.",
    },
    {
      q: "What does Ubersuggest do?",
      a: "Ubersuggest is an all-in-one digital marketing and SEO intelligence platform. It provides instant keyword research, competitor traffic analysis, backlink discovery, automated site health audits, and cutting-edge AI Search Visibility tracking to get your brand cited inside Google AI Overviews and ChatGPT."
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-[#f25f22] selection:text-white">
      {/* ========================================================================= */}
      {/* PAGE 1: Ubersuggest Sub-Navigation & Hero with Illustration & Search */}
      {/* ========================================================================= */}
      <div className="bg-[#fffaf5] border-b border-orange-100/60">
        {/* Sub-Header matching Page 1 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#f25f22] font-black text-2xl tracking-tight">Ubersuggest</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setSignUpStep("form");
              setIsSignUpModalOpen(true);
            }}
            className="px-4 py-1.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-bold rounded-lg transition-all shadow-xs cursor-pointer active:scale-95"
          >
            Sign-up
          </button>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-14 sm:pb-20 text-center">
          {/* Hand-drawn style illustration with laptop */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 flex items-center justify-center">
            {/* Soft pink/peach decorative backdrop circle */}
            <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-rose-100/50 -z-10 animate-pulse" />
            <div className="absolute -top-2 -right-4 w-12 h-12 rounded-full border border-rose-200/60 -z-10" />
            
            {/* SVG Minimalist Hand-Drawn Growth Marketer Sitting with Laptop */}
            <svg
              viewBox="0 0 240 240"
              className="w-full h-full drop-shadow-xs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background soft wavy decorative doodle */}
              <path
                d="M 30 70 Q 50 50, 75 70 T 120 70"
                stroke="#f9a8d4"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M 170 80 Q 190 60, 210 80"
                stroke="#f9a8d4"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Head & Face */}
              <ellipse cx="120" cy="70" rx="20" ry="24" fill="#fed7aa" stroke="#1e293b" strokeWidth="2.5" />
              {/* Eyes */}
              <ellipse cx="113" cy="69" rx="2" ry="2.5" fill="#1e293b" />
              <ellipse cx="127" cy="69" rx="2" ry="2.5" fill="#1e293b" />
              {/* Eyebrows */}
              <path d="M 109 63 Q 114 60 118 63" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              <path d="M 123 63 Q 127 60 131 63" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              {/* Nose */}
              <path d="M 120 70 L 118 76 L 122 76" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Warm Smile */}
              <path d="M 114 81 Q 120 86 126 81" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              {/* Ears */}
              <path d="M 99 70 Q 98 75 101 77" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              <path d="M 141 70 Q 142 75 139 77" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              {/* Neck */}
              <path d="M 112 94 L 112 102 L 128 102 L 128 94" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />

              {/* Body in Black Shirt */}
              <path
                d="M 90 110 C 90 102, 105 100, 120 100 C 135 100, 150 102, 150 110 L 158 155 C 158 160, 150 162, 140 162 L 100 162 C 90 162, 82 160, 82 155 Z"
                fill="#1e293b"
                stroke="#1e293b"
                strokeWidth="2.5"
              />

              {/* Crossed Legs in Black Pants */}
              <path
                d="M 70 175 C 65 160, 90 155, 120 155 C 150 155, 175 160, 170 175 C 165 185, 145 185, 120 185 C 95 185, 75 185, 70 175 Z"
                fill="#0f172a"
                stroke="#0f172a"
                strokeWidth="2.5"
              />
              {/* Shoes */}
              <ellipse cx="68" cy="175" rx="10" ry="6" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
              <ellipse cx="172" cy="175" rx="10" ry="6" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />

              {/* Arms reaching to laptop */}
              <path d="M 90 112 L 75 142 L 105 145" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 150 112 L 165 142 L 135 145" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              {/* Hands */}
              <circle cx="106" cy="145" r="4.5" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.5" />
              <circle cx="134" cy="145" r="4.5" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.5" />

              {/* Laptop Screen & Keyboard */}
              <polygon points="98,128 142,128 138,148 102,148" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
              {/* Little indicator dot on back of screen */}
              <circle cx="120" cy="138" r="2.5" fill="#f25f22" />
              {/* Laptop Base */}
              <polygon points="92,148 148,148 152,154 88,154" fill="#cbd5e1" stroke="#1e293b" strokeWidth="2" />

              {/* Ground shadow line */}
              <line x1="50" y1="188" x2="190" y2="188" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Headline matching screenshot Page 1 */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] mb-3">
            Get Your Brand
            <br />
            Mentioned on Google
            <br />
            and ChatGPT{" "}
            <span className="inline-flex items-center align-middle ml-1 text-emerald-700">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 inline-block fill-current" viewBox="0 0 24 24">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.475 4.475 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.47 4.47 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.0201-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4947 4.4947 0 0 1-.6765 8.1042v-5.6726a.79.79 0 0 0-.4022-.686zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.09 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4997 4.4997 0 0 1 6.6802 4.6664zm-12.641 4.1348l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0748a4.4997 4.4997 0 0 1 7.3757-3.4537l-.142.0805L8.204 5.4598a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3655l2.6028-1.5003 2.6076 1.5003v2.996l-2.6076 1.505-2.6028-1.505z" />
              </svg>
            </span>
          </h1>

          {/* Subtitle matching Page 1 */}
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto mb-8">
            Win the SEO game before your competitors even know they&apos;re playing.
          </p>

          {/* Search Card Container matching Page 1 */}
          <div className="bg-white rounded-2xl p-3 sm:p-5 shadow-xl border border-orange-100 max-w-lg mx-auto">
            <form onSubmit={handleSearchSubmit} className="flex flex-col gap-3">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={keywordOrDomain}
                  onChange={(e) => setKeywordOrDomain(e.target.value)}
                  placeholder="Enter a keyword or website domain"
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base text-slate-800 placeholder:text-slate-400 border border-slate-200 focus:border-[#f25f22] focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all font-medium text-center sm:text-left"
                />
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="w-full py-3.5 sm:py-4 rounded-xl font-black text-white text-base sm:text-lg tracking-wide bg-gradient-to-r from-[#f25f22] to-[#ff7e39] hover:from-[#e05317] hover:to-[#f25f22] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <Search className="w-5 h-5 text-white stroke-[2.5]" />
                <span>{isSearching ? "Analyzing Data..." : "SEO Search"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PAGE 2: Trusted Brand Logos & "SEO shouldn't feel overwhelming"          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
            Ubersuggest is powered by Growlimo award-winning performance marketing trusted by
          </p>

          {/* Clean Enterprise Brand Logos matching Page 2 */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-700 font-black tracking-wider text-sm sm:text-base opacity-80">
            <span className="flex items-center gap-1.5 font-bold tracking-normal">
              <span className="text-xl">⨂</span> TOYOTA
            </span>
            <span className="flex items-center gap-1.5 font-serif italic text-base">
              Mercedes-Benz
            </span>
            <span className="font-extrabold tracking-tighter text-lg">DELL</span>
            <span className="font-serif font-bold text-base text-red-600">Canon</span>
            <span className="w-8 h-8 rounded-full border-2 border-slate-700 flex items-center justify-center font-bold text-xs">
              hp
            </span>
            <span className="tracking-widest font-serif font-bold text-sm">L&apos;ORÉAL</span>
            <span className="font-black text-sm bg-red-600 text-white px-2 py-0.5 rounded-sm">
              LEVI&apos;S
            </span>
            <span className="font-serif italic text-base">Cartier</span>
            <span className="font-black italic text-lg tracking-tighter">NIKE</span>
          </div>
        </div>

        {/* Problem Illustration & Section matching Page 2 */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 text-center">
          {/* Hand-Drawn Stressed Woman Marketer Illustration */}
          <div className="w-52 h-52 mx-auto mb-8 relative flex items-center justify-center">
            {/* Soft pink circular halo */}
            <div className="absolute w-44 h-44 rounded-full bg-rose-50 -z-10" />

            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Frustration / Stress scribble cloud above head */}
              <path
                d="M 65 35 Q 75 20, 95 30 Q 115 15, 125 35 Q 140 30, 135 50 Q 145 65, 125 70 Q 110 80, 90 70 Q 60 75, 65 50 Q 55 40, 65 35 Z"
                stroke="#be185d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 2"
                fill="#fdf2f8"
              />
              <path
                d="M 75 40 Q 95 30 115 45 T 100 60 Q 80 50 110 55"
                stroke="#be185d"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Stress spark lines */}
              <line x1="145" y1="45" x2="155" y2="40" stroke="#be185d" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="148" y1="55" x2="158" y2="55" stroke="#be185d" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="145" y1="65" x2="153" y2="70" stroke="#be185d" strokeWidth="2.5" strokeLinecap="round" />

              {/* Head & Hair in deep maroon */}
              <path
                d="M 80 80 C 70 65, 130 65, 120 80 C 130 95, 125 125, 115 130 L 85 130 C 75 125, 70 95, 80 80 Z"
                fill="#831843"
              />
              {/* Face */}
              <ellipse cx="100" cy="95" rx="18" ry="20" fill="#fed7aa" stroke="#831843" strokeWidth="2" />

              {/* Stressed Eyes & Mouth */}
              <path d="M 90 92 Q 95 90 98 94" stroke="#831843" strokeWidth="2" strokeLinecap="round" />
              <path d="M 103 94 Q 106 90 111 92" stroke="#831843" strokeWidth="2" strokeLinecap="round" />
              {/* Troubled downturn mouth */}
              <path d="M 94 106 Q 100 102 107 106" stroke="#831843" strokeWidth="2" strokeLinecap="round" />

              {/* Hand holding eyeglasses away from face */}
              <path d="M 68 85 Q 55 90 55 105 L 65 110" stroke="#831843" strokeWidth="4" strokeLinecap="round" />
              {/* Glasses in hand */}
              <circle cx="56" cy="100" r="7" stroke="#831843" strokeWidth="2" fill="none" />
              <circle cx="70" cy="100" r="7" stroke="#831843" strokeWidth="2" fill="none" />
              <line x1="63" y1="100" x2="63" y2="100" stroke="#831843" strokeWidth="2" />

              {/* Hand rubbing forehead */}
              <path d="M 115 88 Q 120 78 112 75 L 105 78" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" />

              {/* Body & Jacket */}
              <path
                d="M 70 135 L 50 170 L 150 170 L 130 135 Z"
                fill="#ffffff"
                stroke="#831843"
                strokeWidth="2.5"
              />
              <path d="M 85 135 L 100 160 L 115 135" fill="#831843" />

              {/* Laptop in front */}
              <polygon points="105,145 155,145 150,172 95,172" fill="#ffffff" stroke="#831843" strokeWidth="2" />
              <circle cx="125" cy="158" r="3" fill="#831843" />
              <polygon points="90,172 160,172 165,176 85,176" fill="#fbcfe8" stroke="#831843" strokeWidth="2" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            SEO shouldn&apos;t feel overwhelming
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mb-8">
            You feel like your competitors are outranking you while you are:
          </p>

          {/* 3 Frustrations matching Page 2 & Page 3 */}
          <div className="space-y-4 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-50/60 border border-rose-100 text-slate-800 font-medium">
              <Hourglass className="w-5 h-5 text-rose-600 shrink-0" />
              <span className="text-sm sm:text-base">Spending hours on manual keyword research</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-50/60 border border-rose-100 text-slate-800 font-medium">
              <TrendingDown className="w-5 h-5 text-rose-600 shrink-0" />
              <span className="text-sm sm:text-base">Missing profitable long-tail opportunities</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-50/60 border border-rose-100 text-slate-800 font-medium">
              <Eye className="w-5 h-5 text-rose-600 shrink-0" />
              <span className="text-sm sm:text-base">Guessing at competitor strategies</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 3: "Meet Ubersuggest" + AI Search Visibility Dashboard Mockup        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-orange-50/30 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Meet <span className="text-[#f25f22]">Ubersuggest</span>
            </h3>
            <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Built by marketers, trusted by millions.
            </p>

            {/* Hand-drawn arrow & now with AI badge matching Page 3 */}
            <div className="inline-flex items-center gap-2 mt-4 text-[#7c3aed] font-bold text-base sm:text-lg">
              <span>↖️</span>
              <span className="font-mono underline decoration-wavy decoration-[#7c3aed]">now with AI</span>
              <Sparkles className="w-4 h-4 text-[#7c3aed]" />
            </div>
          </div>

          {/* AI Search Visibility Dashboard Mockup matching Page 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl p-4 sm:p-6 text-left max-w-3xl mx-auto">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">AI Search Visibility</h4>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                  New
                </span>
              </div>
              <span className="text-xs text-slate-400">Live AI Citations</span>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 sm:p-4 rounded-xl bg-orange-50/60 border border-orange-100">
                <p className="text-[11px] font-bold text-slate-500 uppercase">Brand Visibility</p>
                <p className="text-xl sm:text-2xl font-black text-[#f25f22]">48%</p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[11px] font-bold text-slate-500 uppercase">Discovery Score</p>
                <p className="text-xl sm:text-2xl font-black text-slate-800">4 ★</p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[11px] font-bold text-slate-500 uppercase">Analyzed Over</p>
                <p className="text-xl sm:text-2xl font-black text-slate-800">100 responses</p>
              </div>
            </div>

            {/* Top Brands Visibility bar graph */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50/80 border border-slate-200">
              <p className="text-xs font-black uppercase tracking-wider text-slate-600 mb-3">
                Top Brands Visibility
              </p>
              <div className="flex items-end gap-2 sm:gap-4 h-32 pt-4 px-2">
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-[#f25f22] rounded-t-md h-24" />
                  <span className="text-[10px] font-bold text-slate-700">You</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-orange-300 rounded-t-md h-20" />
                  <span className="text-[10px] text-slate-500">Comp A</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-orange-200 rounded-t-md h-16" />
                  <span className="text-[10px] text-slate-500">Comp B</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-slate-200 rounded-t-md h-12" />
                  <span className="text-[10px] text-slate-500">Comp C</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-slate-200 rounded-t-md h-8" />
                  <span className="text-[10px] text-slate-500">Comp D</span>
                </div>
              </div>
            </div>

            {/* Prompts table summary */}
            <div className="text-xs">
              <div className="flex items-center justify-between font-bold text-slate-500 pb-2 border-b border-slate-200">
                <span>Top Prompt Queries</span>
                <span>Share of Voice</span>
              </div>
              <div className="py-2.5 flex items-center justify-between border-b border-slate-100 text-slate-700">
                <span>&quot;What are the best e-commerce platforms for beginners?&quot;</span>
                <span className="font-black text-emerald-600">62% Cited</span>
              </div>
              <div className="py-2.5 flex items-center justify-between text-slate-700">
                <span>&quot;How to scale an online store fast without inventory?&quot;</span>
                <span className="font-black text-emerald-600">44% Cited</span>
              </div>
            </div>
          </div>

          {/* Section Headline matching Page 3 & Page 4 */}
          <div className="mt-16 sm:mt-24">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Everything{" "}
              <span className="relative inline-block text-slate-400 line-through decoration-orange-400 decoration-2">
                you need
              </span>{" "}
              <span className="text-[#f25f22]">↗️ your brand</span>
              <br />
              needs to grow
            </h2>
            <div className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#f25f22]">
              traffic in one place
            </div>
            {/* Orange squiggly underline decorative wave */}
            <div className="w-48 sm:w-64 h-3 mx-auto mt-2 text-[#f25f22] overflow-hidden">
              <svg viewBox="0 0 200 12" className="w-full h-full fill-none stroke-current" strokeWidth="3">
                <path d="M 0 6 Q 10 0, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6 T 140 6 T 160 6 T 180 6 T 200 6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 4 & PAGE 5: 4 Feature Cards + AI Keyword Research                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* 4 Feature Cards matching Page 4 & Page 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-20">
            {/* Card 1: Predictive Analytics */}
            <div className="p-6 rounded-2xl bg-[#fff7f2] border border-orange-100 hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#f25f22]">
                <LineChart className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Predictive Analytics</h3>
              <p className="text-sm text-orange-950/80 leading-relaxed">
                See which keywords will drive traffic before you rank.
              </p>
            </div>

            {/* Card 2: Competitor Analysis */}
            <div className="p-6 rounded-2xl bg-[#fff7f2] border border-orange-100 hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#f25f22]">
                <Target className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Competitor Analysis</h3>
              <p className="text-sm text-orange-950/80 leading-relaxed">
                Reverse-engineer successful competitor strategies
              </p>
            </div>

            {/* Card 3: Site Audit */}
            <div className="p-6 rounded-2xl bg-[#fff7f2] border border-orange-100 hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#f25f22]">
                <FileCode2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Site Audit</h3>
              <p className="text-sm text-orange-950/80 leading-relaxed">
                Fix SEO and code issues that hurt rankings
              </p>
            </div>

            {/* Card 4: Content Gap Analysis */}
            <div className="p-6 rounded-2xl bg-[#fff7f2] border border-orange-100 hover:border-orange-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#f25f22]">
                <FileSearch className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Content Gap Analysis</h3>
              <p className="text-sm text-orange-950/80 leading-relaxed">
                Find exactly what content to create next
              </p>
            </div>
          </div>

          {/* AI Keyword Research Section matching Page 5 */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              AI Keyword Research
            </h3>
            <p className="text-base sm:text-lg font-bold text-purple-700 mb-6">
              100 million keyword database with years of SEO expertise made simple with:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto text-slate-800 text-sm font-semibold">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-[#f25f22] stroke-[3]" />
                <span>Brands mentioned by AI models</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-[#f25f22] stroke-[3]" />
                <span>AI-generated keyword ideas</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-[#f25f22] stroke-[3]" />
                <span>Search volume and intent</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-[#f25f22] stroke-[3]" />
                <span>Difficulty scoring</span>
              </div>
            </div>
          </div>

          {/* UI Graphic Mockup for Keyword Research matching Page 5 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xl max-w-3xl mx-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Search className="w-4 h-4 text-[#f25f22]" />
                <span>Keyword: &quot;e-commerce&quot;</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                High Commercial Value
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Search Volume</p>
                <p className="text-xl font-black text-slate-900">9,900,000</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Paid Difficulty (PD)</p>
                <p className="text-xl font-black text-[#f25f22]">88 / 100</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase">SEO Difficulty (SD)</p>
                <p className="text-xl font-black text-amber-600">50.5K (Medium)</p>
              </div>
            </div>

            <div className="p-3.5 bg-purple-50/80 rounded-xl border border-purple-100 flex items-start gap-3 text-xs text-purple-900">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-black">AI Prompt Idea:</span> Users frequently prompt ChatGPT: &quot;What are the top 3 e-commerce tools for automated dropshipping?&quot;. Adding an FAQ section targeting this prompt can yield a 34% organic traffic spike.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 6: Competitive Intelligence Section                                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
              Competitive Intelligence
            </h3>
            <p className="text-base sm:text-lg font-bold text-[#f25f22] mb-6">
              Gather the power of Ubersuggest SEO combined with AI to get:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                Backlink opportunities
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                Traffic estimation
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                Top-performing content
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                SERP Analysis
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                Ranking tracking
              </span>
            </div>
          </div>

          {/* Realistic Graphic mockup matching Page 6 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Brands Mentioned */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-black text-slate-800 mb-2">Brands Mentioned</p>
                <ol className="text-xs text-slate-600 space-y-1.5">
                  <li className="flex justify-between"><span>1. Omnicom Group</span> <span className="font-bold">42%</span></li>
                  <li className="flex justify-between"><span>2. WPP</span> <span className="font-bold">38%</span></li>
                  <li className="flex justify-between"><span>3. Publicis Groupe</span> <span className="font-bold">29%</span></li>
                  <li className="flex justify-between"><span>4. Dentsu Creative</span> <span className="font-bold">24%</span></li>
                  <li className="flex justify-between"><span>5. Ogilvy</span> <span className="font-bold">19%</span></li>
                </ol>
              </div>

              {/* Top Sources */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-black text-slate-800 mb-2">Top Sources</p>
                <ol className="text-xs text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-1.5"><span>🔴</span> reddit.com</li>
                  <li className="flex items-center gap-1.5"><span>📸</span> instagram.com</li>
                  <li className="flex items-center gap-1.5"><span>📘</span> facebook.com</li>
                  <li className="flex items-center gap-1.5"><span>▶️</span> youtube.com</li>
                  <li className="flex items-center gap-1.5"><span>🎵</span> tiktok.com</li>
                </ol>
              </div>

              {/* Google Top Results */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-black text-slate-800 mb-2">Google Top Results</p>
                <ol className="text-xs text-slate-600 space-y-1.5">
                  <li className="truncate">1. en.wikipedia.org</li>
                  <li className="truncate">2. investopedia.com</li>
                  <li className="truncate">3. amazon.org</li>
                  <li className="truncate">4. hubspot.com</li>
                  <li className="truncate">5. growlimo.com</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 7: "From chaos to clarity in just a few steps"                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            From chaos ☁️ to
            <br />
            clarity ☀️ in just a
            <br />
            <span className="text-[#f25f22]">few steps</span>
          </h2>
          {/* Orange squiggly wave */}
          <div className="w-48 sm:w-56 h-3 mx-auto mt-2 text-[#f25f22] overflow-hidden mb-12">
            <svg viewBox="0 0 200 12" className="w-full h-full fill-none stroke-current" strokeWidth="3">
              <path d="M 0 6 Q 10 0, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6 T 140 6 T 160 6 T 180 6 T 200 6" />
            </svg>
          </div>

          {/* 3 Step Cards matching Page 7 */}
          <div className="space-y-4 text-left">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#fff9f4] border border-orange-100 hover:border-orange-300 transition-all">
              <span className="text-4xl font-black text-[#f25f22]/70 block mb-2">1</span>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                Search a keyword to get instant data and AI suggestions
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#fff9f4] border border-orange-100 hover:border-orange-300 transition-all">
              <span className="text-4xl font-black text-[#f25f22]/70 block mb-2">2</span>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                Optimize content and fix issues using our insights
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#fff9f4] border border-orange-100 hover:border-orange-300 transition-all">
              <span className="text-4xl font-black text-[#f25f22]/70 block mb-2">3</span>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                Grow your traffic and watch your rankings climb
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 8: High Five Illustration & Trustpilot Reviews                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-orange-50/40 via-white to-white border-b border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Sign-up for Free CTA button */}
          <button
            type="button"
            onClick={() => {
              setSignUpStep("form");
              setIsSignUpModalOpen(true);
            }}
            className="px-8 py-3.5 rounded-xl font-black text-white text-base tracking-wide bg-gradient-to-r from-[#f25f22] to-[#ff7e39] hover:from-[#e05317] hover:to-[#f25f22] shadow-lg hover:shadow-xl transition-all mb-12 cursor-pointer active:scale-95"
          >
            Sign-up for Free
          </button>

          {/* High-Five Illustration matching Page 8 */}
          <div className="w-56 h-56 mx-auto mb-6 relative flex items-center justify-center">
            {/* Sparkles / Stars behind high five */}
            <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* High five stars */}
              <polygon points="120,40 123,48 132,48 125,54 128,62 120,57 112,62 115,54 108,48 117,48" fill="#f59e0b" />
              <polygon points="100,50 102,55 107,55 103,59 105,64 100,61 95,64 97,59 93,55 98,55" fill="#fbbf24" />
              <polygon points="140,55 142,60 147,60 143,64 145,69 140,66 135,69 137,64 133,60 138,60" fill="#fbbf24" />

              {/* Spark lines */}
              <line x1="120" y1="28" x2="120" y2="34" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              <line x1="108" y1="36" x2="112" y2="40" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              <line x1="132" y1="36" x2="128" y2="40" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />

              {/* Growth Strategist (Left Person) */}
              <ellipse cx="80" cy="90" rx="16" ry="19" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
              <ellipse cx="76" cy="88" rx="1.5" ry="2" fill="#1e293b" />
              <ellipse cx="84" cy="88" rx="1.5" ry="2" fill="#1e293b" />
              <path d="M 77 97 Q 80 101 85 97" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 60 120 L 70 180 L 100 180 L 100 120 Z" fill="#1e293b" stroke="#1e293b" strokeWidth="2" />
              {/* Left person arm reaching up to high-five */}
              <path d="M 90 125 L 115 85" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" />
              <circle cx="116" cy="82" r="5" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.5" />

              {/* Female Marketer (Right Person) with dark hair */}
              <path d="M 145 90 C 140 70, 180 70, 175 90 C 180 105, 175 125, 170 130 L 150 130 Z" fill="#1e293b" />
              <ellipse cx="160" cy="90" rx="15" ry="18" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
              <ellipse cx="155" cy="88" rx="1.5" ry="2" fill="#1e293b" />
              <ellipse cx="163" cy="88" rx="1.5" ry="2" fill="#1e293b" />
              <path d="M 156 97 Q 160 101 164 97" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 140 120 L 140 180 L 175 180 L 180 120 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
              {/* Right person arm reaching up to high-five */}
              <path d="M 150 125 L 122 85" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <circle cx="120" cy="82" r="5" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.5" />
            </svg>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
            Trusted by over <span className="text-[#f25f22]">250,000</span> users
          </h3>
          <p className="text-base sm:text-lg text-slate-600 font-medium mb-8">
            from small business to enterprise
          </p>

          {/* Enterprise brand logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-black text-slate-600 text-sm opacity-85 mb-8">
            <span className="text-red-600 font-black">Adobe</span>
            <span className="flex items-center gap-1"><span className="text-xs">⊞</span> Microsoft</span>
            <span className="italic font-black">NIKE</span>
            <span className="font-extrabold text-base">𝕏</span>
            <span className="font-black tracking-tight">DELL</span>
            <span className="text-blue-600 font-bold">et</span>
          </div>

          {/* Trustpilot Review Badge matching Page 8 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs inline-block">
            <div className="flex items-center justify-center gap-1.5 text-slate-900 font-bold text-sm mb-1.5">
              <span className="text-emerald-600 text-lg">★</span>
              <span>Trustpilot</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-5 h-5 bg-emerald-500 text-white rounded-[2px] flex items-center justify-center text-xs font-bold">
                  ★
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              Excellent score based on 460+ reviews
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 9: Testimonial Card + "The AI visibility competition begun."         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          {/* Testimonial Quote Card matching Page 9 */}
          <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100/80 text-left mb-6 shadow-2xs">
            <h4 className="font-black text-emerald-950 text-base mb-2">
              Helps in making better decisions
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              &quot;It&apos;s great that your team replies so quickly. The information you provide is clear and logical.&quot;
            </p>
            <div className="text-xs text-slate-500">
              <p className="font-bold text-slate-800">Sheza Badar</p>
              <p>September 2025</p>
            </div>
          </div>

          {/* More reviews expander */}
          <button
            type="button"
            onClick={() => setShowMoreReviews(!showMoreReviews)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 mb-14 cursor-pointer"
          >
            <span>More reviews</span>
            {showMoreReviews ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showMoreReviews && (
            <div className="space-y-4 text-left mb-14 animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h5 className="font-bold text-slate-900 text-sm mb-1">&quot;Rankings grew by 240% in 90 days&quot;</h5>
                <p className="text-xs text-slate-600 mb-2">
                  Ubersuggest identified easy long-tail keywords that our agency competitors were completely ignoring.
                </p>
                <p className="text-[11px] font-semibold text-slate-500">Marcus Vance — E-commerce Director</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h5 className="font-bold text-slate-900 text-sm mb-1">&quot;The lifetime plan is the best value in SEO&quot;</h5>
                <p className="text-xs text-slate-600 mb-2">
                  Compared to paying $120/mo elsewhere, getting lifetime keyword tracking paid for itself in week one.
                </p>
                <p className="text-[11px] font-semibold text-slate-500">Elena Rostova — Growth Consultant</p>
              </div>
            </div>
          )}

          {/* The AI visibility competition begun headline */}
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            The AI visibility competition begun.{" "}
            <span className="text-[#f25f22]">Are you playing to win?</span>
          </h2>

          {/* Jogging illustration matching Page 9 */}
          <div className="w-52 h-44 mx-auto mb-6 relative flex items-center justify-center">
            {/* Outline trendlines behind them */}
            <div className="absolute w-44 h-32 rounded-3xl bg-orange-50/70 -z-10" />

            <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Upward graph trend behind runners */}
              <path d="M 40 40 Q 60 25, 90 35 T 140 20" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />
              <path d="M 140 60 L 175 60 M 140 70 L 170 70" stroke="#fed7aa" strokeWidth="3" strokeLinecap="round" />

              {/* Female Runner (Left) */}
              <ellipse cx="65" cy="45" rx="11" ry="13" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
              {/* Ponytail */}
              <path d="M 54 42 C 45 40, 42 50, 48 55" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              {/* Running Body in athletic wear */}
              <path d="M 58 60 L 72 60 L 75 88 L 55 88 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
              {/* Running legs */}
              <path d="M 58 88 L 48 115 L 40 120" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
              <path d="M 72 88 L 82 105 L 90 120" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />

              {/* Male Runner (Right) */}
              <ellipse cx="110" cy="50" rx="11" ry="13" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
              {/* Cap */}
              <path d="M 98 48 C 100 40, 120 40, 122 48 L 126 50" stroke="#1e293b" strokeWidth="2" fill="#1e293b" />
              {/* Running Body */}
              <path d="M 100 65 L 120 65 L 118 92 L 98 92 Z" fill="#1e293b" stroke="#1e293b" strokeWidth="2" />
              {/* Running legs */}
              <path d="M 102 92 L 95 115 L 85 125" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
              <path d="M 115 92 L 130 110 L 140 125" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
            Content ranking is becoming more competitive every day and AI can give you the advantages you&apos;ve been searching.
          </p>

          <button
            type="button"
            onClick={() => {
              setSignUpStep("form");
              setIsSignUpModalOpen(true);
            }}
            className="px-8 py-3.5 rounded-xl font-black text-white text-base tracking-wide bg-gradient-to-r from-[#f25f22] to-[#ff7e39] hover:from-[#e05317] hover:to-[#f25f22] shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
          >
            Sign-up for Free
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 10: FAQ Accordion Section ("Any questions?")                         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-[#fff9f2] p-6 sm:p-10 border border-orange-100/80 shadow-xs">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8">
              Any questions?
            </h2>

            <div className="divide-y divide-orange-200/50">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left gap-4 font-black text-slate-900 text-base sm:text-lg cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-600 font-mono text-xl shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {faq.a.includes("Ubersuggest pricing") ? (
                          <>
                            The most affordable plan is our lifetime offer. All you have to do is pay once and have full access – with updates – for life.{" "}
                            <span className="text-[#f25f22] font-semibold underline cursor-pointer">
                              Ubersuggest pricing
                            </span>{" "}
                            is even 90% cheaper than competitor plans. Get started by using the free limited features like the over 500,000 companies that trust my free keyword research tool.
                          </>
                        ) : (
                          faq.a
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LIVE AUDIT RESULTS SECTION: Appears right below if search is performed     */}
      {/* ========================================================================= */}
      {searchedQuery && (
        <section id="ubersuggest-live-results" className="py-12 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Instant SEO Report
                </span>
                <h3 className="text-2xl font-black text-white">
                  Target Domain / Keyword: <span className="text-orange-400 font-mono">{searchedQuery}</span>
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSearchedQuery(null)}
                className="self-start sm:self-auto text-xs font-bold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 cursor-pointer"
              >
                Close Report ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-[11px] font-bold text-slate-400 uppercase">Monthly Organic Traffic</p>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">1,420,500</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-[11px] font-bold text-slate-400 uppercase">Organic Keywords</p>
                <p className="text-xl sm:text-2xl font-black text-white">84,200</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-[11px] font-bold text-slate-400 uppercase">Domain Authority</p>
                <p className="text-xl sm:text-2xl font-black text-orange-400">82 / 100</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-[11px] font-bold text-slate-400 uppercase">AI Citation Share</p>
                <p className="text-xl sm:text-2xl font-black text-purple-400">48%</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                Want to unlock all 100M+ keyword ideas and full competitor backlink audit for <span className="font-bold text-white">{searchedQuery}</span>?
              </div>
              <button
                type="button"
                onClick={() => {
                  setSignUpStep("form");
                  setIsSignUpModalOpen(true);
                }}
                className="px-5 py-2 rounded-lg bg-[#f25f22] hover:bg-[#d94e14] text-white text-xs font-black uppercase tracking-wider shrink-0 cursor-pointer shadow-md"
              >
                Unlock Free Access
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 11: Exact Solid Orange Footer matching Page 11                       */}
      {/* ========================================================================= */}
      <footer className="bg-[#f25f22] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto sm:max-w-2xl text-left space-y-8">
          {/* Top Brand Bar */}
          <div className="flex items-center gap-2 text-white font-black text-2xl tracking-tight">
            <span>GROWLIMO</span>
            <span className="text-orange-200 text-sm font-normal">| EN</span>
          </div>

          {/* Legal Bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/90 font-medium">
            <button type="button" onClick={() => onNavigate("home")} className="hover:underline cursor-pointer">Privacy</button>
            <button type="button" onClick={() => onNavigate("home")} className="hover:underline cursor-pointer">Do Not Sell My Info</button>
            <button type="button" onClick={() => onNavigate("home")} className="hover:underline cursor-pointer">Terms of Service</button>
            <button type="button" onClick={() => onNavigate("home")} className="hover:underline cursor-pointer">Cookie Settings</button>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/80">
            <input type="checkbox" id="high-contrast" className="rounded accent-white" />
            <label htmlFor="high-contrast">High Contrast</label>
          </div>

          <p className="text-xs text-white/75 font-normal">
            © 2026, by Growlimo, LLC
          </p>

          {/* Navigate Section */}
          <div className="pt-4 border-t border-white/20">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4">
              NAVIGATE
            </h4>
            <div className="space-y-2.5 text-sm font-medium text-white/95">
              <div><button type="button" onClick={() => onNavigate("blog")} className="hover:underline cursor-pointer">Blog</button></div>
              <div><button type="button" onClick={() => onNavigate("home")} className="hover:underline cursor-pointer">Marketing Stats</button></div>
              <div><button type="button" onClick={() => onNavigate("growlimo")} className="hover:underline cursor-pointer">Results</button></div>
              <div><button type="button" onClick={() => onNavigate("home")} className="hover:underline cursor-pointer">Training</button></div>
              <div><button type="button" onClick={onOpenConsultation} className="hover:underline cursor-pointer">Consulting</button></div>
              <div><button type="button" onClick={() => onNavigate("contact")} className="hover:underline cursor-pointer">Contact</button></div>
              <div><button type="button" onClick={() => setIsSignUpModalOpen(true)} className="hover:underline cursor-pointer">Sign In</button></div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="pt-4 border-t border-white/20">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">
              NEWSLETTER
            </h4>
            <p className="text-base font-bold text-white mb-1">
              Stay Ahead of Marketing Trends
            </p>
            <p className="text-xs text-white/90 mb-4 font-normal">
              Get Muhammad Usman&apos;s latest insights delivered straight to your inbox.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 bg-white/20 rounded-xl text-xs font-bold text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>You&apos;re subscribed! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex bg-white rounded-lg p-1 text-slate-900">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    className="flex-1 px-3 py-2 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs uppercase tracking-wider rounded-md cursor-pointer transition-all"
                  >
                    SIGN UP
                  </button>
                </div>

                <div className="flex items-start gap-2 text-[11px] text-white/80 leading-snug">
                  <input
                    type="checkbox"
                    id="news-agree"
                    checked={agreeNewsletter}
                    onChange={(e) => setAgreeNewsletter(e.target.checked)}
                    className="mt-0.5 rounded accent-white"
                  />
                  <label htmlFor="news-agree">
                    By subscribing, you agree to receive marketing emails from Muhammad Usman and Growlimo. You can unsubscribe at any time. View our{" "}
                    <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
                    <span className="underline cursor-pointer">Terms &amp; Conditions</span> for more information.
                  </label>
                </div>
              </form>
            )}

            {/* Follow Me Around The Web - Premium Social Plugin */}
            <div className="pt-6 mt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white">
              <span className="font-bold text-orange-100">Follow Muhammad Usman &amp; Growlimo</span>
              <div className="flex items-center gap-2">
                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white hover:text-[#f25f22] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs"
                  title="X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white hover:text-[#f25f22] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white hover:text-[#f25f22] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs"
                  title="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white hover:text-[#f25f22] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* SIGN-UP MODAL                                                             */}
      {/* ========================================================================= */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setIsSignUpModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {signUpStep === "form" ? (
              <div>
                <div className="text-center mb-6">
                  <span className="text-2xl font-black text-[#f25f22]">Ubersuggest</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2">
                    Create your free account
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Join over 250,000 marketers and grow your organic traffic today.
                  </p>
                </div>

                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={signUpEmail}
                      onChange={(e) => setSignUpEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#f25f22] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Start for Free
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
                  No credit card required • Instant access to 100M+ keywords
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  Welcome to Ubersuggest!
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  We sent a confirmation link to <span className="font-bold text-slate-800">{signUpEmail}</span>. You can now use all free SEO tools.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSignUpModalOpen(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Start Exploring
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
