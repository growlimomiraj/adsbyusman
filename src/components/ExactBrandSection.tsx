import React, { useState } from "react";
import { 
  ExternalLink, 
  Globe2, 
  Sparkles, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Building2, 
  Car, 
  ShoppingBag, 
  Compass,
  ArrowUpRight
} from "lucide-react";
import worldPath from "../world-path.json";

export interface ClientBrand {
  id: string;
  name: string;
  domain: string;
  url: string;
  city: string;
  country: string;
  flag: string;
  region: "North America" | "Middle East" | "Global";
  sector: "ecommerce" | "automotive" | "enterprise";
  category: string;
  tagline: string;
  stats: string;
  x: number; // 0 - 2000 map coordinates
  y: number; // 0 - 857 map coordinates
}

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: "servicemycar",
    name: "Service My Car",
    domain: "servicemycar.com",
    url: "https://servicemycar.com/uae",
    city: "Dubai & London",
    country: "UAE / United Kingdom",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "automotive",
    category: "Auto Tech & Servicing",
    tagline: "MENA & UK's Largest On-Demand Auto Servicing & Repair Network",
    stats: "Millions in GMV & Omnichannel App Acquisition",
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
    flag: "🇦🇪",
    region: "Middle East",
    sector: "enterprise",
    category: "Luxury Property Brokerage",
    tagline: "Multi-Award-Winning Prime Dubai Real Estate & Luxury Developments",
    stats: "High-Ticket Global Buyer Lead Generation",
    x: 1308,
    y: 336,
  },
  {
    id: "modernwallarts",
    name: "Modern Wall Arts",
    domain: "modernwallarts.com",
    url: "https://modernwallarts.com/",
    city: "Chicago, IL",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    sector: "ecommerce",
    category: "Luxury E-Commerce & Decor",
    tagline: "Contemporary Islamic & Custom Architectural Interior Artworks",
    stats: "8-Figure DTC Scale with Google & Meta Ads",
    x: 515,
    y: 240,
  },
  {
    id: "humanconcern",
    name: "Human Concern Intl",
    domain: "humanconcern.org",
    url: "https://humanconcern.org/",
    city: "Ottawa / Global",
    country: "Canada / Worldwide",
    flag: "🇨🇦",
    region: "North America",
    sector: "enterprise",
    category: "Global Humanitarian Relief",
    tagline: "Canada's Oldest Global Relief & Sustainable Development Charity",
    stats: "High-Volume Ramadan & Emergency Donation Campaigns",
    x: 580,
    y: 195,
  },
  {
    id: "thecarhaus",
    name: "The Car Haus",
    domain: "thecarhaus.com",
    url: "https://www.thecarhaus.com/",
    city: "Dallas, TX",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    sector: "automotive",
    category: "Pre-Owned Luxury Dealership",
    tagline: "High-Ticket Exotic & Luxury Automobile Dealership in Texas",
    stats: "Ultra-Low CAC Auto Finance & Lead Pipeline",
    x: 470,
    y: 300,
  },
  {
    id: "lalahijabs",
    name: "Lala Hijabs",
    domain: "lalahijabs.com",
    url: "https://lalahijabs.com/",
    city: "Toronto",
    country: "Canada / Global",
    flag: "🇨🇦",
    region: "North America",
    sector: "ecommerce",
    category: "DTC Modest Fashion",
    tagline: "Viral Global Modest Apparel Brand with Millions of Global Impressions",
    stats: "Omnichannel TikTok & Meta ROAS Scaling",
    x: 555,
    y: 210,
  },
  {
    id: "alhurrcarrental",
    name: "Al Hurr Car Rental",
    domain: "alhurrcarrental.ae",
    url: "https://www.alhurrcarrental.ae/en",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "automotive",
    category: "Fleet Mobility & Rentals",
    tagline: "Premier Fleet Mobility & Executive Long/Short-Term Car Rentals",
    stats: "Continuous Booking Velocity & Google Search Dominance",
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
    flag: "🇦🇪",
    region: "Middle East",
    sector: "automotive",
    category: "VIP Exotic & Supercar Rentals",
    tagline: "Exclusive Supercar Fleet (Lamborghini, Ferrari, Rolls-Royce, Porsche)",
    stats: "High-Ticket Tourist & Resident Conversion Engine",
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
    flag: "🇦🇪",
    region: "Middle East",
    sector: "enterprise",
    category: "Destination Management & VIP Travel",
    tagline: "High-End UAE VIP Tours, Luxury Safaris & Yacht Charters",
    stats: "International Traveler Inbound Inquiries",
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
    flag: "🇦🇪",
    region: "Middle East",
    sector: "enterprise",
    category: "Corporate & Management Advisory",
    tagline: "Strategic UAE Company Formation, Accounting & Corporate Structuring",
    stats: "High-Intent B2B Enterprise Lead Acquisition",
    x: 1318,
    y: 346,
  },
];

export const ExactBrandSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "middle-east" | "north-america" | "ecommerce" | "automotive">("all");
  const [viewMode, setViewMode] = useState<"cards" | "map">("cards");
  const [selectedMapBrand, setSelectedMapBrand] = useState<ClientBrand>(CLIENT_BRANDS[0]);

  // Filtered brands based on active tab
  const filteredBrands = CLIENT_BRANDS.filter((b) => {
    if (activeTab === "all") return true;
    if (activeTab === "middle-east") return b.region === "Middle East";
    if (activeTab === "north-america") return b.region === "North America";
    if (activeTab === "ecommerce") return b.sector === "ecommerce";
    if (activeTab === "automotive") return b.sector === "automotive";
    return true;
  });

  return (
    <section 
      id="brands-section" 
      className="relative w-full bg-[#0a0d14] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-white/10 overflow-hidden select-none"
    >
      {/* Background Radial Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(242,95,34,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.12)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-orange-400 mb-4 shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#f25f22]" />
            <span className="uppercase tracking-widest text-[11px]">Verified Client Roster &bull; $50M+ Revenue Scaled</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight font-sans mb-4">
            Global Strategy, <span className="bg-gradient-to-r from-white via-slate-100 to-[#f25f22] bg-clip-text text-transparent">Proven Execution</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            We partner exclusively with category-defining enterprises, luxury brands, and high-growth operators across North America, the UK, and the Middle East.
          </p>
        </div>

        {/* CONTROLS BAR: CATEGORY FILTER TABS & VIEW TOGGLE */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
            {[
              { id: "all", label: "All Brands (10)" },
              { id: "middle-east", label: "🇦🇪 UAE & Gulf (6)" },
              { id: "north-america", label: "🇺🇸 🇨🇦 North America (4)" },
              { id: "automotive", label: "Automotive & Fleet (4)" },
              { id: "ecommerce", label: "E-Commerce & DTC (2)" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#f25f22] text-white shadow-md shadow-orange-500/20"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Cards vs World Map */}
          <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "cards"
                  ? "bg-white/15 text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Client Showcase</span>
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "map"
                  ? "bg-[#f25f22] text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Global Map</span>
            </button>
          </div>

        </div>

        {/* VIEW 1: EXECUTIVE CLIENT SHOWCASE BENTO GRID (DEFAULT & ULTRA CLEAN) */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#f25f22]/50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Region & Category Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300">
                      <span>{brand.flag}</span>
                      <span>{brand.city}</span>
                    </span>

                    <span className="text-[10px] font-black uppercase tracking-wider text-[#f25f22] bg-[#f25f22]/10 border border-[#f25f22]/20 px-2.5 py-0.5 rounded-full">
                      {brand.category}
                    </span>
                  </div>

                  {/* Brand Headline */}
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-[#f25f22] transition-colors flex items-center justify-between">
                    <span>{brand.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#f25f22] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  {/* Tagline & Impact */}
                  <p className="text-xs sm:text-sm text-slate-300 font-normal mt-2 leading-relaxed">
                    {brand.tagline}
                  </p>
                </div>

                {/* Bottom Footer: Stats Highlight & Direct Verified Link */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] text-slate-400 font-medium truncate">
                      {brand.stats}
                    </span>
                  </div>

                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-white hover:text-[#f25f22] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: INTERACTIVE LUXURY DARK MAP */}
        {viewMode === "map" && (
          <div className="relative w-full rounded-2xl bg-white/[0.03] border border-white/10 p-2 sm:p-6 backdrop-blur-md">
            
            {/* Map Canvas */}
            <div className="relative w-full aspect-[2000/857] flex items-center justify-center overflow-hidden rounded-xl">
              <svg viewBox="0 0 2000 857" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dark-dot-grid" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
                    <circle cx="5.5" cy="5.5" r="1.75" fill="#334155" opacity="0.65" />
                  </pattern>
                  <mask id="dark-world-mask">
                    <rect width="2000" height="857" fill="black" />
                    <path d={worldPath.d} fill="white" />
                  </mask>
                  <filter id="dark-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#f25f22" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Dotted Continents */}
                <rect width="2000" height="857" fill="url(#dark-dot-grid)" mask="url(#dark-world-mask)" />

                {/* Client Location Beacon Pins */}
                {CLIENT_BRANDS.map((brand) => {
                  const isSelected = selectedMapBrand.id === brand.id;
                  return (
                    <g 
                      key={brand.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedMapBrand(brand)}
                    >
                      {/* Touch Target */}
                      <circle cx={brand.x} cy={brand.y} r="35" className="fill-transparent" />

                      {/* Radar Pulse */}
                      <circle
                        cx={brand.x}
                        cy={brand.y}
                        r={isSelected ? "24" : "16"}
                        className={`fill-[#f25f22] ${isSelected ? "opacity-50 animate-ping" : "opacity-25"}`}
                        style={{ animationDuration: isSelected ? "1.6s" : "3s" }}
                      />

                      {/* Halo */}
                      {isSelected && (
                        <circle cx={brand.x} cy={brand.y} r="16" className="fill-none stroke-[#f25f22] stroke-[2.5] opacity-90" />
                      )}

                      {/* Core Dot */}
                      <circle
                        cx={brand.x}
                        cy={brand.y}
                        r={isSelected ? "11" : "8"}
                        className="fill-[#f25f22] stroke-[2.5] stroke-white"
                        filter="url(#dark-glow)"
                      />

                      {/* Beacon White Center */}
                      <circle cx={brand.x} cy={brand.y} r="3.5" className="fill-white pointer-events-none" />

                      {/* City Text */}
                      <text
                        x={brand.x}
                        y={brand.y + 22}
                        textAnchor="middle"
                        className={`text-[10px] font-black uppercase tracking-wider ${
                          isSelected ? "fill-orange-400 font-bold" : "fill-slate-400 opacity-90"
                        }`}
                      >
                        {brand.city.split('/')[0].split('&')[0].trim()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Selected Brand Map Spotlight */}
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedMapBrand.flag}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-black text-white text-base">{selectedMapBrand.name}</h4>
                    <span className="text-[10px] font-bold text-[#f25f22] bg-[#f25f22]/10 px-2 py-0.5 rounded-full uppercase">
                      {selectedMapBrand.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    📍 {selectedMapBrand.city}, {selectedMapBrand.country} &bull; {selectedMapBrand.tagline}
                  </p>
                </div>
              </div>

              <a
                href={selectedMapBrand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#f25f22] hover:bg-orange-600 text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>Visit {selectedMapBrand.domain}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

        {/* BOTTOM METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 pt-10 border-t border-white/10 text-center">
          
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              10+
            </p>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mt-1">
              Enterprise Brands
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              $50M+
            </p>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mt-1">
              Ad Spend Scaled
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              4.8x
            </p>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mt-1">
              Average Paid ROAS
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              3 Regions
            </p>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mt-1">
              US &bull; Canada &bull; UAE
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
