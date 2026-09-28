import React from "react";

export const BrandLogos: React.FC = () => {
  const brands = [
    { name: "Google", text: "Google", style: "font-medium tracking-tight text-slate-500 hover:text-[#4285F4]" },
    { name: "Amazon", text: "amazon", style: "font-black lowercase tracking-tighter text-slate-500 hover:text-[#FF9900]" },
    { name: "Microsoft", text: "Microsoft", style: "font-semibold tracking-tight text-slate-500 hover:text-slate-900" },
    { name: "Salesforce", text: "salesforce", style: "font-extrabold italic lowercase tracking-tight text-slate-500 hover:text-[#00A1E0]" },
    { name: "Adobe", text: "Adobe", style: "font-black tracking-wider uppercase text-slate-500 hover:text-[#FF0000]" },
    { name: "Intuit", text: "intuit", style: "font-bold lowercase text-slate-500 hover:text-[#0077C5]" },
    { name: "Airbnb", text: "airbnb", style: "font-bold lowercase text-slate-500 hover:text-[#FF5A5F]" },
    { name: "ViacomCBS", text: "VIACOM CBS", style: "font-black uppercase tracking-tight text-slate-500 hover:text-slate-900" },
  ];

  return (
    <div className="border-y border-slate-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6">
          GROWLIMO has helped the world&apos;s leading brands scale their revenue
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 items-center justify-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center py-2 transition-all cursor-default"
            >
              <span
                className={`text-lg sm:text-xl transition-colors duration-200 ${brand.style}`}
              >
                {brand.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

