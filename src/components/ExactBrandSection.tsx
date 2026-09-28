import React, { useState } from "react";
import { MapPin, ExternalLink, Globe2 } from "lucide-react";

interface BrandPin {
  id: string;
  name: string;
  domain: string;
  city: string;
  region: string;
  category: string;
  url: string;
  // Percentage coordinates on map (0-100%)
  x: number;
  y: number;
  tagline: string;
  badge: string;
}

export const ExactBrandSection: React.FC = () => {
  const [activeBrandId, setActiveBrandId] = useState<string | null>("servicemycar");
  const [viewMode, setViewMode] = useState<"map" | "grid">("map");

  const brands: BrandPin[] = [
    {
      id: "servicemycar",
      name: "Service My Car",
      domain: "servicemycar.com",
      city: "Dubai & London",
      region: "UAE / United Kingdom",
      category: "Auto Tech & Servicing",
      url: "https://servicemycar.com",
      x: 61,
      y: 43,
      tagline: "Middle East & UK's Largest Car Servicing Network",
      badge: "Automotive Tech",
    },
    {
      id: "azco",
      name: "AZCO Real Estate",
      domain: "azcorealestate.ae",
      city: "Dubai",
      region: "United Arab Emirates",
      category: "Luxury Property Brokerage",
      url: "https://azcorealestate.ae",
      x: 64,
      y: 46,
      tagline: "Award-Winning Luxury Property Brokerage in Dubai",
      badge: "Prime Real Estate",
    },
    {
      id: "modernwallarts",
      name: "Modern Wall Arts",
      domain: "modernwallarts.com",
      city: "Chicago / Global",
      region: "North America",
      category: "Luxury E-Commerce & Decor",
      url: "https://modernwallarts.com",
      x: 23,
      y: 33,
      tagline: "Custom Contemporary Islamic & Modern Wall Art",
      badge: "E-Commerce",
    },
    {
      id: "humanconcern",
      name: "Human Concern Intl",
      domain: "humanconcern.org",
      city: "Ottawa / Global",
      region: "Canada / Worldwide",
      category: "Global Humanitarian Relief",
      url: "https://humanconcern.org",
      x: 27,
      y: 28,
      tagline: "Canada's Oldest Global Relief & Development Charity",
      badge: "Global NGO",
    },
    {
      id: "getchecked",
      name: "Get Checked Clinic",
      domain: "getcheckedclinic.com",
      city: "London / Global",
      region: "United Kingdom",
      category: "Clinical Diagnostics",
      url: "https://getcheckedclinic.com",
      x: 48,
      y: 29,
      tagline: "Confidential Clinical Testing & Diagnostics",
      badge: "Healthcare",
    },
    {
      id: "thecarhaus",
      name: "The Car Haus",
      domain: "thecarhaus.com",
      city: "Dallas / Texas",
      region: "United States",
      category: "Pre-Owned Luxury Dealership",
      url: "https://thecarhaus.com",
      x: 20,
      y: 40,
      tagline: "Pre-Owned Luxury & Performance Vehicles",
      badge: "Automotive",
    },
    {
      id: "lalahijabs",
      name: "Lala Hijabs",
      domain: "lalahijabs.com",
      city: "Toronto",
      region: "Canada / Global",
      category: "Direct-to-Consumer Modest Wear",
      url: "https://lalahijabs.com",
      x: 29,
      y: 32,
      tagline: "Premium Sustainable Modest Wear & Accessories",
      badge: "Fashion DTC",
    },
    {
      id: "alhurr",
      name: "Al Hurr Car Rental",
      domain: "alhurrcarrental.ae",
      city: "Dubai",
      region: "United Arab Emirates",
      category: "Fleet Mobility & Rentals",
      url: "https://alhurrcarrental.ae",
      x: 62.5,
      y: 47,
      tagline: "Leading Daily & Monthly Car Rental Across UAE",
      badge: "UAE Fleet",
    },
    {
      id: "mirage",
      name: "Mirage Rent a Car",
      domain: "miragerentcar.com",
      city: "Dubai Marina",
      region: "United Arab Emirates",
      category: "VIP Exotic & Supercar Rentals",
      url: "https://miragerentcar.com",
      x: 63.5,
      y: 49.5,
      tagline: "VIP Supercar & Executive Fleet in Dubai",
      badge: "Exotic Rentals",
    },
    {
      id: "onlytourism",
      name: "Only Tourism",
      domain: "onlytourism.com",
      city: "Dubai",
      region: "Middle East",
      category: "Destination Management & Tours",
      url: "https://onlytourism.com",
      x: 65,
      y: 52,
      tagline: "Premier Dubai & Middle East Excursions & Packages",
      badge: "Tourism",
    },
    {
      id: "mmcdubai",
      name: "MMC Dubai",
      domain: "mmcdubai.ae",
      city: "Business Bay, Dubai",
      region: "United Arab Emirates",
      category: "Corporate & Management Advisory",
      url: "https://mmcdubai.ae",
      x: 66,
      y: 44.5,
      tagline: "Management Advisory & Strategic Business Solutions",
      badge: "B2B Consulting",
    },
  ];

  const activeBrand = brands.find((b) => b.id === activeBrandId) || brands[0];

  return (
    <section id="brands-section" className="bg-[#0e1014] text-white py-20 sm:py-28 relative overflow-hidden select-none">
      {/* 1. Base Gradient: Transitioning from dark obsidian at top to deep ember at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1014] via-[#111318] to-[#1f1614] pointer-events-none" />

      {/* 2. Uniform High-End Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] [background-size:20px_20px] pointer-events-none opacity-80" />

      {/* 3. Warm Ember Glow at Bottom */}
      <div className="absolute -bottom-10 inset-x-0 h-96 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-[radial-gradient(ellipse_at_bottom,_rgba(242,95,34,0.28)_0%,_rgba(180,60,15,0.15)_45%,_transparent_75%)] blur-2xl" />
      </div>

      {/* 4. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_#0e1014_98%)] pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 mb-3">
          <Globe2 className="w-3.5 h-3.5 text-[#f25f22]" />
          <span>Global Footprint &amp; Client Locations</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-3">
          Brands Scaled Across The World
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Hover or tap any location pin on the interactive world map to explore the global enterprises, e-commerce empires, and UAE market leaders we scale.
        </p>

        {/* View Switcher: Interactive Map vs Clean Logos */}
        <div className="inline-flex items-center p-1 rounded-xl bg-white/5 border border-white/10 mt-6 text-xs font-bold">
          <button
            onClick={() => setViewMode("map")}
            className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === "map"
                ? "bg-[#f25f22] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Interactive World Map
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-[#f25f22] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Clean Logo Grid
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: INTERACTIVE WORLD MAP WITH PINS */}
      {viewMode === "map" && (
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] min-h-[400px] sm:min-h-[520px] rounded-3xl bg-[#13161c]/80 border border-white/10 overflow-hidden shadow-2xl p-4 sm:p-8 flex items-center justify-center">
            
            {/* Background Grid Pattern inside Map */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Stylized World Vector Map matching the reference shapes */}
            <svg
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full text-[#242833] fill-current pointer-events-none"
            >
              {/* North America */}
              <path d="M140,70 Q240,40 330,60 Q430,80 440,130 Q460,190 390,220 Q400,270 370,330 Q330,370 280,390 Q290,440 320,460 Q280,470 250,420 Q200,340 180,290 Q130,220 110,150 Q70,120 140,70 Z" />
              <path d="M470,40 Q530,35 560,55 Q530,100 500,115 Q460,80 470,40 Z" />
              {/* South America */}
              <path d="M330,400 Q390,390 440,440 Q490,490 470,550 Q430,600 380,625 Q355,620 350,570 Q340,500 310,450 Q305,425 330,400 Z" />
              {/* Europe & UK */}
              <path d="M570,110 Q630,70 680,80 Q700,120 650,150 Q700,180 735,160 Q735,210 690,230 Q630,235 600,205 Q580,180 590,110 Z" />
              {/* Africa */}
              <path d="M590,270 Q700,250 730,290 Q760,350 740,410 Q715,480 680,560 Q630,590 610,540 Q590,470 560,420 Q540,360 550,310 Q560,270 590,270 Z" />
              {/* Asia & Middle East */}
              <path d="M720,160 Q860,110 1020,110 Q1120,130 1150,190 Q1100,230 1040,245 Q1030,300 970,340 Q910,365 870,385 Q820,350 800,290 Q750,300 710,275 Q700,210 720,160 Z" />
              {/* Australia */}
              <path d="M990,440 Q1090,430 1120,470 Q1105,530 1050,545 Q990,530 975,490 Q970,460 990,440 Z" />
            </svg>

            {/* Glowing Map Location Pins */}
            {brands.map((brand) => {
              const isSelected = activeBrandId === brand.id;
              return (
                <div
                  key={brand.id}
                  style={{ left: `${brand.x}%`, top: `${brand.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  onMouseEnter={() => setActiveBrandId(brand.id)}
                  onClick={() => setActiveBrandId(brand.id)}
                >
                  {/* Ping Animation on Pin */}
                  <div className="relative flex items-center justify-center cursor-pointer">
                    <span
                      className={`absolute w-6 h-6 rounded-full transition-all ${
                        isSelected
                          ? "bg-[#f25f22]/50 animate-ping"
                          : "bg-white/20 group-hover:bg-[#f25f22]/40"
                      }`}
                    />
                    <div
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${
                        isSelected
                          ? "bg-[#f25f22] border-white scale-125 shadow-[#f25f22]/50"
                          : "bg-[#181b22] border-[#f25f22] group-hover:scale-115 group-hover:bg-[#f25f22] group-hover:border-white"
                      }`}
                    >
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white" />
                    </div>

                    {/* Compact floating brand pill label next to pin */}
                    <div
                      className={`absolute left-full ml-2 px-2 py-0.5 rounded-md whitespace-nowrap text-[10px] font-bold tracking-tight transition-all duration-200 pointer-events-none hidden sm:block ${
                        isSelected
                          ? "bg-white text-slate-900 shadow-md translate-x-0 opacity-100"
                          : "bg-black/60 text-slate-300 border border-white/10 group-hover:bg-white group-hover:text-slate-900 group-hover:opacity-100"
                      }`}
                    >
                      {brand.name}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Active Brand Popover Card Overlay inside Map */}
            {activeBrand && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-30 max-w-sm w-full bg-[#161920]/95 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
                    {activeBrand.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <MapPin className="w-3 h-3 text-[#f25f22]" />
                    <span>{activeBrand.city}</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-white">{activeBrand.name}</h3>
                <p className="text-xs text-slate-300 mt-1 mb-3 leading-relaxed">
                  {activeBrand.tagline}
                </p>

                <div className="flex items-center justify-between pt-2.5 border-t border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[180px]">
                    {activeBrand.domain}
                  </span>
                  <a
                    href={activeBrand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#f25f22] hover:text-orange-400 transition-colors"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Quick-Select Brand Chips Beneath Map */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {brands.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBrandId(b.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  activeBrandId === b.id
                    ? "bg-[#f25f22] border-[#f25f22] text-white shadow-md shadow-[#f25f22]/20"
                    : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* VIEW MODE 2: CLEAN LOGO GRID MATCHING REFERENCE AESTHETIC */}
      {viewMode === "grid" && (
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-12 sm:gap-x-20 max-w-3xl mx-auto items-center justify-items-center">
            
            {/* ROW 1: modernwallarts.com & servicemycar.com */}
            <div className="w-full flex justify-center items-center">
              <a
                href="https://modernwallarts.com"
                target="_blank"
                rel="noopener noreferrer"
                title="modernwallarts.com"
                className="flex items-center justify-center h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-7 h-7 text-white shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="5" y="5" width="30" height="30" rx="5" />
                    <path d="M10 28 L18 17 L24 23 L28 17 L32 23" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="15" cy="13" r="2.5" fill="currentColor" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="font-serif italic font-extrabold text-[18px] sm:text-[20px] text-white tracking-wide block whitespace-nowrap">
                      ModernWallArts
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 font-sans block font-bold mt-1">
                      MODERNWALLARTS.COM
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full flex justify-center items-center">
              <a
                href="https://servicemycar.com"
                target="_blank"
                rel="noopener noreferrer"
                title="servicemycar.com"
                className="flex items-center justify-center h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-lg sm:text-[22px] font-black tracking-tight text-white font-sans uppercase">
                    ServiceMyCar
                  </span>
                  <div className="grid grid-cols-2 gap-0.5 w-3 h-3 ml-0.5 shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* ROW 2: getcheckedclinic.com & humanconcern.org */}
            <div className="w-full flex justify-center items-center">
              <a
                href="https://getcheckedclinic.com"
                target="_blank"
                rel="noopener noreferrer"
                title="getcheckedclinic.com"
                className="flex flex-col items-center justify-center h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="flex items-center gap-1.5 mb-1 whitespace-nowrap">
                  <div className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-0.5 bg-white"></div>
                  </div>
                  <span className="font-extrabold text-[15px] sm:text-[17px] tracking-[0.16em] text-white uppercase font-sans">
                    GET CHECKED
                  </span>
                </div>
                <span className="text-[8px] font-bold tracking-[0.22em] text-slate-400 uppercase">
                  GETCHECKEDCLINIC.COM
                </span>
              </a>
            </div>

            <div className="w-full flex justify-center items-center">
              <a
                href="https://humanconcern.org"
                target="_blank"
                rel="noopener noreferrer"
                title="humanconcern.org"
                className="flex items-center justify-center h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="font-serif italic font-black text-lg sm:text-[21px] tracking-wide text-white block whitespace-nowrap">
                      Human Concern
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 font-sans block">
                      HUMANCONCERN.ORG
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* ROW 3: thecarhaus.com & lalahijabs.com */}
            <div className="w-full flex justify-center items-center">
              <a
                href="https://thecarhaus.com"
                target="_blank"
                rel="noopener noreferrer"
                title="thecarhaus.com"
                className="flex items-center justify-center h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="relative font-black italic text-lg sm:text-[23px] tracking-widest text-white font-sans text-center whitespace-nowrap">
                  THE CAR HAUS
                  <div className="absolute top-[52%] left-0 w-full h-[2px] bg-[#101216] -translate-y-1/2"></div>
                </div>
              </a>
            </div>

            <div className="w-full flex justify-center items-center">
              <a
                href="https://lalahijabs.com"
                target="_blank"
                rel="noopener noreferrer"
                title="lalahijabs.com"
                className="flex items-center justify-center gap-2 h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                <span className="font-bold text-lg sm:text-[21px] tracking-wide text-white font-sans whitespace-nowrap">
                  lala hijabs
                </span>
              </a>
            </div>

            {/* ROW 4: alhurrcarrental.ae & miragerentcar.com */}
            <div className="w-full flex justify-center items-center">
              <a
                href="https://alhurrcarrental.ae"
                target="_blank"
                rel="noopener noreferrer"
                title="alhurrcarrental.ae"
                className="flex items-center justify-center gap-1.5 h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group whitespace-nowrap"
              >
                <span className="font-extrabold text-sm sm:text-[15px] tracking-wider text-white uppercase">
                  AL HURR
                </span>
                <span className="text-white font-light text-xs sm:text-sm tracking-tight">\\ CAR RENTAL</span>
              </a>
            </div>

            <div className="w-full flex justify-center items-center">
              <a
                href="https://miragerentcar.com"
                target="_blank"
                rel="noopener noreferrer"
                title="miragerentcar.com"
                className="flex items-center justify-center gap-2 h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.5 19L11 4.5L14 9.5L8.5 19H2.5ZM14.5 10.5L19.5 19H13.5L11.5 15.5L14.5 10.5Z" />
                </svg>
                <span className="font-light tracking-[0.25em] text-sm sm:text-[16px] text-white font-sans uppercase whitespace-nowrap">
                  MIRAGE
                </span>
              </a>
            </div>

            {/* ROW 5: onlytourism.com & mmcdubai.ae */}
            <div className="w-full flex justify-center items-center">
              <a
                href="https://onlytourism.com"
                target="_blank"
                rel="noopener noreferrer"
                title="onlytourism.com"
                className="flex items-center justify-center h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="font-black text-base sm:text-[18px] tracking-wide text-white uppercase font-sans block whitespace-nowrap">
                      ONLY TOURISM
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 font-sans block font-bold">
                      ONLYTOURISM.COM
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full flex justify-center items-center">
              <a
                href="https://mmcdubai.ae"
                target="_blank"
                rel="noopener noreferrer"
                title="mmcdubai.ae"
                className="flex items-center justify-center gap-2 h-14 w-full max-w-[260px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="flex flex-col gap-0.5 shrink-0">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white/40"></div>
                    <div className="w-1.5 h-1.5 bg-white"></div>
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                    <div className="w-1.5 h-1.5 bg-white/70"></div>
                  </div>
                </div>
                <span className="font-bold text-xl sm:text-2xl tracking-tight text-white font-sans uppercase whitespace-nowrap">
                  mmc <span className="text-xs font-normal tracking-widest text-slate-300">DUBAI</span>
                </span>
              </a>
            </div>

            {/* ROW 6: azcorealestate.ae */}
            <div className="w-full sm:col-span-2 flex justify-center items-center mt-2">
              <a
                href="https://azcorealestate.ae"
                target="_blank"
                rel="noopener noreferrer"
                title="azcorealestate.ae"
                className="flex flex-col items-center justify-center h-14 w-full max-w-[300px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <span className="font-extrabold text-xl sm:text-[24px] tracking-[0.22em] text-white font-sans uppercase block whitespace-nowrap">
                  AZCO
                </span>
                <span className="text-[8.5px] font-bold tracking-[0.24em] text-slate-400 uppercase block mt-0.5">
                  REAL ESTATE • AZCOREALESTATE.AE
                </span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
