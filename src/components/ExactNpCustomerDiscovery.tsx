import React, { useState } from "react";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

interface ExactNpCustomerDiscoveryProps {
  onOpenConsultation?: (defaultNotes?: string) => void;
}

export interface ClientLogoItem {
  id: string;
  name: string;
  domain: string;
  url: string;
  logo: string;
  favicon: string;
}

export const CLIENT_ACTUAL_LOGOS: ClientLogoItem[] = [
  {
    id: "servicemycar",
    name: "Service My Car",
    domain: "servicemycar.com",
    url: "https://servicemycar.com/uae",
    logo: "/client-logos/servicemycar.svg",
    favicon: "/client-logos/servicemycar-real-apple-icon.png",
  },
  {
    id: "azcorealestate",
    name: "AZCO Real Estate",
    domain: "azcorealestate.ae",
    url: "https://www.azcorealestate.ae/",
    logo: "/client-logos/azco-real-brandmark.png",
    favicon: "/client-logos/azcorealestate-site-icon.png",
  },
  {
    id: "modernwallarts",
    name: "Modern Wall Arts",
    domain: "modernwallarts.com",
    url: "https://modernwallarts.com/",
    logo: "/client-logos/modernwallarts-real-logo.webp",
    favicon: "/client-logos/modernwallarts-real-favicon.webp",
  },
  {
    id: "humanconcern",
    name: "Human Concern Intl",
    domain: "humanconcern.org",
    url: "https://humanconcern.org/",
    logo: "/client-logos/humanconcern-real-logo.svg",
    favicon: "/client-logos/humanconcern-site-icon.png",
  },
  {
    id: "thecarhaus",
    name: "The Car Haus",
    domain: "thecarhaus.com",
    url: "https://www.thecarhaus.com/",
    logo: "/client-logos/thecarhaus-real-logo.png",
    favicon: "/client-logos/thecarhaus-site-icon.png",
  },
  {
    id: "lalahijabs",
    name: "Lala Hijabs",
    domain: "lalahijabs.com",
    url: "https://lalahijabs.com/",
    logo: "/client-logos/lalahijabs-site-icon.png",
    favicon: "/client-logos/lalahijabs-site-icon.png",
  },
  {
    id: "alhurrcarrental",
    name: "Al Hurr Car Rental",
    domain: "alhurrcarrental.ae",
    url: "https://www.alhurrcarrental.ae/en",
    logo: "/client-logos/alhurr-real-emblem.png",
    favicon: "/client-logos/alhurrcarrental-site-icon.png",
  },
  {
    id: "miragerentcar",
    name: "Mirage Rent a Car",
    domain: "miragerentcar.com",
    url: "https://miragerentcar.com/",
    logo: "/client-logos/miragerentcar-real-logo-white.svg",
    favicon: "/client-logos/miragerentcar-site-icon.svg",
  },
  {
    id: "onlytourism",
    name: "Only Tourism",
    domain: "onlytourism.com",
    url: "https://onlytourism.com/",
    logo: "/client-logos/onlytourism-real-logo-white.svg",
    favicon: "/client-logos/onlytourism-site-icon.png",
  },
  {
    id: "mmcdubai",
    name: "MMC Dubai",
    domain: "mmcdubai.ae",
    url: "https://mmcdubai.ae/",
    logo: "/client-logos/mmcdubai-real-logo-white.png",
    favicon: "/client-logos/mmcdubai-site-icon.png",
  },
];

export const ExactNpCustomerDiscovery: React.FC<ExactNpCustomerDiscoveryProps> = ({
  onOpenConsultation,
}) => {
  // Interactive channels from the Neil Patel card
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    "GEO / AEO",
    "Paid media",
  ]);

  // View mode for client assets: actual logos vs actual site favicons
  const [viewMode, setViewMode] = useState<"logos" | "favicons">("logos");

  const channels = [
    { id: "geo-aeo", label: "GEO / AEO" },
    { id: "seo", label: "SEO" },
    { id: "paid-media", label: "Paid media" },
    { id: "creative", label: "Creative" },
    { id: "content", label: "Content" },
    { id: "social-media", label: "Social Media" },
    { id: "app-store", label: "App Store" },
    { id: "analytics", label: "Analytics" },
  ];

  const toggleChannel = (label: string) => {
    setSelectedChannels((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    );
  };

  const handleGetStarted = () => {
    if (onOpenConsultation) {
      const summary = selectedChannels.length > 0 
        ? `Interested in: ${selectedChannels.join(", ")}` 
        : "";
      onOpenConsultation(summary);
    }
  };

  return (
    <section 
      id="customer-discovery" 
      className="bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 font-sans overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Top Split Layout: Heading & CTA on Left, Interactive Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          
          {/* Left Column: Heading, Subtitle & "Work with us" button */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5 sm:mb-6">
              We make sure customers find you everywhere from{" "}
              <span className="relative inline-block border-b-4 sm:border-b-5 border-[#ff5e29] pb-0.5 sm:pb-1">
                Google
              </span>{" "}
              to{" "}
              <span className="relative inline-block border-b-4 sm:border-b-5 border-[#ff5e29] pb-0.5 sm:pb-1">
                ChatGPT
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-7 sm:mb-9 max-w-xl">
              We help you show up everywhere customers are searching, swiping, scrolling, streaming, and shopping.
            </p>

            <div>
              <button
                onClick={() => onOpenConsultation?.()}
                className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-[#ff5e29] hover:bg-[#e04f1e] text-white font-black text-sm sm:text-base tracking-wide uppercase transition-all duration-200 shadow-lg shadow-orange-600/30 active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Work with us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: "How can we help you get found?" Interactive Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#f4f4f4] text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 text-center tracking-tight leading-snug mb-6">
                How can we{" "}
                <span className="relative inline-block border-b-3 border-[#ff5e29] pb-0.5">
                  help you
                </span>{" "}
                get found?
              </h3>

              {/* 2-Column Checkbox Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                {channels.map((channel) => {
                  const isChecked = selectedChannels.includes(channel.label);
                  return (
                    <button
                      key={channel.id}
                      type="button"
                      onClick={() => toggleChannel(channel.label)}
                      className={`flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                        isChecked
                          ? "bg-white border-[#ff5e29] text-slate-900 shadow-xs"
                          : "bg-white/90 hover:bg-white border-slate-200 text-slate-700"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? "bg-[#ff5e29] text-white"
                            : "border border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="truncate">{channel.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Get Started Submit Button */}
              <button
                type="button"
                onClick={handleGetStarted}
                className="w-full py-3.5 sm:py-4 rounded-xl bg-[#ff5e29] hover:bg-[#e04f1e] text-white font-black text-sm sm:text-base tracking-wider uppercase transition-all duration-200 shadow-md shadow-orange-500/25 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

        {/* ACTUAL CLIENT LOGOS GRID - Copied Directly From Client Websites */}
        <div className="pt-10 sm:pt-14 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">
                Trusted By Category-Defining Brands Across North America & the Middle East
              </p>
            </div>

            {/* Toggle between Actual Logos & Actual Favicons */}
            <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => setViewMode("logos")}
                className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  viewMode === "logos"
                    ? "bg-[#ff5e29] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Actual Logos
              </button>
              <button
                type="button"
                onClick={() => setViewMode("favicons")}
                className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  viewMode === "favicons"
                    ? "bg-[#ff5e29] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Site Favicons
              </button>
            </div>
          </div>

          {/* 2 columns on mobile (5 rows), 5 columns on desktop (2 rows) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-stretch">
            {CLIENT_ACTUAL_LOGOS.map((client) => {
              const currentAsset = viewMode === "logos" ? client.logo : client.favicon;
              return (
                <a
                  key={client.id}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${client.name} (${client.domain})`}
                  className="group flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#ff5e29]/50 transition-all duration-200 w-full cursor-pointer relative"
                >
                  {/* Stable fixed-height container: Zero layout shift, Zero blinking */}
                  <div className="h-16 w-full flex items-center justify-center px-2 py-1">
                    <img
                      key={`${client.id}-${viewMode}`}
                      src={currentAsset}
                      alt={`${client.name} logo`}
                      className={`max-h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${
                        viewMode === "favicons" 
                          ? "max-w-[48px] max-h-12" 
                          : "max-w-[140px] max-h-12"
                      }`}
                      loading="eager"
                    />
                  </div>

                  {/* Brand name & domain with fixed layout */}
                  <div className="w-full text-center mt-3 pt-2.5 border-t border-white/5">
                    <div className="text-xs font-bold text-slate-200 group-hover:text-white truncate">
                      {client.name}
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 group-hover:text-[#ff5e29] transition-colors truncate mt-0.5 flex items-center justify-center gap-1">
                      <span>{client.domain}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
