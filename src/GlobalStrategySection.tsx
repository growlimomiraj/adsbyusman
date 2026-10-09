import React, { useState } from 'react';
import worldPath from './world-path.json';

interface PinLocation {
  city: string;
  country: string;
  x: number;
  y: number;
}

const PIN_LOCATIONS: PinLocation[] = [
  // North America - West Coast
  { city: "Vancouver / Seattle", country: "Canada / US", x: 360, y: 195 },
  { city: "San Francisco", country: "United States", x: 350, y: 245 },
  { city: "Los Angeles", country: "United States", x: 375, y: 275 },
  { city: "San Diego / Tijuana", country: "US / Mexico", x: 390, y: 295 },

  // North America - Central & Mountain
  { city: "Calgary / Edmonton", country: "Canada", x: 410, y: 180 },
  { city: "Denver", country: "United States", x: 435, y: 250 },
  { city: "Dallas / Austin", country: "United States", x: 470, y: 300 },
  { city: "Chicago", country: "United States", x: 520, y: 235 },

  // North America - East Coast & South
  { city: "Toronto / Montreal", country: "Canada", x: 560, y: 205 },
  { city: "Boston", country: "United States", x: 605, y: 205 },
  { city: "New York", country: "United States", x: 595, y: 225 },
  { city: "Washington, D.C.", country: "United States", x: 575, y: 245 },
  { city: "Atlanta", country: "United States", x: 540, y: 280 },
  { city: "Miami", country: "United States", x: 565, y: 335 },

  // Latin America & Caribbean
  { city: "Mexico City", country: "Mexico", x: 435, y: 350 },
  { city: "Bogota", country: "Colombia", x: 585, y: 410 },
  { city: "Lima", country: "Peru", x: 565, y: 495 },
  { city: "Santiago", country: "Chile", x: 615, y: 690 },
  { city: "Buenos Aires", country: "Argentina", x: 665, y: 700 },
  { city: "Sao Paulo / Rio", country: "Brazil", x: 740, y: 575 },
  { city: "Brasilia / Salvador", country: "Brazil", x: 770, y: 550 },

  // Europe - UK & West
  { city: "Dublin", country: "Ireland", x: 940, y: 175 },
  { city: "London", country: "United Kingdom", x: 975, y: 180 },
  { city: "Paris", country: "France", x: 1000, y: 205 },
  { city: "Amsterdam", country: "Netherlands", x: 1020, y: 175 },
  { city: "Brussels", country: "Belgium", x: 1005, y: 190 },

  // Europe - Central & South
  { city: "Berlin / Frankfurt", country: "Germany", x: 1050, y: 180 },
  { city: "Madrid", country: "Spain", x: 960, y: 245 },
  { city: "Lisbon", country: "Portugal", x: 925, y: 250 },
  { city: "Milan / Rome", country: "Italy", x: 1055, y: 235 },
  { city: "Warsaw", country: "Poland", x: 1105, y: 175 },
  { city: "Bucharest / Athens", country: "SE Europe", x: 1140, y: 240 },

  // Africa
  { city: "Lagos", country: "Nigeria", x: 1010, y: 430 },
  { city: "Nairobi", country: "Kenya", x: 1220, y: 480 },
  { city: "Johannesburg", country: "South Africa", x: 1180, y: 680 },
  { city: "Cape Town", country: "South Africa", x: 1140, y: 735 },

  // Middle East & South Asia
  { city: "Dubai", country: "United Arab Emirates", x: 1295, y: 345 },
  { city: "Islamabad / Lahore", country: "Pakistan", x: 1380, y: 285 },
  { city: "Karachi", country: "Pakistan", x: 1365, y: 330 },
  { city: "New Delhi", country: "India", x: 1425, y: 305 },
  { city: "Mumbai", country: "India", x: 1410, y: 360 },
  { city: "Bangalore", country: "India", x: 1435, y: 415 },
  { city: "Dhaka", country: "Bangladesh", x: 1495, y: 335 },

  // East & Southeast Asia
  { city: "Bangkok", country: "Thailand", x: 1515, y: 385 },
  { city: "Ho Chi Minh City", country: "Vietnam", x: 1550, y: 415 },
  { city: "Kuala Lumpur", country: "Malaysia", x: 1530, y: 460 },
  { city: "Singapore", country: "Singapore", x: 1538, y: 472 },
  { city: "Jakarta", country: "Indonesia", x: 1565, y: 515 },
  { city: "Manila", country: "Philippines", x: 1635, y: 390 },
  { city: "Hong Kong / Shenzhen", country: "China", x: 1565, y: 340 },
  { city: "Shanghai", country: "China", x: 1600, y: 300 },
  { city: "Tokyo", country: "Japan", x: 1715, y: 260 },

  // Australia & New Zealand
  { city: "Perth", country: "Australia", x: 1630, y: 695 },
  { city: "Adelaide", country: "Australia", x: 1720, y: 715 },
  { city: "Melbourne", country: "Australia", x: 1745, y: 750 },
  { city: "Sydney", country: "Australia", x: 1775, y: 720 },
  { city: "Brisbane", country: "Australia", x: 1785, y: 660 },
  { city: "Auckland", country: "New Zealand", x: 1895, y: 770 },
];

export default function GlobalStrategySection() {
  const [activePin, setActivePin] = useState<PinLocation | null>(null);

  return (
    <section id="global" className="w-full bg-white text-slate-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-200 relative overflow-hidden select-none">
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

        {/* DOTTED WORLD MAP CANVAS */}
        <div className="relative w-full max-w-5xl mx-auto my-8 sm:my-12">
          
          {/* Active Tooltip Badge */}
          {activePin && (
            <div 
              className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 px-3 py-1.5 bg-slate-950 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-800 transition-all duration-150 flex items-center gap-1.5"
              style={{
                left: `${(activePin.x / 2000) * 100}%`,
                top: `${(activePin.y / 857) * 100}%`,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
              <span>{activePin.city}</span>
              <span className="text-slate-400 font-normal">({activePin.country})</span>
            </div>
          )}

          <div className="relative w-full aspect-[2000/857] flex items-center justify-center">
            <svg
              viewBox="0 0 2000 857"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Dot Grid Pattern - 10px spacing with subtle dots matching screenshot */}
                <pattern
                  id="dot-matrix-grid"
                  x="0"
                  y="0"
                  width="11"
                  height="11"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="5.5" cy="5.5" r="1.7" fill="#94a3b8" />
                </pattern>

                {/* Continental Landmass Mask */}
                <mask id="world-continent-mask">
                  <rect width="2000" height="857" fill="black" />
                  <path d={worldPath.d} fill="white" />
                </mask>

                {/* Glow filter for orange dots */}
                <filter id="pin-drop-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#ff5722" floodOpacity="0.45" />
                </filter>
              </defs>

              {/* Dotted Continents */}
              <rect
                width="2000"
                height="857"
                fill="url(#dot-matrix-grid)"
                mask="url(#world-continent-mask)"
              />

              {/* Location Pins */}
              {PIN_LOCATIONS.map((pin, i) => (
                <g
                  key={i}
                  className="cursor-pointer group"
                  onMouseEnter={() => setActivePin(pin)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {/* Subtle ping on pulse for key hubs */}
                  {i % 4 === 0 && (
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="12"
                      className="fill-[#ff5722] opacity-25 animate-ping"
                      style={{ animationDuration: `${2.5 + (i % 3)}s` }}
                    />
                  )}

                  {/* Main Orange Marker Dot */}
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r="6.5"
                    className="fill-[#ff5722] stroke-[1.5] stroke-white transition-transform duration-200 group-hover:scale-125"
                    filter="url(#pin-drop-shadow)"
                  />
                </g>
              ))}
            </svg>
          </div>
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
