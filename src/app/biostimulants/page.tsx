"use client";

import { useState, useEffect, useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import TiltCard from "@/components/TiltCard";
import AnimatedCounter from "@/components/AnimatedCounter";

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v7" />
        <path d="M12 9v13" />
        <path d="M12 6c-2 2-5 3-5 3" />
        <path d="M12 6c2 2 5 3 5 3" />
        <path d="M12 13c-1.5 1.5-4 3-6 3.5" />
        <path d="M12 13c1.5 1.5 4 3 6 3.5" />
        <path d="M12 18c-1 1-2.5 2-4 2.5" />
        <path d="M12 18c1 1 2.5 2 4 2.5" />
      </svg>
    ),
    title: "Enhanced Root Development",
    description: "Biostimulants stimulate root growth by up to 40%, enabling plants to access deeper water tables and absorb more nutrients from the soil.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8l4-4" />
        <path d="M12 10l-4-4" />
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
      </svg>
    ),
    title: "Stress Tolerance",
    description: "Plants treated with biostimulants show significantly higher resilience to drought, salinity, extreme temperatures, and environmental stress.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22 16 8" />
        <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
      </svg>
    ),
    title: "Improved Crop Yield",
    description: "Studies show 10-25% increase in crop yields through better nutrient uptake efficiency, improved photosynthesis, and enhanced metabolic activity.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Soil Health Restoration",
    description: "Biostimulants enrich soil microbiome diversity, improve organic matter content, and restore degraded soils over time — building long-term fertility.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1 1.5-1 6.5c0 0 2-1 3-2 0 3.5-2 5.5-4 7.5" />
        <path d="M7 20a2 2 0 1 0 4 0" />
      </svg>
    ),
    title: "Reduced Chemical Dependency",
    description: "By boosting natural plant defence mechanisms, biostimulants reduce the need for synthetic fertilizers and pesticides by up to 30%.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" stroke="none">CO₂</text>
        <path d="M12 4V2" />
        <path d="M12 22v-2" />
        <path d="M4 12H2" />
        <path d="M22 12h-2" />
        <path d="M6.34 6.34 4.93 4.93" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    title: "Carbon Sequestration",
    description: "Healthier soils with richer microbial activity capture and store more atmospheric carbon, actively contributing to climate change mitigation.",
  },
];

const algaeAdvantages = [
  {
    title: "Rapid Growth Rate",
    desc: "Algae can double their biomass in just hours, making them the fastest-growing organisms on Earth — 10x more productive than traditional crops.",
    stat: "10x",
    statLabel: "More productive than crops",
  },
  {
    title: "Dual-Product Extraction",
    desc: "Loop Fuels extracts both lipids (for SAF production) and biostimulants from algae — creating a zero-waste circular bioeconomy.",
    stat: "2",
    statLabel: "High-value products from one source",
  },
  {
    title: "No Arable Land Required",
    desc: "Algae cultivation doesn't compete with food crops. It can be grown in deserts, on wastewater, or in marine environments.",
    stat: "0",
    statLabel: "Arable land needed",
  },
  {
    title: "CO₂ Absorption",
    desc: "Algae consume CO₂ as they grow, absorbing up to 1.8 tonnes of CO₂ per tonne of biomass produced — making the process carbon-negative.",
    stat: "1.8t",
    statLabel: "CO₂ absorbed per tonne",
  },
];

const longTermImpacts = [
  {
    year: "Year 1-2",
    title: "Immediate Soil Activation",
    description: "Microbial communities begin to flourish. Root zones expand. Nutrient absorption improves by 15-20%. Plants show visible vigor improvement.",
    color: "from-emerald-400 to-green-500",
    health: 20,
    emoji: "🌱",
    details: ["Microbial diversity +15%", "Root zone expansion +40%", "Nutrient uptake +20%", "Visible plant vigor"],
  },
  {
    year: "Year 3-5",
    title: "Soil Ecosystem Transformation",
    description: "Organic matter builds up significantly. Water retention improves by up to 30%. Soil structure becomes crumbly and well-aerated. Chemical input requirements drop.",
    color: "from-green-500 to-teal-500",
    health: 50,
    emoji: "🌿",
    details: ["Organic matter +25%", "Water retention +30%", "Chemical inputs -40%", "Soil structure improved"],
  },
  {
    year: "Year 5-10",
    title: "Regenerative Agriculture Achieved",
    description: "Self-sustaining soil ecosystems develop. Carbon sequestration reaches optimal levels. Crop yields stabilize at peak performance with minimal external inputs.",
    color: "from-teal-500 to-cyan-500",
    health: 80,
    emoji: "🌳",
    details: ["Carbon sequestration optimal", "Self-sustaining ecosystem", "Peak crop yields", "Minimal external inputs"],
  },
  {
    year: "Year 10+",
    title: "Legacy Soil Health",
    description: "Degraded farmlands are fully restored. Biodiversity thrives above and below ground. The land becomes more valuable and productive for future generations.",
    color: "from-cyan-500 to-blue-500",
    health: 100,
    emoji: "🏞️",
    details: ["Farmland fully restored", "Biodiversity thriving", "Land value increased", "Generational sustainability"],
  },
];

const chainData = [
  {
    emoji: "💧", label: "Water Revival", gradient: "from-cyan-400 to-blue-500", bgLight: "bg-cyan-50", borderColor: "border-cyan-200",
    steps: [
      { icon: "🌱", title: "Soil is Restored", desc: "Biostimulants rebuild soil organic matter and structure", stat: "", color: "border-emerald-300 bg-emerald-50" },
      { icon: "🧽", title: "Water Absorption 6x Higher", desc: "Healthy soil infiltrates water at >0.30 inches/hour vs <0.05 in degraded soil", stat: "6x", color: "border-cyan-300 bg-cyan-50" },
      { icon: "💧", title: "Groundwater Recharges", desc: "Every 1% increase in organic matter holds 20,000–25,000 extra gallons of water per acre", stat: "25,000 gal", color: "border-blue-300 bg-blue-50" },
      { icon: "🚰", title: "700 Million Indians Benefit", desc: "85% of rural households depend on groundwater. 63% of districts face falling water tables — restored soil reverses this", stat: "700M", color: "border-indigo-300 bg-indigo-50" },
    ],
  },
  {
    emoji: "🌬️", label: "Clean Air", gradient: "from-sky-400 to-blue-600", bgLight: "bg-sky-50", borderColor: "border-sky-200",
    steps: [
      { icon: "🌱", title: "Soil is Restored", desc: "Biostimulants increase soil organic matter and microbial activity", stat: "", color: "border-emerald-300 bg-emerald-50" },
      { icon: "🪱", title: "Carbon Gets Locked In", desc: "Regenerative croplands sequester 1.8–7.3 tonnes of CO₂ per hectare per year", stat: "7.3t CO₂/ha", color: "border-green-300 bg-green-50" },
      { icon: "🌿", title: "India's Massive Potential", desc: "Indian soils can sequester 22–26 Tg of carbon per year. Soil organic carbon dropped from 1% to 0.3%", stat: "26 Tg C/yr", color: "border-sky-300 bg-sky-50" },
      { icon: "💨", title: "Cleaner Air for 1.4 Billion", desc: "Agriculture causes 17% of India's GHG emissions. Increasing soil carbon by 0.4% annually makes a massive difference", stat: "17% GHG ↓", color: "border-blue-300 bg-blue-50" },
    ],
  },
  {
    emoji: "🌾", label: "Nutrient-Rich Food", gradient: "from-amber-400 to-orange-500", bgLight: "bg-amber-50", borderColor: "border-amber-200",
    steps: [
      { icon: "🌱", title: "Soil is Restored", desc: "Microbial communities and mycorrhizal fungi networks are rebuilt", stat: "", color: "border-emerald-300 bg-emerald-50" },
      { icon: "🦠", title: "Microbes Unlock Nutrients", desc: "Mycorrhizal fungi increase zinc uptake by ~33%. Regenerative soils produce crops with 50% more zinc", stat: "+50% Zn", color: "border-amber-300 bg-amber-50" },
      { icon: "🥗", title: "Crops Become Nutrient-Dense", desc: "15% more carotenoids, 20% more phenolics, 20–70% more vitamins C, K, and E", stat: "+70% Vit", color: "border-orange-300 bg-orange-50" },
      { icon: "❤️", title: "200 Million Lives Improved", desc: "200 million Indians are malnourished, 203 million women are anaemic. Nutrient-rich soil directly addresses this", stat: "200M", color: "border-rose-300 bg-rose-50" },
    ],
  },
  {
    emoji: "🏞️", label: "Clean Rivers", gradient: "from-teal-400 to-cyan-600", bgLight: "bg-teal-50", borderColor: "border-teal-200",
    steps: [
      { icon: "🌱", title: "Soil is Restored", desc: "Healthy soil naturally filters water and reduces the need for chemical inputs", stat: "", color: "border-emerald-300 bg-emerald-50" },
      { icon: "🚫", title: "Chemical Use Drops 30–50%", desc: "India spends ₹1.68 lakh crore/year on fertilizer subsidies. Regenerative practices cut need by 30–50%", stat: "₹1.68L Cr", color: "border-teal-300 bg-teal-50" },
      { icon: "🧪", title: "Nitrate Pollution Falls", desc: "56% of Indian districts exceed safe groundwater nitrate limits from excess fertilizer", stat: "56% ↓", color: "border-cyan-300 bg-cyan-50" },
      { icon: "🏞️", title: "351 Polluted Rivers Revive", desc: "India has 351 polluted river stretches across 323 rivers. Sikkim proved it's possible at scale", stat: "351", color: "border-blue-300 bg-blue-50" },
    ],
  },
  {
    emoji: "💰", label: "Farmer Prosperity", gradient: "from-green-400 to-emerald-600", bgLight: "bg-green-50", borderColor: "border-green-200",
    steps: [
      { icon: "🌱", title: "Soil is Restored", desc: "Regenerative practices rebuild soil fertility, reducing dependency on expensive chemical inputs", stat: "", color: "border-emerald-300 bg-emerald-50" },
      { icon: "📈", title: "Yields Jump Up to 50%", desc: "Indian farmers see maize yields +50%, paddy +25.9%, groundnut +18.5%", stat: "+50%", color: "border-green-300 bg-green-50" },
      { icon: "💰", title: "Income Rises 12–16%", desc: "Farmer income increases 12–16% in Indo-Gangetic Plains. Carbon credits provide additional revenue", stat: "+16%", color: "border-amber-300 bg-amber-50" },
      { icon: "🇮🇳", title: "Rural India Transforms", desc: "Only 2–3 million farmers (<5%) currently practice regenerative methods. Scaling across 150 million farmers could add billions", stat: "150M", color: "border-orange-300 bg-orange-50" },
    ],
  },
  {
    emoji: "🦋", label: "Biodiversity", gradient: "from-purple-400 to-fuchsia-500", bgLight: "bg-purple-50", borderColor: "border-purple-200",
    steps: [
      { icon: "🌱", title: "Soil is Restored", desc: "Biostimulants rebuild the living soil ecosystem that supports all life above ground", stat: "", color: "border-emerald-300 bg-emerald-50" },
      { icon: "🦠", title: "Microbial Life Explodes", desc: "Soil supports 60% of all species on Earth. A single gram holds 1 billion bacteria", stat: "60%", color: "border-purple-300 bg-purple-50" },
      { icon: "🪱", title: "Earthworms Return", desc: "Earthworms underpin 6.5% of global grain production. Their tunnels aerate soil and boost water infiltration", stat: "6.5%", color: "border-violet-300 bg-violet-50" },
      { icon: "🦋", title: "Ecosystems Recover", desc: "India lost 30.51 million hectares of healthy land in 4 years. Mycorrhizal networks connect 80–90% of plant species", stat: "30.5M ha", color: "border-fuchsia-300 bg-fuchsia-50" },
    ],
  },
];

function ChainReactionHub({ activeChain, setActiveChain }: { activeChain: number; setActiveChain: (i: number) => void }) {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);
  const [autoPlay, setAutoPlay] = useState(false);
  const [hoveredChain, setHoveredChain] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Reset and cascade reveal steps when chain changes
  useEffect(() => {
    setRevealedSteps([]);
    const timers: NodeJS.Timeout[] = [];
    const chain = chainData[activeChain];
    chain.steps.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setRevealedSteps(prev => [...prev, i]);
      }, 300 + i * 400));
    });
    return () => timers.forEach(clearTimeout);
  }, [activeChain]);

  // Auto-play cycles through chains
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveChain((activeChain + 1) % 6);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, activeChain, setActiveChain]);

  const chain = chainData[activeChain];

  return (
    <div ref={sectionRef} className="animate-on-scroll">
      {/* Central Hub — Soil radiating to 6 chains */}
      <div className="relative max-w-4xl mx-auto mb-14">
        {/* Center soil circle */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-green to-emerald-600 flex items-center justify-center shadow-xl shadow-brand-green/30 z-10 relative">
              <span className="text-4xl">🌱</span>
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-brand-green/30 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="absolute -inset-3 rounded-full border border-brand-green/15 animate-ping" style={{ animationDuration: "3s" }} />
          </div>
        </div>
        <p className="text-center text-sm font-semibold text-brand-dark mb-8">Restored Soil</p>

        {/* 6 chain buttons in a responsive grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
          {chainData.map((c, i) => (
            <button
              key={i}
              onClick={() => { setActiveChain(i); setAutoPlay(false); }}
              onMouseEnter={() => setHoveredChain(i)}
              onMouseLeave={() => setHoveredChain(null)}
              className="relative group"
            >
              {/* Connector line from top */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 transition-all duration-500 ${
                activeChain === i ? "bg-brand-green" : "bg-gray-200"
              }`}>
                {activeChain === i && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-green animate-bounce" style={{ animationDuration: "1s" }} />
                )}
              </div>

              <div className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                activeChain === i
                  ? `${c.bgLight} ${c.borderColor} shadow-lg scale-105`
                  : hoveredChain === i
                    ? "bg-gray-50 border-gray-200 shadow-md scale-102"
                    : "bg-white border-gray-100 hover:border-gray-200"
              }`}>
                <span className={`text-2xl transition-transform duration-500 ${activeChain === i ? "scale-125 animate-bounce" : "group-hover:scale-110"}`}
                  style={activeChain === i ? { animationDuration: "2s" } : {}}>
                  {c.emoji}
                </span>
                <span className={`text-xs font-medium text-center leading-tight transition-colors duration-300 ${
                  activeChain === i ? "text-brand-dark" : "text-gray-400 group-hover:text-gray-600"
                }`}>
                  {c.label}
                </span>
                {activeChain === i && (
                  <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r ${c.gradient}`} />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Auto-play toggle */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
            autoPlay
              ? "bg-brand-green text-white shadow-lg shadow-brand-green/25"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          <svg className={`w-3.5 h-3.5 ${autoPlay ? "animate-spin" : ""}`} style={autoPlay ? { animationDuration: "3s" } : {}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {autoPlay ? <path d="M21 12a9 9 0 11-6.219-8.56" /> : <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />}
          </svg>
          {autoPlay ? "Playing — click to pause" : "Auto-play all chains"}
        </button>
      </div>

      {/* Chain steps — cascading reveal */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-0">
          {chain.steps.map((step, i) => {
            const isRevealed = revealedSteps.includes(i);
            return (
              <div key={`${activeChain}-${i}`}>
                <div
                  className={`relative p-6 md:p-8 rounded-2xl border-2 ${step.color} transition-all duration-700 cursor-default ${
                    isRevealed
                      ? "opacity-100 translate-y-0 shadow-sm hover:shadow-xl hover:-translate-y-1"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Step number badge */}
                  <div className={`absolute -left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-r ${chain.gradient} text-white text-xs font-bold flex items-center justify-center shadow-md transition-all duration-500 ${
                    isRevealed ? "scale-100" : "scale-0"
                  }`}>
                    {i + 1}
                  </div>

                  <div className="flex items-start gap-5">
                    <div className={`text-3xl md:text-4xl flex-shrink-0 mt-1 transition-all duration-700 ${
                      isRevealed ? "scale-100 rotate-0" : "scale-0 -rotate-180"
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                    {step.stat && (
                      <div className={`flex-shrink-0 text-right transition-all duration-700 delay-300 ${
                        isRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}>
                        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${chain.gradient} bg-clip-text text-transparent`}>
                          {step.stat}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Shimmer effect on reveal */}
                  {isRevealed && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_ease-in-out_1]"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Animated connector */}
                {i < chain.steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className={`relative transition-all duration-700 ${
                      isRevealed ? "h-10 opacity-100" : "h-0 opacity-0"
                    }`}>
                      <div className={`w-0.5 h-full bg-gradient-to-b ${chain.gradient} opacity-40`} />
                      {/* Flowing particle */}
                      <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${chain.gradient} shadow-sm`}
                        style={{
                          animation: isRevealed ? "flowDown 1.5s ease-in-out infinite" : "none",
                        }}
                      />
                      {/* Arrow */}
                      <svg className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 text-brand-green/40`} viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 12L0 6h12z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* The meta-insight — appears after all steps */}
        <div className={`mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border border-green-200 text-center transition-all duration-700 ${
          revealedSteps.length === 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="flex justify-center mb-3">
            <div className="flex -space-x-2">
              {chainData.map((c, i) => (
                <span key={i} className={`w-8 h-8 rounded-full ${c.bgLight} border-2 border-white flex items-center justify-center text-sm transition-transform duration-300 hover:scale-125 hover:z-10 cursor-default`}>
                  {c.emoji}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-brand-dark">The Compounding Loop:</span> Each chain reinforces the others.
            More water retention → more microbial life → more carbon stored → more organic matter → even more water retention.
            <span className="font-semibold text-brand-green"> This is why soil restoration is the highest-leverage climate and economic investment of our time.</span>
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => { setActiveChain((activeChain - 1 + 6) % 6); setAutoPlay(false); }}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="flex items-center gap-1.5">
            {chainData.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveChain(i); setAutoPlay(false); }}
                className={`rounded-full transition-all duration-300 ${
                  activeChain === i ? "w-6 h-2 bg-brand-green" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => { setActiveChain((activeChain + 1) % 6); setAutoPlay(false); }}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes flowDown {
          0% { top: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export default function BiostimulantPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeChain, setActiveChain] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const faqs = [
    {
      q: "What exactly are biostimulants?",
      a: "Biostimulants are naturally derived substances that enhance plant nutrition, growth, and stress tolerance — without being fertilizers or pesticides themselves. They work by stimulating natural biological processes in plants and soil.",
    },
    {
      q: "How are biostimulants different from fertilizers?",
      a: "Fertilizers supply nutrients directly. Biostimulants enhance how plants absorb and use those nutrients. They improve the efficiency of the entire plant-soil system rather than just adding more inputs.",
    },
    {
      q: "Why does Loop Fuels extract biostimulants from algae?",
      a: "Algae are the most efficient biological source of biostimulant compounds. Our process extracts lipids for SAF production and biostimulants simultaneously — creating two high-value products with zero waste, making our entire operation more sustainable and economically viable.",
    },
    {
      q: "Are algae-derived biostimulants safe for organic farming?",
      a: "Yes. Algae-derived biostimulants are 100% natural and compatible with organic farming practices. They contain no synthetic chemicals and enhance natural soil and plant processes.",
    },
    {
      q: "What is the long-term impact on soil?",
      a: "Over years of application, biostimulants fundamentally transform soil health — increasing organic matter, microbial diversity, water retention, and carbon storage. They effectively reverse soil degradation and build regenerative agricultural systems.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-gradient-to-br from-brand-dark via-brand-dark to-emerald-800/60 overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl float-slow" />
          <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-green-400/6 rounded-full blur-3xl float" style={{ animationDelay: "3s" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Algae-Derived Biostimulants
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-200">
              Nourishing Soil, <br />
              <span className="gradient-text">Growing the Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300/80 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
              Loop Fuels extracts powerful biostimulants from algae — unlocking nature&apos;s
              potential to regenerate soil, boost crop yields, and build resilient
              agricultural systems for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Biostimulants */}
      <SectionWrapper bg="light">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll slide-left">
            <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
              Understanding Biostimulants
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-5">
              What Are Biostimulants?
            </h2>
            <p className="text-gray-500 mb-5 leading-relaxed">
              Biostimulants are naturally occurring substances — including amino acids,
              humic acids, seaweed extracts, and microbial compounds — that enhance
              plant growth and soil vitality through biological pathways.
            </p>
            <p className="text-gray-500 mb-5 leading-relaxed">
              Unlike synthetic fertilizers that force-feed nutrients, biostimulants work
              <span className="text-brand-dark font-medium"> with nature</span> — activating
              the plant&apos;s own immune system, improving nutrient uptake efficiency, and
              nurturing the complex web of soil microorganisms that healthy agriculture
              depends on.
            </p>
            <p className="text-gray-500 leading-relaxed">
              The global biostimulant market is projected to reach <span className="text-brand-dark font-semibold">$5.6 billion by 2030</span>,
              driven by the urgent need for sustainable farming solutions that can feed
              a growing population without destroying the planet.
            </p>
          </div>
          <div className="animate-on-scroll slide-right">
            <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-10 border border-green-100/50 overflow-hidden">
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-emerald-200/30" />
              <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full border border-emerald-200/20" />

              <div className="relative z-10 space-y-6">
                <h3 className="text-lg font-semibold text-brand-dark">How Biostimulants Work</h3>
                {[
                  { step: "01", label: "Applied to soil or plant foliage" },
                  { step: "02", label: "Activate soil microbial communities" },
                  { step: "03", label: "Enhance root growth & nutrient channels" },
                  { step: "04", label: "Boost plant metabolism & immunity" },
                  { step: "05", label: "Increase yield & stress resistance" },
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/60 transition-all duration-300 cursor-default">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                      {item.step}
                    </span>
                    <span className="text-gray-600 group-hover:text-brand-dark transition-colors duration-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* India Market Growth */}
      <SectionWrapper>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Market Opportunity — India 🇮🇳
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Biostimulant Market{" "}
            <span className="text-brand-green">Growth in India</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            India&apos;s biostimulant market is booming — driven by government sustainability
            initiatives, soil health concerns, and the demand for chemical-free agriculture.
          </p>
        </div>

        {/* Market Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 stagger-children">
          {[
            { value: "₹1,764", unit: "Cr", label: "Market Size (2025)", icon: "📊", accent: "bg-emerald-50 border-emerald-200 hover:border-emerald-400", textColor: "text-emerald-600" },
            { value: "₹2,856", unit: "Cr", label: "Projected by 2030", icon: "🚀", accent: "bg-sky-50 border-sky-200 hover:border-sky-400", textColor: "text-sky-600" },
            { value: "10.2", unit: "%", label: "CAGR Growth Rate", icon: "📈", accent: "bg-amber-50 border-amber-200 hover:border-amber-400", textColor: "text-amber-600" },
            { value: "86.4", unit: "%", label: "Row Crop Demand", icon: "🌾", accent: "bg-green-50 border-green-200 hover:border-green-400", textColor: "text-green-600" },
          ].map((stat, i) => (
            <div key={i} className={`animate-on-scroll group relative text-center p-6 md:p-8 rounded-2xl border-2 ${stat.accent} transition-all duration-500 cursor-default hover:-translate-y-2 hover:shadow-xl`}>
              <div className="text-2xl mb-3 transition-transform duration-500 group-hover:scale-125">{stat.icon}</div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.textColor} mb-1 tracking-tight`}>
                {stat.value}<span className="text-lg">{stat.unit}</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Growth Bar Visualization — Vertical */}
        <div className="max-w-4xl mx-auto mb-16 animate-on-scroll">
          <div className="relative p-6 md:p-10 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50/50 border border-green-100">
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">Market Growth Trajectory</h3>
            <p className="text-gray-500 text-sm mb-8">Projected market size from 2023 to 2030 (in ₹ Crores)</p>

            <div className="grid grid-cols-8 gap-1 md:gap-3 items-end" style={{ height: "280px" }}>
              {[
                { year: "2023", value: 1420, max: 2856, color: "from-emerald-400 to-emerald-500" },
                { year: "2024", value: 1580, max: 2856, color: "from-emerald-400 to-green-500" },
                { year: "2025", value: 1764, max: 2856, color: "from-green-400 to-green-500" },
                { year: "2026", value: 1944, max: 2856, color: "from-green-400 to-teal-500" },
                { year: "2027", value: 2142, max: 2856, color: "from-teal-400 to-teal-500" },
                { year: "2028", value: 2360, max: 2856, color: "from-teal-400 to-emerald-500" },
                { year: "2029", value: 2598, max: 2856, color: "from-emerald-400 to-green-500" },
                { year: "2030", value: 2856, max: 2856, color: "from-green-500 to-emerald-600" },
              ].map((bar, i) => (
                <div key={i} className="group flex flex-col items-center gap-1 cursor-default h-full justify-end">
                  <span className="text-[9px] md:text-xs font-bold text-gray-500 group-hover:text-brand-green transition-colors duration-300 whitespace-nowrap">₹{bar.value.toLocaleString()}</span>
                  <div className="w-full bg-white rounded-t-lg border border-gray-100 shadow-sm overflow-hidden relative transition-all duration-500 group-hover:shadow-lg group-hover:border-green-200"
                    style={{ height: `${(bar.value / bar.max) * 80}%` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-t ${bar.color} transition-all duration-700 group-hover:brightness-110`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <span className="text-[9px] md:text-xs font-mono text-gray-400 group-hover:text-brand-dark transition-colors duration-300 font-semibold">{bar.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Drivers & Segments */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Key Growth Drivers */}
          <div className="animate-on-scroll slide-left">
            <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm h-full hover:shadow-lg hover:border-green-200 transition-all duration-500">
              <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-green to-emerald-600 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </span>
                Key Growth Drivers
              </h3>
              <div className="space-y-2">
                {[
                  { title: "Government Programs", desc: "PKVY, NMSA & PM-PRANAM channeling subsidies toward sustainable alternatives", emoji: "🏛️" },
                  { title: "Soil Health Crisis", desc: "Decades of synthetic fertilizer overuse degrading India's farmlands", emoji: "🌍" },
                  { title: "Export Agriculture", desc: "Rising global demand for residue-free, organic produce from India", emoji: "📦" },
                  { title: "Expanding Horticulture", desc: "Fruits, vegetables & spice crops requiring efficient nutrient solutions", emoji: "🌶️" },
                  { title: "Drip Fertigation", desc: "Modern irrigation infrastructure enabling easier biostimulant application", emoji: "💧" },
                ].map((driver, i) => (
                  <div key={i} className="group flex gap-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 cursor-default">
                    <span className="text-xl flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125">{driver.emoji}</span>
                    <div>
                      <p className="text-brand-dark text-sm font-semibold group-hover:text-brand-green transition-colors duration-300">{driver.title}</p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{driver.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Segments */}
          <div className="animate-on-scroll slide-right">
            <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm h-full hover:shadow-lg hover:border-green-200 transition-all duration-500">
              <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </span>
                Market Segments
              </h3>
              <div className="space-y-5">
                {[
                  { label: "Seaweed Extracts", pct: 38.8, note: "Largest segment — stress tolerance", color: "from-emerald-500 to-green-400" },
                  { label: "Humic Acid", pct: 22, note: "Fastest growing at ~12% CAGR", color: "from-teal-500 to-emerald-400" },
                  { label: "Amino Acids", pct: 18, note: "Protein synthesis & crop quality", color: "from-green-500 to-lime-400" },
                  { label: "Microbial Amendments", pct: 12, note: "Rising in organic farming", color: "from-emerald-600 to-green-500" },
                  { label: "Others", pct: 9.2, note: "Fulvic acid, vitamins & more", color: "from-lime-500 to-green-400" },
                ].map((seg, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-700 font-semibold group-hover:text-brand-dark transition-colors duration-300">{seg.label}</span>
                      <span className="text-sm font-bold text-brand-green">{seg.pct}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${seg.color} rounded-full transition-all duration-700 group-hover:shadow-md`}
                        style={{ width: `${seg.pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1.5">{seg.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-400 text-xs italic">Sources: Mordor Intelligence, Grand View Research, MarketsandMarkets (2025)</p>
        </div>
      </SectionWrapper>

      {/* Benefits Grid — Interactive Cards */}
      <SectionWrapper>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Plant & Soil Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            What Biostimulants Do
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From root tips to soil microbes, biostimulants create cascading positive
            effects across the entire agricultural ecosystem.
          </p>
          <p className="mt-2 text-xs text-gray-400 hidden md:block">Hover over each card to explore</p>
          <p className="mt-2 text-xs text-gray-400 md:hidden">Tap any card to explore</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {benefits.map((b, i) => {
            const statValues = [
              { stat: "+40%", highlight: "Root growth increase", detail: "Plants access 2x deeper water tables" },
              { stat: "3x", highlight: "More stress resilient", detail: "Survives drought & salinity extremes" },
              { stat: "+25%", highlight: "Higher crop yields", detail: "Better nutrient uptake & photosynthesis" },
              { stat: "∞", highlight: "Long-term fertility", detail: "Soil improves with each season" },
              { stat: "-30%", highlight: "Chemical reduction", detail: "Natural immunity replaces pesticides" },
              { stat: "1.8T", highlight: "CO₂ per tonne absorbed", detail: "Healthier soil = more carbon locked" },
            ];
            const sv = statValues[i];
            return (
              <TiltCard key={i}>
                {/* Desktop: 3D flip on hover */}
                <div className="animate-on-scroll hidden md:block relative h-80 [perspective:1000px] cursor-pointer group">
                  <div className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-green/20 shadow-sm flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                        {b.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-brand-dark mb-2">{b.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                      <div className="mt-auto pt-3 flex items-center gap-1 text-xs text-brand-green font-medium">
                        <span>Hover to see impact</span>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] transition-transform duration-700 group-hover:[transform:rotateY(360deg)]">
                    <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-brand-green to-emerald-600 text-white flex flex-col items-center justify-center text-center shadow-xl shadow-green-200/50">
                      <div className="text-5xl font-bold mb-2">{sv.stat}</div>
                      <div className="text-base font-semibold mb-2">{sv.highlight}</div>
                      <div className="text-sm text-white/70">{sv.detail}</div>
                      <div className="mt-4 w-16 h-0.5 bg-white/30 rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Mobile: tap to reveal impact overlay */}
                <div
                  className="animate-on-scroll md:hidden cursor-pointer"
                  onClick={() => setFlippedCard(flippedCard === i ? null : i)}
                >
                  <div className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                    flippedCard === i
                      ? "bg-gradient-to-br from-brand-green to-emerald-600 border-brand-green shadow-xl shadow-green-200/50"
                      : "bg-white border-gray-100"
                  }`}>
                    <div className={`p-8 transition-all duration-500 ${flippedCard === i ? "opacity-0 h-0 p-0 overflow-hidden" : "opacity-100"}`}>
                      <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                        {b.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-brand-dark mb-2">{b.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-xs text-brand-green font-medium">
                        <span>Tap to see impact</span>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                    <div className={`p-8 text-center text-white transition-all duration-500 ${flippedCard === i ? "opacity-100" : "opacity-0 h-0 p-0 overflow-hidden"}`}>
                      <div className="text-5xl font-bold mb-2">{sv.stat}</div>
                      <div className="text-base font-semibold mb-2">{sv.highlight}</div>
                      <div className="text-sm text-white/70 mb-3">{sv.detail}</div>
                      <div className="w-16 h-0.5 bg-white/30 rounded-full mx-auto mb-3" />
                      <p className="text-xs text-white/40">Tap to flip back</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Why Algae — Tabbed Section */}
      <SectionWrapper>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            The Loop Fuels Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Why Algae-Derived Biostimulants?
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Algae are nature&apos;s most efficient biofactories. Loop Fuels harnesses them
            to produce both sustainable aviation fuel and premium biostimulants.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {algaeAdvantages.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-brand-green text-white shadow-lg shadow-brand-green/25"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-brand-dark border border-gray-200"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{algaeAdvantages[activeTab].title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{algaeAdvantages[activeTab].desc}</p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-green-100 to-emerald-50 border border-green-200 flex items-center justify-center group hover:scale-105 transition-transform duration-500 overflow-hidden">
                {activeTab === 0 ? (
                  <>
                    {/* Algae cell division animation */}
                    <style>{`
                      @keyframes cellSplit {
                        0% { transform: scale(1) translate(0, 0); border-radius: 50%; }
                        50% { transform: scale(1.1, 0.85) translate(0, 0); border-radius: 40%; }
                        100% { transform: scale(0.7) translate(var(--tx), var(--ty)); border-radius: 50%; }
                      }
                      @keyframes cellPulse {
                        0%, 100% { transform: translate(var(--tx), var(--ty)) scale(0.7); }
                        50% { transform: translate(var(--tx), var(--ty)) scale(0.8); }
                      }
                      .algae-cell {
                        position: absolute;
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        background: radial-gradient(circle at 35% 35%, #86efac, #22c55e 50%, #16a34a);
                        box-shadow: inset -2px -2px 4px rgba(0,0,0,0.15), inset 2px 2px 4px rgba(255,255,255,0.3), 0 0 8px rgba(34,197,94,0.3);
                      }
                      .algae-cell::before {
                        content: '';
                        position: absolute;
                        width: 8px;
                        height: 6px;
                        background: rgba(255,255,255,0.4);
                        border-radius: 50%;
                        top: 5px;
                        left: 6px;
                      }
                      .algae-cell::after {
                        content: '';
                        position: absolute;
                        width: 4px;
                        height: 3px;
                        background: rgba(255,255,255,0.25);
                        border-radius: 50%;
                        top: 12px;
                        left: 8px;
                      }
                      .cell-parent {
                        animation: cellSplit 3s ease-in-out infinite;
                      }
                      .cell-child {
                        animation: cellPulse 2s ease-in-out infinite;
                      }
                    `}</style>
                    <div className="algae-cell cell-parent" style={{ "--tx": "0px", "--ty": "0px", width: "32px", height: "32px", zIndex: 3 } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "-20px", "--ty": "-18px", animationDelay: "0.3s", width: "22px", height: "22px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "22px", "--ty": "-14px", animationDelay: "0.6s", width: "20px", height: "20px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "-24px", "--ty": "16px", animationDelay: "0.9s", width: "18px", height: "18px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "18px", "--ty": "20px", animationDelay: "1.2s", width: "24px", height: "24px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "0px", "--ty": "-30px", animationDelay: "1.5s", width: "16px", height: "16px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "-32px", "--ty": "0px", animationDelay: "1.8s", width: "18px", height: "18px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "30px", "--ty": "4px", animationDelay: "2.1s", width: "16px", height: "16px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "0px", "--ty": "30px", animationDelay: "2.4s", width: "20px", height: "20px" } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "-40px", "--ty": "-30px", animationDelay: "2.7s", width: "12px", height: "12px", opacity: 0.7 } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "38px", "--ty": "-28px", animationDelay: "3s", width: "10px", height: "10px", opacity: 0.7 } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "-38px", "--ty": "32px", animationDelay: "3.3s", width: "12px", height: "12px", opacity: 0.7 } as React.CSSProperties} />
                    <div className="algae-cell cell-child" style={{ "--tx": "36px", "--ty": "30px", animationDelay: "3.6s", width: "10px", height: "10px", opacity: 0.7 } as React.CSSProperties} />
                  </>
                ) : activeTab === 3 ? (
                  <>
                    {/* CO₂ absorption animation — eye-catching */}
                    <style>{`
                      @keyframes co2Absorb {
                        0% { transform: translate(var(--sx), var(--sy)) scale(1); opacity: 1; filter: blur(0px); }
                        70% { opacity: 0.8; filter: blur(0px); }
                        90% { opacity: 0.3; filter: blur(2px); }
                        100% { transform: translate(0px, 0px) scale(0); opacity: 0; filter: blur(4px); }
                      }
                      @keyframes coreBreath {
                        0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(34,197,94,0.3), 0 0 40px rgba(34,197,94,0.1); }
                        50% { transform: scale(1.12); box-shadow: 0 0 30px rgba(34,197,94,0.5), 0 0 60px rgba(34,197,94,0.2); }
                      }
                      @keyframes ringPulse {
                        0%, 100% { transform: scale(1); opacity: 0.3; }
                        50% { transform: scale(1.15); opacity: 0.1; }
                      }
                      @keyframes ringPulse2 {
                        0%, 100% { transform: scale(1); opacity: 0.15; }
                        50% { transform: scale(1.2); opacity: 0.05; }
                      }
                      .co2-mol {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        gap: 2px;
                        animation: co2Absorb 4s ease-in infinite;
                      }
                      .co2-mol .atom-c {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #6b7280, #374151);
                        box-shadow: 0 0 4px rgba(107,114,128,0.5);
                      }
                      .co2-mol .atom-o {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #ef4444, #dc2626);
                        box-shadow: 0 0 4px rgba(239,68,68,0.4);
                      }
                    `}</style>
                    {/* Pulsing rings around core */}
                    <div className="absolute w-32 h-32 rounded-full border-2 border-emerald-300/30" style={{ animation: "ringPulse 3s ease-in-out infinite" }} />
                    <div className="absolute w-40 h-40 rounded-full border border-emerald-200/20" style={{ animation: "ringPulse2 3s ease-in-out infinite 0.5s" }} />
                    {/* Central absorbing core — leaf */}
                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a, #15803d)", animation: "coreBreath 3s ease-in-out infinite" }}>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.68-3.93 9-12z" />
                        <path d="M6 15c3-1 5-4 5-7" />
                      </svg>
                    </div>
                    {/* CO₂ molecules (C atom + 2 O atoms) floating inward */}
                    {[
                      { sx: -70, sy: -45, d: "0s" }, { sx: 65, sy: -35, d: "0.5s" },
                      { sx: -55, sy: 50, d: "1s" }, { sx: 60, sy: 45, d: "1.5s" },
                      { sx: 5, sy: -68, d: "2s" }, { sx: -72, sy: 5, d: "2.5s" },
                      { sx: 68, sy: -5, d: "3s" }, { sx: -5, sy: 65, d: "3.5s" },
                      { sx: -50, sy: -55, d: "0.7s" }, { sx: 48, sy: -58, d: "1.7s" },
                      { sx: -48, sy: 55, d: "2.7s" }, { sx: 52, sy: 52, d: "3.2s" },
                    ].map((p, i) => (
                      <div key={i} className="co2-mol" style={{ "--sx": `${p.sx}px`, "--sy": `${p.sy}px`, animationDelay: p.d } as React.CSSProperties}>
                        <div className="atom-o" />
                        <div className="atom-c" />
                        <div className="atom-o" />
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-green-50 to-transparent border border-green-100" />
                    <div className="text-center relative z-10">
                      <div className="text-4xl md:text-5xl font-bold text-brand-green mb-1">{algaeAdvantages[activeTab].stat}</div>
                      <div className="text-xs text-gray-500 max-w-[120px]">{algaeAdvantages[activeTab].statLabel}</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Dual Product Model — Animated Flow */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Circular Bioeconomy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            One Source, Two Solutions
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our algae-based process creates a closed-loop system — extracting lipids
            for aviation fuel and biostimulants for agriculture from a single feedstock.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <style jsx>{`
            @keyframes flowLeft { 0% { left: 50%; top: 0; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { left: 5%; top: 100%; opacity: 0; } }
            @keyframes flowRight { 0% { right: 50%; top: 0; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { right: 5%; top: 100%; opacity: 0; } }
            @keyframes glowPulse { 0%, 100% { box-shadow: 0 0 20px rgba(34,197,94,0.3), 0 0 40px rgba(34,197,94,0.1); } 50% { box-shadow: 0 0 30px rgba(34,197,94,0.5), 0 0 60px rgba(34,197,94,0.2); } }
          `}</style>

          <div className="relative">
            {/* Flowing particles — left branch */}
            <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
              {[0, 1, 2].map(i => (
                <div key={`l${i}`} className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-300"
                  style={{ animation: `flowLeft 3s ease-in-out infinite`, animationDelay: `${i * 1}s` }} />
              ))}
              {[0, 1, 2].map(i => (
                <div key={`r${i}`} className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-300"
                  style={{ animation: `flowRight 3s ease-in-out infinite`, animationDelay: `${i * 1}s` }} />
              ))}
            </div>

            {/* Algae source */}
            <div className="flex justify-center mb-6">
              <div className="relative z-10 bg-gradient-to-br from-brand-green to-emerald-600 text-white px-10 py-6 rounded-2xl shadow-xl text-center group hover:scale-105 transition-transform duration-500 cursor-default"
                style={{ animation: "glowPulse 3s ease-in-out infinite" }}>
                <div className="text-3xl mb-2">🌿</div>
                <h3 className="text-xl font-bold">Algae Biomass</h3>
                <p className="text-white/70 text-sm">Cultivated sustainably</p>
              </div>
            </div>

            {/* Split arrow */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-gradient-to-b from-brand-green to-sky-400" />
                  <svg className="w-4 h-4 text-sky-400 -mt-0.5" viewBox="0 0 12 12" fill="currentColor"><path d="M6 12L2 6h8z" /></svg>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-500">
                  Extraction Process
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-gradient-to-b from-brand-green to-emerald-400" />
                  <svg className="w-4 h-4 text-emerald-400 -mt-0.5" viewBox="0 0 12 12" fill="currentColor"><path d="M6 12L2 6h8z" /></svg>
                </div>
              </div>
            </div>

            {/* Two product cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <TiltCard>
                <div className="group relative p-8 rounded-2xl bg-white border-2 border-sky-100 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-500 cursor-default text-center h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-500" />
                  <div className="relative w-16 h-16 mx-auto mb-5 rounded-2xl bg-sky-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-3xl">✈️</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Lipids → SAF</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Lipids extracted from algae are converted into Sustainable Aviation
                    Fuel through our HEFA process — powering clean flight with up to
                    80% lower carbon emissions.
                  </p>
                  <div className="flex justify-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold border border-sky-100">80% Lower CO₂</span>
                    <span className="px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold border border-sky-100">ASTM Certified</span>
                  </div>
                  <a href="/technology" className="mt-5 inline-flex items-center gap-1 text-xs text-sky-500 font-medium hover:text-sky-700 transition-colors">
                    Learn about our HEFA technology
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </TiltCard>
              <TiltCard>
                <div className="group relative p-8 rounded-2xl bg-white border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500 cursor-default text-center h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500" />
                  <div className="relative w-16 h-16 mx-auto mb-5 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Biostimulants → Agriculture</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    The remaining biomass yields potent biostimulants that revitalize soil,
                    boost crop yields, and reduce chemical dependency — feeding the planet
                    sustainably.
                  </p>
                  <div className="flex justify-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-100">+25% Yield</span>
                    <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-100">Zero Waste</span>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Circular loop indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-50 to-sky-50 border border-green-100">
                <svg className="w-5 h-5 text-brand-green animate-spin" style={{ animationDuration: "4s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                <span className="text-sm font-medium text-brand-dark">Closed-loop circular process — zero waste</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Long-Term Impact Timeline — Interactive */}
      <SectionWrapper>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Long-Term Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            The Compounding Effect
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Biostimulants don&apos;t just provide short-term boosts — they create lasting,
            compounding improvements in soil health that grow stronger over time.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Soil Health Gauge */}
          <div className="flex justify-center mb-12 animate-on-scroll">
            <div className="relative w-full max-w-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-brand-dark">Soil Health Progress</span>
                <span className="text-sm font-bold text-brand-green">{longTermImpacts[activeTimeline].health}%</span>
              </div>
              <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out relative"
                  style={{
                    width: `${longTermImpacts[activeTimeline].health}%`,
                    background: `linear-gradient(90deg, #22c55e, #14b8a6, #06b6d4)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-pulse" />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Degraded</span>
                <span className="text-xs text-gray-400">Regenerated</span>
              </div>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block">
              <div
                className="w-full bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                style={{ height: `${((activeTimeline + 1) / longTermImpacts.length) * 100}%` }}
              />
            </div>

            <div className="space-y-8 md:space-y-0">
              {longTermImpacts.map((impact, i) => {
                const isActive = activeTimeline === i;
                const isPast = i <= activeTimeline;
                const isLeft = i % 2 === 0;

                return (
                  <div key={i} className="relative animate-on-scroll">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 top-8">
                      <button
                        onClick={() => setActiveTimeline(i)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-500 border-4 ${
                          isActive
                            ? "bg-brand-green border-white shadow-lg shadow-green-300/50 scale-110"
                            : isPast
                            ? "bg-emerald-100 border-white shadow-md"
                            : "bg-gray-100 border-white shadow-sm"
                        }`}
                      >
                        {impact.emoji}
                      </button>
                    </div>

                    {/* Card — alternating left/right */}
                    <div className={`md:w-[calc(50%-40px)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"} pb-8`}>
                      <button
                        onClick={() => setActiveTimeline(i)}
                        className={`w-full text-left relative p-6 rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                          isActive
                            ? "bg-white border-brand-green/30 shadow-xl shadow-green-100/50 -translate-y-1"
                            : isPast
                            ? "bg-white border-green-100 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            : "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-md"
                        }`}
                      >
                        {/* Mobile emoji */}
                        <div className="md:hidden flex items-center gap-3 mb-3">
                          <span className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${isActive ? "bg-brand-green/10" : "bg-gray-100"}`}>
                            {impact.emoji}
                          </span>
                          <span className={`px-3 py-1 rounded-lg text-xs font-bold ${isActive ? "bg-brand-green/10 text-brand-green" : "bg-gray-100 text-gray-500"}`}>
                            {impact.year}
                          </span>
                        </div>

                        {/* Desktop year badge */}
                        <span className={`hidden md:inline-block px-3 py-1 rounded-lg text-xs font-bold mb-3 ${isActive ? "bg-brand-green/10 text-brand-green" : "bg-gray-100 text-gray-500"}`}>
                          {impact.year}
                        </span>

                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isActive ? "text-brand-green" : "text-brand-dark"}`}>
                          {impact.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{impact.description}</p>

                        {/* Expanded details */}
                        <div className={`grid transition-all duration-500 ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                          <div className="overflow-hidden">
                            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                              {impact.details.map((detail, j) => (
                                <div key={j} className="flex items-center gap-2 p-2 rounded-lg bg-green-50/50">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                  </svg>
                                  <span className="text-xs text-gray-600 font-medium">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Active indicator arrow for desktop */}
                        {isActive && (
                          <div className={`hidden md:block absolute top-9 ${isLeft ? "-right-3" : "-left-3"} w-3 h-3 bg-white border-2 border-brand-green/30 rotate-45`} />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats — Radial Progress */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-emerald-900 py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[10%] w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-green-400/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">The Numbers That Matter</h3>
            <p className="text-white/40 text-sm mt-2">Proven impact of biostimulants on Indian agriculture</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 40, suffix: "%", label: "Root Growth Increase", color: "#22c55e" },
              { value: 25, suffix: "%", label: "Higher Crop Yields", color: "#14b8a6" },
              { value: 30, suffix: "%", label: "Less Chemical Input", color: "#06b6d4" },
              { value: 1.8, suffix: "T", label: "CO₂ Absorbed Per Tonne", color: "#10b981" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default animate-on-scroll">
                <div className="relative w-28 h-28 mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke={stat.color} strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - (stat.value > 1 ? stat.value / 100 : stat.value))}`}
                      className="transition-all duration-1000 ease-out group-hover:drop-shadow-[0_0_8px_currentColor]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-white/60 text-center font-medium group-hover:text-white/90 transition-colors duration-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chain Reaction — Interactive Cascading Impact */}
      <SectionWrapper>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            The Chain Reaction
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            One Restored Soil, Six Revolutions
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Restoring soil isn&apos;t just about farming — it triggers a cascading chain reaction
            that revives water, climate, health, economy, and biodiversity.
          </p>
        </div>

        {/* Interactive Hub — Central soil with radiating chains */}
        <ChainReactionHub activeChain={activeChain} setActiveChain={setActiveChain} />

        <div className="text-center mt-8 animate-on-scroll">
          <p className="text-gray-400 text-xs italic">Sources: USDA, TERI, NFHS-5, World Bank, FAO, Nature, ISRO, Rodale Institute, Down to Earth</p>
        </div>
      </SectionWrapper>

      {/* FAQ — Interactive Accordion */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          {/* Progress indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {faqs.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-500 ${
                expandedFaq === i ? "w-8 bg-brand-green" : "w-3 bg-gray-200"
              }`} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 stagger-children">
          {faqs.map((faq, i) => (
            <div key={i} className="animate-on-scroll">
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-500 group ${
                  expandedFaq === i
                    ? "bg-white border-brand-green/20 shadow-xl shadow-green-100/50"
                    : "bg-white border-gray-100 hover:border-brand-green/10 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    expandedFaq === i
                      ? "bg-brand-green text-white shadow-md shadow-green-200/50"
                      : "bg-gray-100 text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`flex-1 text-base font-semibold transition-colors duration-300 ${
                    expandedFaq === i ? "text-brand-green" : "text-brand-dark group-hover:text-brand-green"
                  }`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    expandedFaq === i ? "bg-brand-green/10 rotate-180" : "bg-gray-50"
                  }`}>
                    <svg className="w-4 h-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
                <div className={`grid transition-all duration-500 ${
                  expandedFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="pt-4 pl-12">
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green via-emerald-500 to-teal-500/80 py-24 md:py-32 overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight animate-on-scroll">
            From Algae to Aviation &amp; Agriculture
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed animate-on-scroll">
            Loop Fuels is building the future where clean energy and regenerative
            agriculture come from the same source. Join us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <a
              href="/contact"
              className="btn-animate btn-animate-light inline-flex items-center justify-center gap-2 bg-white text-brand-green px-8 py-4 rounded-xl font-semibold hover:bg-gray-50"
            >
              Partner With Us
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a
              href="/investors"
              className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm"
            >
              Invest in Loop Fuels
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
