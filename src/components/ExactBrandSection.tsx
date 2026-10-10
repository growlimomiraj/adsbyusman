import React, { useState, useRef } from "react";
import { ExternalLink, Globe, Compass } from "lucide-react";
import worldPath from "../world-path.json";

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

export const ExactBrandSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<ClientBrand>(CLIENT_BRANDS[0]);
  const [hoveredBrand, setHoveredBrand] = useState<ClientBrand | null>(null);
  const mapScrollRef = useRef<HTMLDivElement>(null);

  const activeBrand = hoveredBrand || selectedBrand;

  // Center selected brand on mobile view when tapped
  const handleSelectBrand = (brand: ClientBrand) => {
    setSelectedBrand(brand);
    if (mapScrollRef.current) {
      const container = mapScrollRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      if (scrollWidth > clientWidth) {
        const targetScroll = (brand.x / 2000) * scrollWidth - clientWidth / 2;
        container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
      }
    }
  };

  return (
    <section id="brands-section" className="w-full bg-white text-slate-900 py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-y border-slate-200 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Global strategy, local execution
          </h2>
          
          {/* Orange Accent Bar */}
          <div className="w-12 sm:w-14 h-[3px] sm:h-[3.5px] bg-[#ff5722] rounded-full mx-auto my-3 sm:my-5 shadow-sm" />
          
          {/* Paragraph Subtitle */}
          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal px-2">
            For our clients, we orchestrate the right mix of talent to build <strong className="text-slate-900 font-bold">the perfect team</strong>. We put a strong focus on chemistry, relevant experience and proximity. For our employees, it doesn't matter where you live, we have employees all over the world.
          </p>
        </div>

        {/* CLIENT BRAND QUICK SELECTOR PILLS (Horizontal Swipe on Mobile) */}
        <div className="mb-4 sm:mb-6">
          <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-none -mx-3 sm:mx-0 px-3 sm:px-0">
            {CLIENT_BRANDS.map((brand) => {
              const isSelected = selectedBrand.id === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => handleSelectBrand(brand)}
                  onMouseEnter={() => setHoveredBrand(brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className={`shrink-0 px-3.5 py-2 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer touch-manipulation ${
                    isSelected
                      ? "bg-[#ff5722] text-white shadow-md shadow-orange-500/30 scale-105 ring-2 ring-[#ff5722]/40"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 active:bg-slate-300"
                  }`}
                >
                  <span
                    className={`w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full transition-colors ${
                      isSelected ? "bg-white" : "bg-[#ff5722]"
                    }`}
                  />
                  <span>{brand.name}</span>
                </button>
              );
            })}
          </div>
          
          {/* Mobile Pan Indicator */}
          <div className="sm:hidden flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium mt-1">
            <Compass className="w-3.5 h-3.5 text-[#ff5722] animate-spin" style={{ animationDuration: '6s' }} />
            <span>Pan map or tap brands above to explore global hubs</span>
          </div>
        </div>

        {/* DOTTED WORLD MAP CANVAS (High Resolution & Scrollable on Mobile) */}
        <div className="relative w-full max-w-5xl mx-auto my-3 sm:my-8 rounded-2xl bg-gradient-to-b from-slate-50/60 to-white border border-slate-100 shadow-sm sm:shadow-none p-1 sm:p-0">
          
          <div 
            ref={mapScrollRef}
            className="w-full overflow-x-auto overflow-y-hidden scrollbar-none rounded-xl"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* On mobile, min-width 780px ensures the map is 2.5x larger and readable */}
            <div className="relative min-w-[780px] sm:min-w-0 w-full aspect-[2000/857] flex items-center justify-center py-2">
              
              {/* Active Floating Tooltip Card (Desktop View) */}
              {activeBrand && (
                <div 
                  className="hidden sm:block absolute z-20 pointer-events-auto transform -translate-x-1/2 -translate-y-full mb-4 px-4 py-3 bg-slate-950 text-white rounded-xl shadow-2xl border border-slate-800 transition-all duration-200 min-w-[220px] max-w-[280px]"
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

              <svg
                viewBox="0 0 2000 857"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* High Density Dot Grid Pattern */}
                  <pattern
                    id="client-dot-matrix-grid"
                    x="0"
                    y="0"
                    width="11"
                    height="11"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="5.5" cy="5.5" r="1.75" fill="#94a3b8" />
                  </pattern>

                  {/* Continental Landmass Mask */}
                  <mask id="client-world-continent-mask">
                    <rect width="2000" height="857" fill="black" />
                    <path d={worldPath.d} fill="white" />
                  </mask>

                  {/* Professional Drop Shadow & Glow for Orange Pin Markers */}
                  <filter id="client-pin-drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#ff5722" floodOpacity="0.65" />
                  </filter>
                </defs>

                {/* Dotted Continents */}
                <rect
                  width="2000"
                  height="857"
                  fill="url(#client-dot-matrix-grid)"
                  mask="url(#client-world-continent-mask)"
                />

                {/* ONLY CLIENT COMPANY LOCATION PINS (Big & Professional Touch Targets) */}
                {CLIENT_BRANDS.map((brand) => {
                  const isSelected = activeBrand?.id === brand.id;
                  return (
                    <g
                      key={brand.id}
                      className="cursor-pointer group"
                      onClick={() => handleSelectBrand(brand)}
                      onMouseEnter={() => setHoveredBrand(brand)}
                      onMouseLeave={() => setHoveredBrand(null)}
                    >
                      {/* Generous Invisible Touch Target (60px equivalent on mobile) */}
                      <circle
                        cx={brand.x}
                        cy={brand.y}
                        r="30"
                        className="fill-transparent"
                      />

                      {/* Smooth Ambient Pulse Ping */}
                      <circle
                        cx={brand.x}
                        cy={brand.y}
                        r={isSelected ? "22" : "14"}
                        className={`fill-[#ff5722] transition-all duration-300 ${
                          isSelected ? "opacity-40 animate-ping" : "opacity-20"
                        }`}
                        style={{ animationDuration: isSelected ? "1.6s" : "3s" }}
                      />

                      {/* Outer Precision Ring for Active Selection */}
                      {isSelected && (
                        <circle
                          cx={brand.x}
                          cy={brand.y}
                          r="15"
                          className="fill-none stroke-[#ff5722] stroke-[2.5] opacity-90 animate-pulse"
                        />
                      )}

                      {/* Main Prominent Orange Marker Dot */}
                      <circle
                        cx={brand.x}
                        cy={brand.y}
                        r={isSelected ? "10.5" : "8.5"}
                        className="fill-[#ff5722] stroke-[2.5] stroke-white transition-all duration-200 group-hover:scale-125"
                        filter="url(#client-pin-drop-shadow)"
                      />

                      {/* Professional Core Beacon White Center */}
                      <circle
                        cx={brand.x}
                        cy={brand.y}
                        r={isSelected ? "3.5" : "2.5"}
                        className="fill-white pointer-events-none"
                      />

                      {/* Clean City Label On Map for Quick Scanning */}
                      <text
                        x={brand.x}
                        y={brand.y + 20}
                        textAnchor="middle"
                        className={`text-[9.5px] font-extrabold tracking-wide uppercase transition-all duration-200 select-none pointer-events-none ${
                          isSelected
                            ? "fill-[#ff5722] opacity-100"
                            : "fill-slate-600 opacity-80 group-hover:opacity-100 group-hover:fill-slate-900"
                        }`}
                      >
                        {brand.city.split('/')[0].split('&')[0].trim()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* ACTIVE BRAND SPOTLIGHT SUMMARY CARD (Optimized for Mobile & Desktop) */}
        <div className="max-w-2xl mx-auto my-4 sm:my-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-4 transition-all duration-200">
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="w-11 h-11 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/20 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-[#ff5722]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">
                  {selectedBrand.name}
                </h4>
                <span className="text-[10px] font-bold text-[#ff5722] bg-[#ff5722]/10 px-2 py-0.5 rounded-full uppercase shrink-0">
                  {selectedBrand.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 truncate sm:text-clip">
                📍 {selectedBrand.city}, {selectedBrand.country} &bull; {selectedBrand.tagline}
              </p>
            </div>
          </div>

          <a
            href={selectedBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#ff5722] active:bg-[#e04816] text-white text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
          >
            <span>Visit {selectedBrand.domain}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* THREE METRICS STATS FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-12 text-center max-w-4xl mx-auto">
          
          <div className="space-y-1">
            <p className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
              28
            </p>
            <p className="text-xs sm:text-sm font-black tracking-widest text-[#ff5722] uppercase mt-1 sm:mt-2">
              COUNTRIES
            </p>
          </div>

          <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-slate-200/80 py-4 sm:py-0 sm:px-6">
            <p className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
              1,000+
            </p>
            <p className="text-xs sm:text-sm font-black tracking-widest text-[#ff5722] uppercase mt-1 sm:mt-2">
              EMPLOYEES
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
              270+
            </p>
            <p className="text-xs sm:text-sm font-black tracking-widest text-[#ff5722] uppercase mt-1 sm:mt-2">
              CLIENTS
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
