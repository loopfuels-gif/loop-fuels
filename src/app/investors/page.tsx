import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import IconCard from "@/components/IconCard";
import TiltCard from "@/components/TiltCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedBarChart from "@/components/AnimatedBarChart";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Invest in Loop Fuels — India's SAF market opportunity projected to reach $61B by 2030. Explore our HEFA technology, market projections, and partnership opportunities.",
  keywords: [
    "invest in sustainable aviation fuel",
    "SAF investment India",
    "clean energy investment opportunity",
    "Loop Fuels investors",
    "aviation fuel startup funding",
  ],
};

const highlights = [
  {
    title: "Massive Market Opportunity",
    description: "The SAF market is projected to reach $61B by 2030 with 30%+ CAGR, driven by global decarbonization mandates.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Proven Technology",
    description: "HEFA is the most mature SAF pathway with ASTM certification and commercial track record across major airlines.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Strong Regulatory Tailwinds",
    description: "EU ReFuelEU mandate, US SAF tax credits, and CORSIA requirements create sustained demand certainty.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Offtake Agreements",
    description: "Long-term contracts with 15+ airlines provide revenue visibility and de-risk investment returns.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const marketData = [
  { year: "2024", size: "$5B", height: 60, detail: "Current market size" },
  { year: "2026", size: "$14B", height: 120, detail: "2.8x growth projected" },
  { year: "2028", size: "$32B", height: 200, detail: "Mandate-driven acceleration" },
  { year: "2030", size: "$61B", height: 280, detail: "12x from 2024 levels" },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        badge="Investor Relations"
        title="Invest in Clean Aviation"
        subtitle="Join us in building the infrastructure for a zero-carbon aviation future. A compelling market opportunity with strong fundamentals."
      />

      {/* Highlights */}
      <SectionWrapper>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Why Loop Fuels
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Investment Highlights
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {highlights.map((h) => (
            <TiltCard key={h.title}>
              <IconCard icon={h.icon} title={h.title} description={h.description} />
            </TiltCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Market Opportunity - Animated Bar Chart */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Market Size
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            SAF Market Opportunity
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Regulatory mandates and corporate commitments are driving exponential growth
            in SAF demand globally. <span className="text-brand-green font-medium">Hover over bars for details.</span>
          </p>
        </div>
        <AnimatedBarChart data={marketData} />
      </SectionWrapper>

      {/* Key Metrics - Animated Counters */}
      <SectionWrapper>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Financial Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Key Metrics
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {/* Production Capacity */}
          <TiltCard>
            <div className="animate-on-scroll group relative rounded-2xl bg-gradient-to-br from-white to-blue-50/30 border border-sky-100/60 p-7 overflow-hidden hover:shadow-xl hover:shadow-brand-accent/10 transition-shadow duration-500">
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-brand-accent/5 to-transparent rounded-tr-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent to-sky-600 flex items-center justify-center mb-5 shadow-lg shadow-brand-accent/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h2v4H8z" />
                    <path d="M14 11h2v6h-2z" />
                  </svg>
                </div>
                <AnimatedCounter value="2.5 Cr" label="Production Capacity (L/Yr)" compact />
              </div>
            </div>
          </TiltCard>
          {/* Market CAGR */}
          <TiltCard>
            <div className="animate-on-scroll group relative rounded-2xl bg-gradient-to-br from-white to-emerald-50/30 border border-green-100/60 p-7 overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-shadow duration-500">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-brand-green/5 to-transparent rounded-br-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-brand-green flex items-center justify-center mb-5 shadow-lg shadow-green-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <AnimatedCounter value="30%+" label="Market CAGR (2024-2030)" compact />
              </div>
            </div>
          </TiltCard>
          {/* 2030 Market Size */}
          <TiltCard>
            <div className="animate-on-scroll group relative rounded-2xl bg-gradient-to-br from-white to-sky-50/30 border border-sky-100/60 p-7 overflow-hidden hover:shadow-xl hover:shadow-sky-500/10 transition-shadow duration-500">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-accent/5 to-transparent rounded-tl-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-brand-accent flex items-center justify-center mb-5 shadow-lg shadow-sky-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <AnimatedCounter value="$61B" label="2030 Market Size" compact />
              </div>
            </div>
          </TiltCard>
        </div>
      </SectionWrapper>

      {/* IR Contact */}
      <section className="relative bg-gradient-to-br from-brand-green via-emerald-500 to-brand-accent/80 py-24 md:py-32 overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight animate-on-scroll">
            Interested in Investing?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed animate-on-scroll">
            Contact our investor relations team to learn more about opportunities
            with Loop Fuels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link href="/contact" className="btn-animate btn-animate-light inline-flex items-center justify-center gap-2 bg-white text-brand-green px-8 py-4 rounded-xl font-semibold hover:bg-gray-50">
              Contact IR Team
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a href="mailto:loopfuels@gmail.com" className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm">
              loopfuels@gmail.com
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
