import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  Target,
  FileText,
  Share2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { servicesData } from "../data/marketingData";
import { ServiceItem } from "../types";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case "Search":
        return <Search className="w-6 h-6 text-[#f25f22]" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#f25f22]" />;
      case "Target":
        return <Target className="w-6 h-6 text-[#f25f22]" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-[#f25f22]" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-[#f25f22]" />;
      case "BarChart3":
        return <BarChart3 className="w-6 h-6 text-[#f25f22]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#f25f22]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f25f22] text-xs font-bold uppercase tracking-wider mb-3">
            GROWLIMO Agency Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            How We Can Help Your <br />
            <span className="text-[#f25f22]">Business Grow</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don&apos;t sell vanity metrics. We combine technical SEO, scientific conversion testing, and high-ROI paid acquisition to predictably increase your revenue.
          </p>
        </div>

        {/* 6-Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-orange-50/40 border-orange-400 shadow-lg shadow-orange-500/10 ring-2 ring-orange-400/20"
                    : "bg-white border-slate-200 hover:border-orange-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-[#f25f22] flex items-center gap-1">
                    Explore Scope <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-500 font-medium">Full-Service</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Deliverables Drawer */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f25f22]">
                Detailed Scope Breakdown
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {selectedService.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 min-w-[260px]">
              <p className="text-xs font-bold uppercase text-slate-400 mb-1">
                Target Growth Velocity
              </p>
              <p className="text-sm font-bold text-emerald-400">
                {selectedService.expectedImpact}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {selectedService.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-sm font-medium text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Customized strategy proposals created after comprehensive competitive benchmarking.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white bg-[#f25f22] hover:bg-[#d94e16] active:scale-98 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Request Proposal for {selectedService.title.split("(")[0]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
