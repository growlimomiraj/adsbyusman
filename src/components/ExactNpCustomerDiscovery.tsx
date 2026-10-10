import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface ExactNpCustomerDiscoveryProps {
  onOpenConsultation?: (defaultNotes?: string) => void;
}

export interface ClientLogoItem {
  id: string;
  name: string;
  domain: string;
  url: string;
  logo: string;
}

export const CLIENT_ACTUAL_LOGOS: ClientLogoItem[] = [
  {
    id: "servicemycar",
    name: "Service My Car",
    domain: "servicemycar.com",
    url: "https://servicemycar.com/uae",
    logo: "/client-logos/servicemycar-white.svg",
  },
  {
    id: "azcorealestate",
    name: "AZCO Real Estate",
    domain: "azcorealestate.ae",
    url: "https://www.azcorealestate.ae/",
    logo: "/client-logos/azco-white.svg",
  },
  {
    id: "modernwallarts",
    name: "Modern Wall Arts",
    domain: "modernwallarts.com",
    url: "https://modernwallarts.com/",
    logo: "/client-logos/modernwallarts-white.svg",
  },
  {
    id: "humanconcern",
    name: "Human Concern Intl",
    domain: "humanconcern.org",
    url: "https://humanconcern.org/",
    logo: "/client-logos/humanconcern-white.svg",
  },
  {
    id: "thecarhaus",
    name: "The Car Haus",
    domain: "thecarhaus.com",
    url: "https://www.thecarhaus.com/",
    logo: "/client-logos/thecarhaus-white.svg",
  },
  {
    id: "lalahijabs",
    name: "Lala Hijabs",
    domain: "lalahijabs.com",
    url: "https://lalahijabs.com/",
    logo: "/client-logos/lalahijabs-white.svg",
  },
  {
    id: "alhurrcarrental",
    name: "Al Hurr Car Rental",
    domain: "alhurrcarrental.ae",
    url: "https://www.alhurrcarrental.ae/en",
    logo: "/client-logos/alhurr-white.svg",
  },
  {
    id: "miragerentcar",
    name: "Mirage Rent a Car",
    domain: "miragerentcar.com",
    url: "https://miragerentcar.com/",
    logo: "/client-logos/miragerentcar.svg",
  },
  {
    id: "onlytourism",
    name: "Only Tourism",
    domain: "onlytourism.com",
    url: "https://onlytourism.com/",
    logo: "/client-logos/onlytourism-white.svg",
  },
  {
    id: "mmcdubai",
    name: "MMC Dubai",
    domain: "mmcdubai.ae",
    url: "https://mmcdubai.ae/",
    logo: "/client-logos/mmcdubai-white.svg",
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

        {/* ACTUAL CLIENT LOGOS GRID (Clean Transparent White Vectors - Zero Blinking) */}
        <div className="pt-10 sm:pt-14 border-t border-white/10">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">
              Trusted By Category-Defining Brands Across North America & the Middle East
            </p>
          </div>

          {/* 2 columns on mobile (5 rows), 5 columns on desktop (2 rows) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 sm:gap-y-12 gap-x-8 items-center justify-items-center">
            {CLIENT_ACTUAL_LOGOS.map((client) => (
              <a
                key={client.id}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${client.name} - ${client.domain}`}
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl hover:bg-white/[0.04] transition-colors duration-200 w-full cursor-pointer"
              >
                {/* Fixed height container eliminates any layout shift */}
                <div className="h-14 sm:h-16 flex items-center justify-center w-full px-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 w-auto max-w-[150px] sm:max-w-[180px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    loading="eager"
                  />
                </div>
                {/* Fixed height label prevents hover height shift */}
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#ff5e29] transition-colors mt-2 text-center truncate max-w-full block">
                  {client.domain} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
