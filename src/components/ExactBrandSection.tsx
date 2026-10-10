import React, { useState } from "react";
import { 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Compass,
  ArrowUpRight,
  Sun,
  Moon,
  Globe2,
  TrendingUp,
  Palette
} from "lucide-react";
import worldPath from "../world-path.json";

export interface ClientBrand {
  id: string;
  name: string;
  monogram: string;
  monogramGradient: string;
  domain: string;
  url: string;
  city: string;
  country: string;
  flag: string;
  region: "Middle East" | "North America";
  sector: "automotive" | "enterprise" | "ecommerce";
  category: string;
  service: string;
  tagline: string;
  stats: string;
  x: number; // 0 - 2000 map coordinates
  y: number; // 0 - 857 map coordinates
}

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: "servicemycar",
    name: "Service My Car",
    monogram: "SMC",
    monogramGradient: "from-blue-600 to-cyan-500",
    domain: "servicemycar.com",
    url: "https://servicemycar.com/uae",
    city: "Dubai & London",
    country: "UAE & United Kingdom",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "automotive",
    category: "Auto Tech & Servicing",
    service: "App Installs & Google Ads Scale",
    tagline: "MENA & UK's Largest On-Demand Auto Servicing & Repair Network",
    stats: "Millions in GMV & High-Volume Mobile App Acquisition",
    x: 1290,
    y: 345,
  },
  {
    id: "azcorealestate",
    name: "AZCO Real Estate",
    monogram: "AZCO",
    monogramGradient: "from-amber-500 to-yellow-600",
    domain: "azcorealestate.ae",
    url: "https://www.azcorealestate.ae/",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "enterprise",
    category: "Luxury Property Brokerage",
    service: "High-Ticket Lead Generation",
    tagline: "Multi-Award-Winning Prime Dubai Real Estate & Luxury Developments",
    stats: "Multi-Million Dollar Global Investor Lead Flow",
    x: 1308,
    y: 336,
  },
  {
    id: "modernwallarts",
    name: "Modern Wall Arts",
    monogram: "MWA",
    monogramGradient: "from-rose-500 to-orange-500",
    domain: "modernwallarts.com",
    url: "https://modernwallarts.com/",
    city: "Chicago, IL",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    sector: "ecommerce",
    category: "Luxury E-Commerce & Decor",
    service: "Full-Funnel Meta & Google Shopping",
    tagline: "Contemporary Islamic & Custom Architectural Interior Artworks",
    stats: "8-Figure DTC Scale with Omnichannel Ad Funnels",
    x: 515,
    y: 240,
  },
  {
    id: "humanconcern",
    name: "Human Concern Intl",
    monogram: "HCI",
    monogramGradient: "from-emerald-600 to-teal-500",
    domain: "humanconcern.org",
    url: "https://humanconcern.org/",
    city: "Ottawa / Global",
    country: "Canada / Worldwide",
    flag: "🇨🇦",
    region: "North America",
    sector: "enterprise",
    category: "Global Humanitarian Relief",
    service: "International Donor Scaling",
    tagline: "Canada's Oldest Global Relief & Sustainable Development NGO",
    stats: "High-Volume Ramadan & Global Emergency Donation Drives",
    x: 580,
    y: 195,
  },
  {
    id: "thecarhaus",
    name: "The Car Haus",
    monogram: "TCH",
    monogramGradient: "from-red-600 to-zinc-800",
    domain: "thecarhaus.com",
    url: "https://www.thecarhaus.com/",
    city: "Dallas, TX",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    sector: "automotive",
    category: "Pre-Owned Luxury Dealership",
    service: "High-Intent Automotive Search",
    tagline: "High-Ticket Exotic & Luxury Automobile Dealership in Texas",
    stats: "Ultra-Low CAC Auto Finance & Premium Inventory Velocity",
    x: 470,
    y: 300,
  },
  {
    id: "lalahijabs",
    name: "Lala Hijabs",
    monogram: "LH",
    monogramGradient: "from-purple-600 to-pink-500",
    domain: "lalahijabs.com",
    url: "https://lalahijabs.com/",
    city: "Toronto",
    country: "Canada / Global",
    flag: "🇨🇦",
    region: "North America",
    sector: "ecommerce",
    category: "DTC Modest Fashion",
    service: "Viral Social & Omnichannel ROAS",
    tagline: "Viral Global Modest Apparel Brand with Millions of Social Impressions",
    stats: "High-ROAS TikTok, Meta & Google Performance Scaling",
    x: 555,
    y: 210,
  },
  {
    id: "alhurrcarrental",
    name: "Al Hurr Car Rental",
    monogram: "AH",
    monogramGradient: "from-blue-700 to-indigo-600",
    domain: "alhurrcarrental.ae",
    url: "https://www.alhurrcarrental.ae/en",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "automotive",
    category: "Fleet Mobility & Rentals",
    service: "Local Google Search Dominance",
    tagline: "Premier Fleet Mobility & Executive Long/Short-Term Car Rentals",
    stats: "Continuous Booking Velocity & Local SEO Dominance",
    x: 1276,
    y: 340,
  },
  {
    id: "miragerentcar",
    name: "Mirage Rent a Car",
    monogram: "MRC",
    monogramGradient: "from-orange-600 to-amber-500",
    domain: "miragerentcar.com",
    url: "https://miragerentcar.com/",
    city: "Dubai Marina",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "automotive",
    category: "VIP Exotic & Supercar Rentals",
    service: "VIP Tourist & Resident Paid Funnels",
    tagline: "Exclusive Supercar Fleet (Lamborghini, Ferrari, Rolls-Royce, Porsche)",
    stats: "High-Ticket Luxury Tourist & Resident Conversion Engine",
    x: 1290,
    y: 358,
  },
  {
    id: "onlytourism",
    name: "Only Tourism",
    monogram: "OT",
    monogramGradient: "from-cyan-600 to-teal-500",
    domain: "onlytourism.com",
    url: "https://onlytourism.com/",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "enterprise",
    category: "Destination Management & VIP Travel",
    service: "Global Inbound Traveler Inbound Ads",
    tagline: "High-End UAE VIP Tours, Luxury Desert Safaris & Yacht Charters",
    stats: "Rapid International Traveler Inbound Inquiries",
    x: 1305,
    y: 354,
  },
  {
    id: "mmcdubai",
    name: "MMC Dubai",
    monogram: "MMC",
    monogramGradient: "from-indigo-600 to-slate-800",
    domain: "mmcdubai.ae",
    url: "https://mmcdubai.ae/",
    city: "Business Bay, Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    sector: "enterprise",
    category: "Corporate & Management Advisory",
    service: "High-Intent B2B Enterprise Acquisition",
    tagline: "Strategic UAE Company Formation, Accounting & Corporate Structuring",
    stats: "High-Intent B2B Enterprise Lead Acquisition",
    x: 1318,
    y: 346,
  },
];

export const ExactBrandSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "middle-east" | "north-america" | "automotive" | "ecommerce">("all");
  const [viewMode, setViewMode] = useState<"showcase" | "hubs" | "map">("showcase");
  // Default to clean light theme matching the site hero and user reference image
  const [themeMode, setThemeMode] = useState<"light" | "slate" | "dark">("light");
  const [selectedMapBrand, setSelectedMapBrand] = useState<ClientBrand>(CLIENT_BRANDS[0]);

  const isDarkMode = themeMode === "dark";
  const isSlateMode = themeMode === "slate";

  // Filtered brands based on active tab
  const filteredBrands = CLIENT_BRANDS.filter((b) => {
    if (activeTab === "all") return true;
    if (activeTab === "middle-east") return b.region === "Middle East";
    if (activeTab === "north-america") return b.region === "North America";
    if (activeTab === "automotive") return b.sector === "automotive";
    if (activeTab === "ecommerce") return b.sector === "ecommerce";
    return true;
  });

  const middleEastBrands = CLIENT_BRANDS.filter((b) => b.region === "Middle East");
  const northAmericaBrands = CLIENT_BRANDS.filter((b) => b.region === "North America");

  return (
    <section 
      id="brands-section" 
      className={`relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y transition-colors duration-300 overflow-hidden select-none ${
        isDarkMode 
          ? "bg-[#0b0f19] text-white border-white/10" 
          : isSlateMode
            ? "bg-[#f8fafc] text-slate-900 border-slate-200"
            : "bg-white text-slate-900 border-slate-200/80"
      }`}
    >
      {/* Background Ambience */}
      {isDarkMode ? (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(242,95,34,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.12)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        </>
      ) : (
        <>
          {/* Clean Light Ambience matching the site's hero */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(242,95,34,0.07)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.04)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-70" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* SECTION HEADER (Faithful to reference image with clean typography and signature orange accent line) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs backdrop-blur-sm ${
            isDarkMode 
              ? "bg-white/5 border border-white/10 text-orange-400" 
              : "bg-orange-50 border border-orange-200/80 text-[#f25f22]"
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#f25f22]" />
            <span className="uppercase tracking-widest text-[11px]">Verified Client Portfolio &bull; $50M+ Revenue Scaled</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Global Strategy, Local Execution
          </h2>

          {/* User's signature orange horizontal bar from reference image */}
          <div className="w-16 h-1 bg-[#f25f22] rounded-full mx-auto my-4 shadow-sm shadow-orange-500/50" />

          <p className={`text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}>
            We orchestrate high-velocity media buying, search dominance, and conversion infrastructure for category-defining leaders across North America and the Middle East.
          </p>
        </div>

        {/* CONTROLS BAR: CATEGORY FILTER TABS & VIEW/THEME SWITCHERS */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b ${
          isDarkMode ? "border-white/10" : "border-slate-200"
        }`}>
          
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
                      ? "bg-[#f25f22] text-white shadow-md shadow-orange-500/25"
                      : isDarkMode
                        ? "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5"
                        : "bg-slate-100/80 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: View Mode & Background Theme Selectors */}
          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Toggle */}
            <div className={`flex items-center p-1 rounded-xl border ${
              isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"
            }`}>
              <button
                onClick={() => setViewMode("showcase")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "showcase"
                    ? isDarkMode 
                      ? "bg-white/15 text-white shadow-xs" 
                      : "bg-white text-slate-900 shadow-sm"
                    : isDarkMode 
                      ? "text-slate-400 hover:text-white" 
                      : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Showcase</span>
              </button>

              <button
                onClick={() => setViewMode("hubs")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "hubs"
                    ? isDarkMode 
                      ? "bg-white/15 text-white shadow-xs" 
                      : "bg-white text-slate-900 shadow-sm"
                    : isDarkMode 
                      ? "text-slate-400 hover:text-white" 
                      : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>Regional Hubs</span>
              </button>

              <button
                onClick={() => setViewMode("map")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "map"
                    ? "bg-[#f25f22] text-white shadow-xs"
                    : isDarkMode 
                      ? "text-slate-400 hover:text-white" 
                      : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Map</span>
              </button>
            </div>

            {/* Background Theme Switcher: Light, Slate, Dark */}
            <div className={`flex items-center p-1 rounded-xl border ${
              isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"
            }`}>
              <button
                onClick={() => setThemeMode("light")}
                title="Clean Pure White Background"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  themeMode === "light"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200/80"
                    : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">White</span>
              </button>

              <button
                onClick={() => setThemeMode("slate")}
                title="Soft Slate Studio Background"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  themeMode === "slate"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200/80"
                    : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-indigo-500" />
                <span className="hidden sm:inline">Slate</span>
              </button>

              <button
                onClick={() => setThemeMode("dark")}
                title="Luxury Midnight Obsidian Background"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  themeMode === "dark"
                    ? "bg-[#0b0f19] text-white shadow-xs border border-white/20"
                    : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Dark</span>
              </button>
            </div>
          </div>

        </div>

        {/* VIEW 1: EXECUTIVE CLIENT SHOWCASE BENTO GRID (DEFAULT & ULTRA CLEAN) */}
        {viewMode === "showcase" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className={`group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  isDarkMode
                    ? "bg-gradient-to-b from-white/[0.07] to-white/[0.02] border-white/10 hover:border-[#f25f22]/50 hover:shadow-xl hover:shadow-orange-500/10"
                    : isSlateMode
                      ? "bg-white border-slate-200 hover:border-[#f25f22]/40 hover:shadow-xl hover:shadow-slate-300/40"
                      : "bg-white border-slate-200/90 hover:border-[#f25f22]/50 hover:shadow-xl hover:shadow-orange-500/10"
                }`}
              >
                <div>
                  {/* Top Header: Monogram Avatar + Flag Badge + Category Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Brand Monogram Avatar */}
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${brand.monogramGradient} flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-wider shadow-md shrink-0`}>
                        {brand.monogram}
                      </div>

                      <div>
                        {/* Flag & Location */}
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                          <span>{brand.flag}</span>
                          <span className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{brand.city}</span>
                        </div>
                        {/* Domain */}
                        <span className={`text-[11px] font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                          {brand.domain}
                        </span>
                      </div>
                    </div>

                    {/* Sector Badge */}
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#f25f22] bg-[#f25f22]/10 border border-[#f25f22]/20 px-2.5 py-1 rounded-full shrink-0">
                      {brand.category}
                    </span>
                  </div>

                  {/* Brand Headline */}
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block"
                  >
                    <h3 className={`text-lg sm:text-xl font-black tracking-tight group-hover:text-[#f25f22] transition-colors flex items-center justify-between ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      <span>{brand.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-[#f25f22] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                    </h3>
                  </a>

                  {/* Tagline */}
                  <p className={`text-xs sm:text-sm font-normal mt-2 leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {brand.tagline}
                  </p>

                  {/* Growth Service Pill */}
                  <div className="mt-3.5 flex items-center gap-1.5">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md ${
                      isDarkMode ? "bg-white/5 text-slate-300 border border-white/5" : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}>
                      ⚡ {brand.service}
                    </span>
                  </div>
                </div>

                {/* Bottom Footer: Verified Outcome & Direct Link */}
                <div className={`mt-5 pt-3.5 border-t flex items-center justify-between gap-3 ${
                  isDarkMode ? "border-white/10" : "border-slate-100"
                }`}>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className={`text-[11px] font-medium truncate ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      {brand.stats}
                    </span>
                  </div>

                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shrink-0 inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg transition cursor-pointer ${
                      isDarkMode
                        ? "text-white bg-white/5 hover:bg-[#f25f22] hover:text-white"
                        : "text-slate-900 bg-slate-100 hover:bg-[#f25f22] hover:text-white"
                    }`}
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: REGIONAL HUBS (DUBAI & GULF VS NORTH AMERICA) */}
        {viewMode === "hubs" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* HUB 1: UAE & GULF CLUSTER */}
            <div className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between ${
              isDarkMode 
                ? "bg-gradient-to-b from-white/[0.05] to-transparent border-white/10" 
                : "bg-white border-slate-200 shadow-md"
            }`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🇦🇪</span>
                    <div>
                      <h3 className={`text-xl font-black ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                        Dubai & UAE Enterprise Hub
                      </h3>
                      <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        6 Category-Leading Brands &bull; Automotive, Luxury Real Estate & Corporate Advisory
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-orange-500/10 text-[#f25f22] border border-orange-500/20">
                    MENA Core
                  </span>
                </div>

                <div className="space-y-3 mt-6">
                  {middleEastBrands.map((brand) => (
                    <a
                      key={brand.id}
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3.5 rounded-xl border flex items-center justify-between gap-3 transition ${
                        isDarkMode 
                          ? "bg-white/5 hover:bg-white/10 border-white/5" 
                          : "bg-slate-50 hover:bg-orange-50/50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${brand.monogramGradient} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                          {brand.monogram}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-bold truncate group-hover:text-[#f25f22] transition ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                            {brand.name}
                          </p>
                          <p className={`text-[11px] truncate ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                            {brand.category} &bull; {brand.city}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#f25f22] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                isDarkMode ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-600"
              }`}>
                <span>Market Focus: High-Ticket Lead Gen & Fleet Scale</span>
                <span className="font-bold text-[#f25f22]">6 Enterprise Brands</span>
              </div>
            </div>

            {/* HUB 2: NORTH AMERICA CLUSTER */}
            <div className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between ${
              isDarkMode 
                ? "bg-gradient-to-b from-white/[0.05] to-transparent border-white/10" 
                : "bg-white border-slate-200 shadow-md"
            }`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🇺🇸 🇨🇦</span>
                    <div>
                      <h3 className={`text-xl font-black ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                        North America Growth Hub
                      </h3>
                      <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        4 Market Leaders &bull; DTC E-Commerce, Philanthropy & Luxury Automotive
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    US & Canada
                  </span>
                </div>

                <div className="space-y-3 mt-6">
                  {northAmericaBrands.map((brand) => (
                    <a
                      key={brand.id}
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3.5 rounded-xl border flex items-center justify-between gap-3 transition ${
                        isDarkMode 
                          ? "bg-white/5 hover:bg-white/10 border-white/5" 
                          : "bg-slate-50 hover:bg-orange-50/50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${brand.monogramGradient} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                          {brand.monogram}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-bold truncate group-hover:text-[#f25f22] transition ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                            {brand.name}
                          </p>
                          <p className={`text-[11px] truncate ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                            {brand.category} &bull; {brand.city}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#f25f22] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                isDarkMode ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-600"
              }`}>
                <span>Market Focus: 8-Figure DTC & High-Volume Search</span>
                <span className="font-bold text-[#f25f22]">4 Enterprise Brands</span>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 3: INTERACTIVE LUXURY MAP (Faithful to Reference Image) */}
        {viewMode === "map" && (
          <div className={`relative w-full rounded-2xl border p-2 sm:p-6 backdrop-blur-md ${
            isDarkMode 
              ? "bg-white/[0.03] border-white/10" 
              : "bg-white border-slate-200 shadow-sm"
          }`}>
            
            {/* Map Canvas */}
            <div className="relative w-full aspect-[2000/857] flex items-center justify-center overflow-hidden rounded-xl">
              <svg viewBox="0 0 2000 857" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="brand-dot-grid" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
                    <circle 
                      cx="5.5" 
                      cy="5.5" 
                      r="1.75" 
                      fill={isDarkMode ? "#334155" : "#94a3b8"} 
                      opacity={isDarkMode ? 0.65 : 0.45} 
                    />
                  </pattern>
                  <mask id="brand-world-mask">
                    <rect width="2000" height="857" fill="black" />
                    <path d={worldPath.d} fill="white" />
                  </mask>
                  <filter id="beacon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#f25f22" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Dotted Continents */}
                <rect width="2000" height="857" fill="url(#brand-dot-grid)" mask="url(#brand-world-mask)" />

                {/* Client Location Beacon Pins */}
                {CLIENT_BRANDS.map((brand) => {
                  const isSelected = selectedMapBrand.id === brand.id;
                  return (
                    <g 
                      key={brand.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedMapBrand(brand)}
                    >
                      {/* Generous Touch Target */}
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
                        filter="url(#beacon-glow)"
                      />

                      {/* Beacon White Center */}
                      <circle cx={brand.x} cy={brand.y} r="3.5" className="fill-white pointer-events-none" />

                      {/* City Text */}
                      <text
                        x={brand.x}
                        y={brand.y + 22}
                        textAnchor="middle"
                        className={`text-[10px] font-black uppercase tracking-wider ${
                          isSelected 
                            ? "fill-[#f25f22] font-bold" 
                            : isDarkMode ? "fill-slate-400 opacity-90" : "fill-slate-600 font-semibold"
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
            <div className={`mt-4 p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
              isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${selectedMapBrand.monogramGradient} flex items-center justify-center text-white font-black text-xs shrink-0`}>
                  {selectedMapBrand.monogram}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={`font-black text-base ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                      {selectedMapBrand.name}
                    </h4>
                    <span className="text-[10px] font-bold text-[#f25f22] bg-[#f25f22]/10 px-2 py-0.5 rounded-full uppercase">
                      {selectedMapBrand.category}
                    </span>
                  </div>
                  <p className={`text-xs mt-0.5 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    📍 {selectedMapBrand.city}, {selectedMapBrand.country} &bull; {selectedMapBrand.stats}
                  </p>
                </div>
              </div>

              <a
                href={selectedMapBrand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#f25f22] hover:bg-orange-600 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Visit {selectedMapBrand.domain}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

        {/* BOTTOM METRICS BAR (Faithful to Reference Image stats style) */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-10 border-t text-center ${
          isDarkMode ? "border-white/10" : "border-slate-200"
        }`}>
          
          <div>
            <p className={`text-4xl sm:text-5xl font-black tracking-tight font-sans ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              10+
            </p>
            <p className="text-xs font-bold text-[#f25f22] uppercase tracking-widest mt-2">
              Enterprise Brands
            </p>
          </div>

          <div>
            <p className={`text-4xl sm:text-5xl font-black tracking-tight font-sans ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              $50M+
            </p>
            <p className="text-xs font-bold text-[#f25f22] uppercase tracking-widest mt-2">
              Ad Spend Scaled
            </p>
          </div>

          <div>
            <p className={`text-4xl sm:text-5xl font-black tracking-tight font-sans ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              4.8x
            </p>
            <p className="text-xs font-bold text-[#f25f22] uppercase tracking-widest mt-2">
              Average Paid ROAS
            </p>
          </div>

          <div>
            <p className={`text-4xl sm:text-5xl font-black tracking-tight font-sans ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              3
            </p>
            <p className="text-xs font-bold text-[#f25f22] uppercase tracking-widest mt-2">
              Global Regions (US &bull; CA &bull; UAE)
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
