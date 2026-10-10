import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface ExactNpCustomerDiscoveryProps {
  onOpenConsultation?: (defaultNotes?: string) => void;
}

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

        {/* Client Logos Grid (Monochrome White on Black matching Neil Patel image) */}
        <div className="pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-y-8 sm:gap-y-10 gap-x-6 items-center justify-items-center opacity-85">
            
            {/* HP */}
            <div className="h-9 flex items-center justify-center text-white font-black tracking-tighter text-2xl border-2 border-white rounded-full w-9">
              <span className="italic -ml-0.5 text-lg">hp</span>
            </div>

            {/* SoFi */}
            <div className="h-8 flex items-center justify-center text-white font-black tracking-wider text-xl">
              SoFi <span className="text-xs ml-1 text-[#ff5e29]">&bull;&bull;&bull;</span>
            </div>

            {/* INTUIT */}
            <div className="h-8 flex items-center justify-center text-white font-black tracking-wide text-xl">
              intuit
            </div>

            {/* MITSUBISHI MOTORS */}
            <div className="h-9 flex flex-col items-center justify-center text-white">
              <div className="flex items-center gap-0.5 mb-0.5">
                <span className="w-2.5 h-2.5 bg-white rotate-45"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">MITSUBISHI</span>
            </div>

            {/* ADOBE */}
            <div className="h-8 flex items-center justify-center text-white font-black tracking-wider text-xl gap-1.5">
              <span className="font-serif italic text-2xl">A</span>
              <span className="tracking-widest text-sm uppercase">Adobe</span>
            </div>

            {/* NISSAN */}
            <div className="h-9 flex items-center justify-center text-white border border-white rounded-full px-3 py-1">
              <span className="text-xs font-black tracking-widest uppercase">NISSAN</span>
            </div>

            {/* MARRIOTT */}
            <div className="h-8 flex items-center justify-center text-white font-serif tracking-widest text-lg">
              <span className="text-2xl font-bold mr-1">M</span> Marriott
            </div>

            {/* L'OREAL */}
            <div className="h-8 flex items-center justify-center text-white font-sans tracking-[0.2em] uppercase text-sm font-bold">
              L&apos;ORÉAL
            </div>

            {/* KUMON */}
            <div className="h-8 flex items-center justify-center text-white font-sans tracking-wider text-base font-extrabold">
              KUMON
            </div>

            {/* CARTIER */}
            <div className="h-8 flex items-center justify-center text-white font-serif italic text-xl tracking-wider">
              Cartier
            </div>

            {/* DHL */}
            <div className="h-8 flex items-center justify-center text-white font-black italic text-2xl tracking-tighter">
              DHL
            </div>

            {/* CLARINS */}
            <div className="h-8 flex items-center justify-center text-white font-serif tracking-widest uppercase text-xs font-bold">
              CLARINS
            </div>

            {/* UNILEVER */}
            <div className="h-9 flex items-center justify-center text-white font-sans text-xl font-bold tracking-tight">
              <span className="border-2 border-white rounded-t-full px-1 mr-1 text-sm font-serif">U</span> Unilever
            </div>

            {/* CANON */}
            <div className="h-8 flex items-center justify-center text-white font-serif tracking-wider text-xl font-bold">
              Canon
            </div>

            {/* PRUDENTIAL */}
            <div className="h-8 flex items-center justify-center text-white font-serif tracking-wider text-sm font-bold">
              <span className="mr-1 text-base">🏛️</span> Prudential
            </div>

            {/* CHURCH & DWIGHT */}
            <div className="h-9 flex items-center justify-center text-white border border-white rounded-full px-2 py-0.5 text-[9px] font-black tracking-wider uppercase text-center leading-tight">
              CHURCH & DWIGHT
            </div>

            {/* WESTERN UNION */}
            <div className="h-8 flex items-center justify-center text-white font-black italic text-base tracking-tighter">
              WesternUnion \\
            </div>

            {/* SONY MUSIC */}
            <div className="h-8 flex items-center justify-center text-white font-sans text-xs tracking-widest uppercase font-bold">
              SONY MUSIC
            </div>

            {/* DOMINO'S */}
            <div className="h-8 flex items-center justify-center text-white font-sans text-xs font-black tracking-wider uppercase">
              <span className="mr-1">🎲</span> Domino&apos;s
            </div>

            {/* LEVI'S */}
            <div className="h-8 flex items-center justify-center text-white bg-white/10 px-3 py-1 rounded-sm text-xs font-black tracking-wider uppercase">
              Levi&apos;s
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
