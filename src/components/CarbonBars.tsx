"use client";
import { useState, useCallback } from "react";

export default function CarbonBars() {
  const [key, setKey] = useState(0);

  const replay = useCallback(() => setKey((k) => k + 1), []);

  return (
    <div className="max-w-3xl mx-auto space-y-6 stagger-children">
      {/* Conventional */}
      <div
        className="animate-on-scroll card-hover group rounded-2xl bg-white border border-gray-100 p-6 transition-all duration-500 cursor-pointer select-none"
        onClick={replay}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-brand-dark">Conventional Jet Fuel</span>
          </div>
          <span className="text-lg font-bold text-gray-400">89 <span className="text-xs font-medium">gCO2e/MJ</span></span>
        </div>
        <div className="relative mt-2" key={`conv-${key}`}>
          <div className="bar-arrow" style={{ left: "100%" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 12L4 6h8L8 12z" fill="#9CA3AF"/></svg>
          </div>
          <div className="h-4 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full animate-bar relative overflow-hidden" style={{ width: "100%" }}>
              <div className="absolute inset-0 shimmer" />
            </div>
          </div>
        </div>
      </div>

      {/* SAF */}
      <div
        className="animate-on-scroll card-hover group rounded-2xl bg-white border border-green-100/50 p-6 transition-all duration-500 relative overflow-hidden cursor-pointer select-none"
        onClick={replay}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-green/5 to-transparent rounded-bl-full pointer-events-none" />
        <div className="flex justify-between items-center mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 12 2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-brand-dark">Loop Fuels SAF</span>
          </div>
          <span className="text-lg font-bold gradient-text px-1 pb-1 inline-block">~18 <span className="text-xs font-medium">gCO2e/MJ</span></span>
        </div>
        <div className="relative mt-2 z-10" key={`saf-${key}`}>
          <div className="bar-arrow" style={{ left: "20%", animationDelay: "0.3s" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 12L4 6h8L8 12z" fill="#16A34A"/></svg>
          </div>
          <div className="h-4 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-green to-brand-accent rounded-full animate-bar relative overflow-hidden" style={{ width: "20%", animationDelay: "0.3s" }}>
              <div className="absolute inset-0 shimmer" />
            </div>
          </div>
        </div>
      </div>

      {/* Reduction highlight */}
      <div className="animate-on-scroll card-hover rounded-2xl bg-gradient-to-br from-brand-light to-green-50 border border-green-100/50 p-8 text-center relative overflow-hidden">
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-brand-green/10" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-brand-green/5" />
        <div className="relative z-10">
          <div className="text-4xl md:text-5xl font-bold gradient-text px-1 pb-1 inline-block mb-2">~80%</div>
          <p className="text-brand-dark font-semibold">Lifecycle Emission Reduction</p>
          <p className="text-xs text-gray-400 mt-2">Based on CORSIA default lifecycle values for HEFA-SPK pathway using waste oils.</p>
        </div>
      </div>
    </div>
  );
}
