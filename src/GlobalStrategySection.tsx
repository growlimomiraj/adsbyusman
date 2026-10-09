import React, { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";
import worldPath from "./world-path.json";

export interface ClientBrand {
  id: string;
  name: string;
  domain: string;
  url: string;
  city: string;
  country: string;
  category: string;
  tagline: string;
  x: number;
  y: number;
}

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: "modernwallarts",
    name: "Modern Wall Arts",
    domain: "modernwallarts.com",
    url: "https://modernwallarts.com/",
    city: "Chicago",
    country: "United States",
    category: "Luxury E-Commerce",
    tagline: "Contemporary & Custom Wall Art",
    x: 515,
    y: 240,
  },
  {
    id: "thecarhaus",
    name: "The Car Haus",
    domain: "thecarhaus.com",
    url: "https://www.thecarhaus.com/",
    city: "Dallas, Texas",
    country: "United States",
    category: "Luxury Dealership",
    tagline: "Pre-Owned Exotic & Luxury Vehicles",
    x: 470,
    y: 300,
  },
  {
    id: "humanconcern",
    name: "Human Concern International",
    domain: "humanconcern.org",
    url: "https://humanconcern.org/",
    city: "Ottawa",
    country: "Canada",
    category: "Global NGO",
    tagline: "Canada's Oldest Global Relief Organization",
    x: 580,
    y: 195,
  },
  {
    id: "lalahijabs",
    name: "Lala Hijabs",
    domain: "lalahijabs.com",
    url: "https://lalahijabs.com/",
    city: "Toronto",
    country: "Canada",
    category: "DTC Modest Fashion",
    tagline: "Global Direct-to-Consumer Modest Wear",
    x: 555,
    y: 210,
  },
  {
    id: "servicemycar",
    name: "Service My Car",
    domain: "servicemycar.com",
    url: "https://servicemycar.com/uae",
    city: "Dubai & London",
    country: "UAE / United Kingdom",
    category: "Auto Tech & Servicing",
    tagline: "Largest On-Demand Auto Servicing Network",
    x: 1290,
    y: 345,
  },
  {
    id: "azcorealestate",
    name: "AZCO Real Estate",
    domain: "azcorealestate.ae",
    url: "https://www.azcorealestate.ae/",
    city: "Dubai",
    country: "United Arab Emirates",
    category: "Luxury Real Estate",
    tagline: "Award-Winning Luxury Property Brokerage",
    x: 1308,
    y: 336,
  },
  {
    id: "alhurrcarrental",
    name: "Al Hurr Car Rental",
    domain: "alhurrcarrental.ae",
    url: "https://www.alhurrcarrental.ae/en",
    city: "Dubai",
    country: "United Arab Emirates",
    category: "Fleet Mobility",
    tagline: "Premium Car Rental & Fleet Management",
    x: 1276,
    y: 340,
  },
  {
    id: "miragerentcar",
    name: "Mirage Rent a Car",
    domain: "miragerentcar.com",
    url: "https://miragerentcar.com/",
    city: "Dubai Marina",
    country: "United Arab Emirates",
    category: "Exotic Rentals",
    tagline: "VIP Exotic & Supercar Rental Services",
    x: 1290,
    y: 358,
  },
  {
    id: "onlytourism",
    name: "Only Tourism",
    domain: "onlytourism.com",
    url: "https://onlytourism.com/",
    city: "Dubai",
    country: "United Arab Emirates",
    category: "Destination Management",
    tagline: "Exclusive UAE VIP Tourism & Tours",
    x: 1305,
    y: 354,
  },
  {
    id: "mmcdubai",
    name: "MMC Dubai",
    domain: "mmcdubai.ae",
    url: "https://mmcdubai.ae/",
    city: "Business Bay, Dubai",
    country: "United Arab Emirates",
    category: "Corporate Advisory",
    tagline: "Corporate & Management Consulting",
    x: 1318,
    y: 346,
  },
];

export default function GlobalStrategySection() {
  const [selectedBrand, setSelectedBrand] = useState<ClientBrand>(CLIENT_BRANDS[0]);
  const [hoveredBrand, setHoveredBrand] = useState<ClientBrand | null>(null);

  const activeBrand = hoveredBrand || selectedBrand;

  return (
    <section id="brands-section" className="w-full bg-white text-slate-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-200 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Global strategy, local execution
          </h2>
          
          {/* Orange Accent Bar */}
          <div className="w-14 h-[3.5px] bg-[#ff5722] rounded-full mx-auto my-5 shadow-sm" />
          
          {/* Paragraph Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            For our clients, we orchestrate the right mix of talent to build <strong className="text-slate-900 font-bold">the perfect team</strong>. We put a strong focus on chemistry, relevant experience and proximity. For our employees, it doesn't matter where you live, we have employees all over the world.
          </p>
        </div>

        {/* CLIENT BRAND QUICK SELECTOR PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-6">
          {CLIENT_BRANDS.map((brand) => {
            const isSelected = selectedBrand.id === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                onMouseEnter={() => setHoveredBrand(brand)}
                onMouseLeave={() => setHoveredBrand(null)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#ff5722] text-white shadow-md shadow-orange-500/25 scale-105"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-white" : "bg-[#ff5722]"
                  }`}
                />
                <span>{brand.name}</span>
              </button>
            );
          })}
        </div>

        {/* DOTTED WORLD MAP CANVAS */}
        <div className="relative w-full max-w-5xl mx-auto my-6 sm:my-10">
          
          {/* Active Floating Tooltip Card */}
          {activeBrand && (
            <div 
              className="absolute z-20 pointer-events-auto transform -translate-x-1/2 -translate-y-full mb-4 px-4 py-3 bg-slate-950 text-white rounded-xl shadow-2xl border border-slate-800 transition-all duration-200 min-w-[220px] max-w-[280px]"
              style={{
                left: `${(activeBrand.x / 2000) * 100}%`,
                top: `${(activeBrand.y / 857) * 100}%`,
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff5722] bg-[#ff5722]/10 px-2 py-0.5 rounded">
                  {activeBrand.category}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {activeBrand.country}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
                {activeBrand.name}
              </h4>

              <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                {activeBrand.tagline}
              </p>

              <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  📍 {activeBrand.city}
                </span>
                <a
                  href={activeBrand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#ff5722] hover:text-orange-400 transition"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          <div className="relative w-full aspect-[2000/857] flex items-center justify-center">
            <svg
              viewBox="0 0 2000 857"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Dot Grid Pattern - 11px spacing with subtle dots matching screenshot */}
                <pattern
                  id="global-dot-matrix-grid"
                  x="0"
                  y="0"
                  width="11"
                  height="11"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="5.5" cy="5.5" r="1.7" fill="#94a3b8" />
                </pattern>

                {/* Continental Landmass Mask */}
                <mask id="global-world-continent-mask">
                  <rect width="2000" height="857" fill="black" />
                  <path d={worldPath.d} fill="white" />
                </mask>

                {/* Glow filter for orange dots */}
                <filter id="global-pin-drop-shadow" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="3" floodColor="#ff5722" floodOpacity="0.6" />
                </filter>
              </defs>

              {/* Dotted Continents */}
              <rect
                width="2000"
                height="857"
                fill="url(#global-dot-matrix-grid)"
                mask="url(#global-world-continent-mask)"
              />

              {/* ONLY CLIENT COMPANY LOCATION PINS */}
              {CLIENT_BRANDS.map((brand) => {
                const isSelected = activeBrand?.id === brand.id;
                return (
                  <g
                    key={brand.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedBrand(brand)}
                    onMouseEnter={() => setHoveredBrand(brand)}
                    onMouseLeave={() => setHoveredBrand(null)}
                  >
                    {/* Animated Pulse Rings */}
                    <circle
                      cx={brand.x}
                      cy={brand.y}
                      r={isSelected ? "18" : "11"}
                      className={`fill-[#ff5722] transition-all duration-300 ${
                        isSelected ? "opacity-35 animate-ping" : "opacity-20"
                      }`}
                      style={{ animationDuration: isSelected ? "1.8s" : "3s" }}
                    />

                    {/* Outer Highlight Ring */}
                    {isSelected && (
                      <circle
                        cx={brand.x}
                        cy={brand.y}
                        r="12"
                        className="fill-none stroke-[#ff5722] stroke-[2] opacity-80"
                      />
                    )}

                    {/* Main Orange Brand Pin */}
                    <circle
                      cx={brand.x}
                      cy={brand.y}
                      r={isSelected ? "8.5" : "7"}
                      className="fill-[#ff5722] stroke-[2] stroke-white transition-transform duration-200 group-hover:scale-125"
                      filter="url(#global-pin-drop-shadow)"
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* ACTIVE BRAND SPOTLIGHT SUMMARY CARD */}
        <div className="max-w-2xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/20 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-[#ff5722]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {selectedBrand.name}
                </h4>
                <span className="text-[10px] font-bold text-[#ff5722] bg-[#ff5722]/10 px-2 py-0.5 rounded-full uppercase">
                  {selectedBrand.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                📍 {selectedBrand.city}, {selectedBrand.country} &bull; {selectedBrand.tagline}
              </p>
            </div>
          </div>

          <a
            href={selectedBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#ff5722] text-white text-xs font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Visit {selectedBrand.domain}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* THREE METRICS STATS FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 sm:pt-12 text-center max-w-4xl mx-auto">
          
          <div className="space-y-1">
            <p className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
              28
            </p>
            <p className="text-xs sm:text-sm font-black tracking-widest text-[#ff5722] uppercase mt-2">
              COUNTRIES
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
              1,000+
            </p>
            <p className="text-xs sm:text-sm font-black tracking-widest text-[#ff5722] uppercase mt-2">
              EMPLOYEES
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
              270+
            </p>
            <p className="text-xs sm:text-sm font-black tracking-widest text-[#ff5722] uppercase mt-2">
              CLIENTS
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
