import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export interface ClientBrand {
  id: string;
  name: string;
  domain: string;
  url: string;
  city: string;
  country: string;
  flag: string;
  category: string;
}

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: "modernwallarts",
    name: "Modern Wall Arts",
    domain: "modernwallarts.com",
    url: "https://modernwallarts.com/",
    city: "Chicago, IL",
    country: "United States",
    flag: "🇺🇸",
    category: "Luxury E-Commerce & Decor",
  },
  {
    id: "thecarhaus",
    name: "The Car Haus",
    domain: "thecarhaus.com",
    url: "https://www.thecarhaus.com/",
    city: "Dallas, TX",
    country: "United States",
    flag: "🇺🇸",
    category: "Pre-Owned Luxury Dealership",
  },
  {
    id: "humanconcern",
    name: "Human Concern Intl",
    domain: "humanconcern.org",
    url: "https://humanconcern.org/",
    city: "Ottawa / Global",
    country: "Canada",
    flag: "🇨🇦",
    category: "Global Humanitarian Relief",
  },
  {
    id: "lalahijabs",
    name: "Lala Hijabs",
    domain: "lalahijabs.com",
    url: "https://lalahijabs.com/",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    category: "DTC Modest Fashion",
  },
  {
    id: "servicemycar",
    name: "Service My Car",
    domain: "servicemycar.com",
    url: "https://servicemycar.com/uae",
    city: "Dubai & London",
    country: "UAE / UK",
    flag: "🇦🇪",
    category: "Auto Tech & Servicing",
  },
  {
    id: "azcorealestate",
    name: "AZCO Real Estate",
    domain: "azcorealestate.ae",
    url: "https://www.azcorealestate.ae/",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    category: "Luxury Real Estate",
  },
  {
    id: "alhurrcarrental",
    name: "Al Hurr Car Rental",
    domain: "alhurrcarrental.ae",
    url: "https://www.alhurrcarrental.ae/en",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    category: "Fleet Mobility & Rentals",
  },
  {
    id: "miragerentcar",
    name: "Mirage Rent a Car",
    domain: "miragerentcar.com",
    url: "https://miragerentcar.com/",
    city: "Dubai Marina",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    category: "VIP Supercar Rentals",
  },
  {
    id: "onlytourism",
    name: "Only Tourism",
    domain: "onlytourism.com",
    url: "https://onlytourism.com/",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    category: "VIP Travel & Tourism",
  },
  {
    id: "mmcdubai",
    name: "MMC Dubai",
    domain: "mmcdubai.ae",
    url: "https://mmcdubai.ae/",
    city: "Business Bay, Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    category: "Corporate Advisory",
  },
];

export const ExactBrandSection: React.FC = () => {
  const [metricSet, setMetricSet] = useState<"npd" | "agency">("npd");

  return (
    <section 
      id="locations" 
      className="bg-white text-slate-900 py-16 sm:py-24 border-y border-slate-100 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. LOCATIONS EYEBROW (Exact NP Digital style) */}
        <p className="text-center text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#1a1a1a] mb-2 sm:mb-3">
          LOCATIONS
        </p>

        {/* 2. MAIN HEADING (Exact NP Digital style) */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
          Global strategy, local execution
        </h2>

        {/* 3. SIGNATURE ORANGE DIVIDER (Exact NP Digital style: #ff5e29) */}
        <div className="w-14 sm:w-16 h-1 bg-[#ff5e29] mx-auto my-4 sm:my-5 rounded-full" />

        {/* 4. CENTERED DESCRIPTION (Exact NP Digital style) */}
        <p className="text-center text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
          For our clients, we orchestrate the right mix of talent to build{" "}
          <strong className="text-slate-900 font-bold">the perfect team</strong>. We put a strong focus on chemistry, relevant experience and proximity. For our employees, it doesn’t matter where you live, we have employees all over the world.
        </p>

        {/* 5. THE AUTHENTIC NP DIGITAL WORLD MAP WITH DOTS (Static & Non-Clickable as requested) */}
        <div className="relative w-full max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="relative w-full aspect-[1260/611] overflow-hidden rounded-lg">
            <img 
              src="/map-with-dots.png" 
              alt="Global strategy, local execution map with location dots" 
              className="w-full h-full object-contain pointer-events-none select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* 6. THE 3 BIG STATS (Exact NP Digital animated number styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-4xl mx-auto text-center pt-6 sm:pt-10 border-t border-slate-100">
          
          {metricSet === "npd" ? (
            <>
              {/* 28 COUNTRIES */}
              <div className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#111827] tracking-tight leading-none">
                  28
                </span>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#ff5e29] mt-3 sm:mt-4">
                  COUNTRIES
                </span>
              </div>

              {/* 1,000+ EMPLOYEES */}
              <div className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#111827] tracking-tight leading-none">
                  1,000<span className="text-4xl sm:text-5xl md:text-6xl">+</span>
                </span>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#ff5e29] mt-3 sm:mt-4">
                  EMPLOYEES
                </span>
              </div>

              {/* 270+ CLIENTS */}
              <div className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#111827] tracking-tight leading-none">
                  270<span className="text-4xl sm:text-5xl md:text-6xl">+</span>
                </span>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#ff5e29] mt-3 sm:mt-4">
                  CLIENTS
                </span>
              </div>
            </>
          ) : (
            <>
              {/* 10+ ENTERPRISE BRANDS */}
              <div className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#111827] tracking-tight leading-none">
                  10<span className="text-4xl sm:text-5xl md:text-6xl">+</span>
                </span>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#ff5e29] mt-3 sm:mt-4">
                  ENTERPRISE BRANDS
                </span>
              </div>

              {/* $50M+ AD SPEND */}
              <div className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#111827] tracking-tight leading-none">
                  $50M<span className="text-4xl sm:text-5xl md:text-6xl">+</span>
                </span>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#ff5e29] mt-3 sm:mt-4">
                  AD SPEND SCALED
                </span>
              </div>

              {/* 4.8x AVERAGE ROAS */}
              <div className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#111827] tracking-tight leading-none">
                  4.8x
                </span>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#ff5e29] mt-3 sm:mt-4">
                  AVERAGE ROAS
                </span>
              </div>
            </>
          )}

        </div>

        {/* Metric Mode Switch */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setMetricSet(metricSet === "npd" ? "agency" : "npd")}
            className="text-xs text-slate-500 hover:text-[#ff5e29] transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold"
          >
            <span>{metricSet === "npd" ? "Switch to Performance Metrics ($50M+ Spend)" : "Switch to Global Scale (28 Countries • 1,000+ Team)"}</span>
            <span className="text-[#ff5e29]">&rarr;</span>
          </button>
        </div>

        {/* 7. VERIFIED ENTERPRISE PARTNERS DIRECTORY */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-slate-100">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-700">
              Verified Enterprise Partners Across North America & the Middle East
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {CLIENT_BRANDS.map((brand) => (
              <a
                key={brand.id}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-orange-50/70 border border-slate-200/80 hover:border-[#ff5e29]/40 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all shadow-2xs hover:shadow-sm"
              >
                <span>{brand.flag}</span>
                <span>{brand.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#ff5e29] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
