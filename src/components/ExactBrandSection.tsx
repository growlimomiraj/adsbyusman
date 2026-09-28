import React from "react";

export const ExactBrandSection: React.FC = () => {
  return (
    <section id="brands-section" className="bg-[#121418] text-white py-16 sm:py-24 relative overflow-hidden">
      {/* 1. Base Gradient: Transitioning from dark obsidian at top to deep ember at bottom matching screan3.PNG */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121418] via-[#13151a] to-[#221714] pointer-events-none" />

      {/* 2. Uniform High-End Dot Matrix Pattern across entire background matching screan3.PNG */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] [background-size:18px_18px] pointer-events-none opacity-90" />

      {/* 3. Subtle, elegant World Map Silhouette (Soft, static, non-distracting watermark) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.14]">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" className="w-full max-w-[1200px] h-auto text-slate-300 fill-current">
          {/* North America */}
          <path d="M120,60 Q170,40 220,50 Q280,60 300,90 Q310,120 270,140 Q280,180 260,220 Q240,250 200,270 Q210,300 230,310 Q210,315 190,290 Q160,240 140,210 Q110,170 90,120 Q60,100 120,60 Z" />
          <path d="M330,30 Q370,25 390,40 Q370,75 350,85 Q320,60 330,30 Z" />
          {/* South America */}
          <path d="M230,300 Q270,300 300,330 Q340,360 330,400 Q300,440 270,470 Q260,470 255,430 Q250,380 225,340 Q220,320 230,300 Z" />
          {/* Europe */}
          <path d="M430,80 Q460,50 490,60 Q500,90 470,110 Q500,130 530,120 Q530,150 500,170 Q460,170 440,150 Q420,130 430,80 Z" />
          <path d="M415,105 Q430,95 425,120 Q410,125 415,105 Z" />
          {/* Africa */}
          <path d="M440,190 Q520,180 540,210 Q560,250 550,290 Q530,340 510,410 Q480,430 465,400 Q450,350 430,310 Q410,270 415,230 Q420,200 440,190 Z" />
          <path d="M555,350 Q570,350 565,385 Q550,390 555,350 Z" />
          {/* Asia */}
          <path d="M530,120 Q630,90 760,90 Q860,100 880,140 Q840,170 800,180 Q800,220 750,250 Q710,270 680,290 Q650,260 630,220 Q580,230 550,210 Q540,160 530,120 Z" />
          <path d="M625,210 Q665,215 675,255 Q655,290 635,300 Q620,260 625,210 Z" />
          <path d="M830,140 Q850,160 840,190 Q825,180 830,140 Z" />
          <path d="M720,310 Q750,305 760,325 Q730,335 720,310 Z" />
          {/* Australia */}
          <path d="M760,360 Q840,350 865,380 Q855,425 810,435 Q760,420 750,390 Q745,375 760,360 Z" />
        </svg>
      </div>

      {/* 4. Warm Ember Radial Glow at Bottom Center/Right matching screan3.PNG */}
      <div className="absolute -bottom-10 inset-x-0 h-80 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(242,95,34,0.28)_0%,_rgba(180,60,15,0.16)_40%,_transparent_75%)] blur-2xl" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f25f22]/10 via-transparent to-transparent" />
      </div>

      {/* 5. Clean Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_#121418_98%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-md sm:max-w-lg mx-auto px-6 text-center">
        {/* Eyebrow and Headline matching screan3.PNG */}
        <p className="text-[15px] sm:text-[16px] font-normal tracking-tight text-slate-200 mb-1">
          Globally Recognized
        </p>
        <h2 className="text-[23px] sm:text-[27px] font-extrabold tracking-tight text-white mb-12 sm:mb-14">
          Working With Renowned Brands
        </h2>

        {/* STRICT 2-COLUMN GRID matching screan3.PNG */}
        <div className="grid grid-cols-2 gap-y-12 sm:gap-y-14 gap-x-8 sm:gap-x-12 items-center justify-items-center">
          {/* Row 1: HP & SoFi */}
          {/* 1: HP */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <svg className="w-12 h-12 text-white" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="5.5" />
              <text x="50" y="65" fontFamily="sans-serif" fontStyle="italic" fontWeight="900" fontSize="44" textAnchor="middle" fill="currentColor">hp</text>
            </svg>
          </div>

          {/* 2: SoFi */}
          <div className="flex items-center justify-center gap-1.5 h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-2xl sm:text-[27px] font-extrabold tracking-tight text-white font-sans">SoFi</span>
            {/* 4-dot diamond cluster matching screan3.PNG */}
            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 ml-0.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Row 2: Mitsubishi Motors & Champion */}
          {/* 3: Mitsubishi Motors */}
          <div className="flex flex-col items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center mb-1">
              <div className="w-3 h-3 bg-white rotate-45 mb-0.5"></div>
              <div className="flex gap-0.5">
                <div className="w-3 h-3 bg-white rotate-45"></div>
                <div className="w-3 h-3 bg-white rotate-45"></div>
              </div>
            </div>
            <span className="text-[8.5px] sm:text-[9.5px] font-bold tracking-widest text-white uppercase">MITSUBISHI MOTORS</span>
          </div>

          {/* 4: Champion */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-serif italic font-black text-2xl sm:text-[28px] tracking-wide text-white">Champion</span>
          </div>

          {/* Row 3: ESPN & Adobe */}
          {/* 5: ESPN */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <div className="relative font-black italic text-2xl sm:text-[27px] tracking-widest text-white font-sans">
              ESPN
              <div className="absolute top-[48%] left-0 w-full h-[2px] bg-[#0b0d11] -translate-y-1/2"></div>
            </div>
          </div>

          {/* 6: Adobe */}
          <div className="flex items-center justify-center gap-2 h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.96 4h9.04v16h-4.8l-4.24-11.2zm-3.92 0l4.24 11.2h-3.44l-1.92-5.12h-3.68l3.6-6.08zm-9.04 0h4.8l4.24 11.2h-4.24l-1.6-4.24h-3.2zm0 16v-3.2h3.2l-3.2 3.2z"/>
            </svg>
            <span className="font-bold text-xl sm:text-[22px] tracking-tight text-white font-sans">Adobe</span>
          </div>

          {/* Row 4: Western Union & ACCOR */}
          {/* 7: Western Union */}
          <div className="flex items-center justify-center gap-1.5 h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-bold text-xs sm:text-[13px] tracking-wider text-white">WesternUnion</span>
            <span className="text-white font-black text-sm tracking-tighter">\\WU</span>
          </div>

          {/* 8: Accor */}
          <div className="flex items-center justify-center gap-2 h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.5 19L11 4.5L14 9.5L8.5 19H2.5ZM14.5 10.5L19.5 19H13.5L11.5 15.5L14.5 10.5Z" />
            </svg>
            <span className="font-light tracking-[0.25em] text-base sm:text-[17px] text-white font-sans">ACCOR</span>
          </div>

          {/* Row 5: CNN & PwC */}
          {/* 9: CNN */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <svg className="h-8 w-20 text-white" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M28 8 H14 C8 8 8 32 14 32 H28 M28 8 V32 L46 8 V32 M46 8 V32 L64 8 V32" />
            </svg>
          </div>

          {/* 10: PwC */}
          <div className="flex items-center justify-center gap-2 h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-white/40"></div>
                <div className="w-1.5 h-1.5 bg-white"></div>
              </div>
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-white"></div>
                <div className="w-1.5 h-1.5 bg-white/70"></div>
              </div>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white font-sans">pwc</span>
          </div>

          {/* Row 6: DIRECTV & LinkedIn */}
          {/* 11: DIRECTV */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-extrabold text-xl sm:text-[22px] tracking-widest text-white font-sans">DIRECTV</span>
          </div>

          {/* 12: LinkedIn */}
          <div className="flex items-center justify-center gap-1 h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-bold text-xl sm:text-[22px] tracking-tight text-white font-sans">Linked</span>
            <span className="px-1.5 py-0.5 bg-white text-[#0b0d11] font-bold text-sm rounded-[3px]">in</span>
          </div>

          {/* Row 7: RICOH & TATA */}
          {/* 13: RICOH */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-black text-2xl tracking-wider text-white font-sans">RICOH</span>
          </div>

          {/* 14: TATA */}
          <div className="flex flex-col items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <div className="w-6 h-2.5 border-t-2 border-white rounded-t-full mb-0.5"></div>
            <span className="font-bold text-lg sm:text-[19px] tracking-widest text-white uppercase font-sans">TATA</span>
          </div>

          {/* Row 8: Tektronix & Intuit */}
          {/* 15: Tektronix */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-semibold text-lg sm:text-[19px] tracking-tight text-white font-sans">
              Tektronix<span className="text-[10px] -top-1.5 relative">®</span>
            </span>
          </div>

          {/* 16: Intuit */}
          <div className="flex items-center justify-center h-12 w-full opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-black text-2xl tracking-wider text-white font-sans">INTUIT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
