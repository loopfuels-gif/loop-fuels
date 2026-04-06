"use client";

import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedCounter from "@/components/AnimatedCounter";

const processSteps = [
  {
    step: "01",
    title: "Feedstock Collection",
    description: "We source sustainable feedstocks including used cooking oil, animal fats, tall oil, and agricultural residues from certified suppliers worldwide.",
    icon: "🛢️",
  },
  {
    step: "02",
    title: "Pre-Treatment",
    description: "Raw feedstocks undergo degumming, bleaching, and filtration to remove impurities and prepare for the hydroprocessing stage.",
    icon: "🧪",
  },
  {
    step: "03",
    title: "Hydroprocessing (HEFA)",
    description: "Feedstocks react with hydrogen at high temperature and pressure, removing oxygen and converting triglycerides into paraffinic hydrocarbons.",
    icon: "⚡",
  },
  {
    step: "04",
    title: "Isomerization & Fractionation",
    description: "The hydrocarbon stream is isomerized to improve cold-flow properties, then fractionated to isolate the jet fuel range (C8-C16).",
    icon: "🔬",
  },
  {
    step: "05",
    title: "Quality Assurance",
    description: "Every batch undergoes rigorous testing for ASTM D7566 compliance, including thermal stability, freeze point, and combustion characteristics.",
    icon: "✅",
  },
  {
    step: "06",
    title: "Blending & Distribution",
    description: "Certified SAF is blended up to 50% with conventional jet fuel and distributed directly to airport fueling infrastructure.",
    icon: "✈️",
  },
];

const feedstocks = [
  {
    title: "Used Cooking Oil (UCO)",
    description: "Collected from restaurants and food processors, diverting waste from landfills into clean fuel.",
    icon: "♻️",
    stat: "40%",
    statLabel: "of our feedstock",
  },
  {
    title: "Animal Fats & Tallow",
    description: "By-products from the meat processing industry converted into high-energy aviation fuel.",
    icon: "🏭",
    stat: "35%",
    statLabel: "of our feedstock",
  },
  {
    title: "Algae",
    description: "Fast-growing microalgae cultivated in non-arable land, offering high oil yields without competing for freshwater or food crops.",
    icon: "🌿",
    stat: "25%",
    statLabel: "of our feedstock",
  },
];

const specs = [
  { label: "Annual Capacity", value: "2.5 Crore Litres", progress: 95 },
  { label: "Conversion Pathway", value: "HEFA", progress: 100 },
  { label: "Blend Ratio", value: "Up to 50% with conventional Jet A-1", progress: 50 },
  { label: "GHG Reduction", value: "Up to 80% lifecycle reduction", progress: 80 },
  { label: "Feedstock Flexibility", value: "Multi-feedstock capable", progress: 90 },
  { label: "Product Quality", value: "Meets ASTM D7566 Annex 2", progress: 100 },
];

const certifications = [
  { name: "ASTM D7566", description: "Standard specification for aviation turbine fuel containing synthesized hydrocarbons.", icon: "🏆" },
  { name: "CORSIA Eligible", description: "Certified under ICAO's Carbon Offsetting and Reduction Scheme for International Aviation.", icon: "🌍" },
  { name: "ISCC EU", description: "International Sustainability & Carbon Certification for EU RED II compliance.", icon: "🇪🇺" },
  { name: "RSB Certified", description: "Roundtable on Sustainable Biomaterials certification for social and environmental sustainability.", icon: "🌱" },
];

/* ─── Timeline Step ─── */
function TimelineStep({ step, index, total }: { step: typeof processSteps[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center md:items-start group">
      {/* Center line dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 flex-col items-center">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl border-4 transition-all duration-700 ${
            visible
              ? "bg-brand-green border-brand-green/30 scale-100 shadow-lg shadow-brand-green/20"
              : "bg-gray-200 border-gray-100 scale-75"
          }`}
        >
          {step.icon}
        </div>
      </div>

      {/* Content card */}
      <div
        className={`md:w-[calc(50%-40px)] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8 md:text-left"}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Mobile icon */}
        <div className="md:hidden w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-xl mb-3">
          {step.icon}
        </div>
        <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-lg">
          Step {step.step}
        </span>
        <h3 className="text-lg font-semibold text-brand-dark mt-3 mb-2 tracking-tight group-hover:text-brand-green transition-colors">
          {step.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
      </div>

      {/* Connecting line */}
      {index < total - 1 && (
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-14 w-0.5 h-full bg-gradient-to-b from-brand-green/30 to-brand-green/10" />
      )}
    </div>
  );
}

/* ─── Feedstock Card ─── */
function FeedstockCard({ f, index }: { f: typeof feedstocks[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-8 rounded-2xl bg-white border border-gray-100 overflow-hidden transition-all duration-700 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:shadow-xl hover:shadow-brand-green/10 hover:-translate-y-2`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Animated background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-accent/5 transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-10">
        <div className="text-4xl mb-4">{f.icon}</div>
        <h3 className="text-base font-semibold text-brand-dark mb-2 tracking-tight">{f.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">{f.description}</p>

      </div>
    </div>
  );
}

/* ─── Spec Row ─── */
function SpecRow({ spec, index }: { spec: typeof specs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center py-4 px-4 -mx-4 rounded-lg hover:bg-brand-light/30 transition-colors duration-300">
        <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">{spec.label}</span>
        <span className="text-sm font-semibold text-brand-dark">{spec.value}</span>
      </div>
      {/* Animated progress bar */}
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden mx-4 -mt-1">
        <div
          className="h-full bg-gradient-to-r from-brand-green to-brand-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${spec.progress}%` : "0%",
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

/* ─── Certification Card ─── */
function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`p-7 rounded-2xl bg-white border border-gray-100 text-center group hover:shadow-xl hover:shadow-brand-green/10 hover:-translate-y-2 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-2"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-accent/5 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        {cert.icon}
      </div>
      <h3 className="font-semibold text-brand-dark mb-2 tracking-tight group-hover:text-brand-green transition-colors">
        {cert.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{cert.description}</p>
      {/* Verified badge on hover */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Verified
        </span>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="Innovation"
        title="HEFA Technology"
        subtitle="From waste feedstocks to flight-ready fuel — our advanced HEFA process delivers the cleanest SAF at commercial scale."
      />

      {/* Process Timeline */}
      <SectionWrapper id="process">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            The SAF Production Process
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our six-stage process transforms sustainable feedstocks into
            ASTM-certified aviation fuel ready for commercial flight.
          </p>
        </div>
        <div className="relative space-y-16 md:space-y-24">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-green/20 via-brand-green/10 to-transparent" />
          {processSteps.map((step, i) => (
            <TimelineStep key={step.step} step={step} index={i} total={processSteps.length} />
          ))}
        </div>
      </SectionWrapper>

      {/* Feedstocks */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Sustainable Inputs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Feedstocks
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {feedstocks.map((f, i) => (
            <FeedstockCard key={f.title} f={f} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Specs */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
              Refinery Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-8">
              Technical Specifications
            </h2>
            <div className="space-y-2">
              {specs.map((spec, i) => (
                <SpecRow key={spec.label} spec={spec} index={i} />
              ))}
            </div>
          </div>
          <div>
            <div className="relative bg-gradient-to-br from-brand-light to-green-50 rounded-3xl p-12 flex items-center justify-center min-h-[400px] border border-green-100/50 overflow-hidden">
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-brand-green/10 animate-pulse" />
              <div className="absolute bottom-8 left-8 w-36 h-36 rounded-full border border-brand-green/5 animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="text-center relative z-10">
                <AnimatedCounter value="2.5 Cr" label="Litres Per Year" />
                <p className="text-sm text-gray-400 mt-3">Full-scale commercial production capacity</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper bg="light" id="certifications">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Standards & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Certifications
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* CSIR-IIP Technology */}
      <SectionWrapper id="csir-technology">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Our Technology Partner
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            CSIR-IIP SAF Technology
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Loop Fuels uses the indigenous SAF technology developed by CSIR-Indian Institute of Petroleum (IIP), Dehradun — India&apos;s premier petroleum research laboratory.
          </p>
        </div>

        {/* What is CSIR-IIP */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">What is CSIR-IIP?</h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              The <span className="text-brand-dark font-medium">Council of Scientific and Industrial Research — Indian Institute of Petroleum</span> (CSIR-IIP) is India&apos;s leading research lab for petroleum and clean energy technologies, based in Dehradun.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              CSIR-IIP developed India&apos;s first indigenous bio-jet fuel technology — a <span className="text-brand-dark font-medium">single-step catalytic process</span> that converts waste oils and fats into aviation-grade fuel. This technology has been formally certified for use on Indian Air Force military aircraft.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Major partners include <span className="text-brand-dark font-medium">Airbus, IndiGo, SpiceJet, and Air India</span> — all collaborating with CSIR-IIP to scale SAF production in India.
            </p>
          </div>
          <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-green-100/50">
            <div className="space-y-5">
              {[
                { label: "Established", value: "1960", sub: "65+ years of petroleum research" },
                { label: "Location", value: "Dehradun", sub: "Uttarakhand, India" },
                { label: "SAF Pilot Plant", value: "50 kg/day", sub: "Feed processing capacity" },
                { label: "Bio-Jet Fuel Produced", value: "10,000 L", sub: "For Indian Air Force testing" },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xs group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</span>
                    <p className="text-brand-dark font-semibold">{item.value}</p>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How the Technology Works */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-10">How the CSIR-IIP Process Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Waste Oil Collection",
                desc: "Used cooking oil, non-edible plant oils (karanja, jatropha), animal fats, and algae-derived lipids are collected as feedstock.",
                icon: "🛢️",
              },
              {
                step: "02",
                title: "Single-Step Catalysis",
                desc: "Feedstock undergoes CSIR-IIP's patented one-step catalytic hydroprocessing — converting triglycerides directly into jet-range hydrocarbons.",
                icon: "⚗️",
              },
              {
                step: "03",
                title: "Purification",
                desc: "The output is refined and fractionated to isolate aviation-grade kerosene (C8-C16 range) meeting Jet A-1 specifications.",
                icon: "🔬",
              },
              {
                step: "04",
                title: "Blending & Delivery",
                desc: "SAF is blended up to 50% with conventional jet fuel (as per ASTM D7566) and delivered to airport fuel systems.",
                icon: "✈️",
              },
            ].map((item, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-green/20 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-500 hover:-translate-y-1">
                <div className="text-3xl mb-4">{item.icon}</div>
                <span className="text-[10px] text-brand-green font-bold uppercase tracking-widest">Step {item.step}</span>
                <h4 className="text-base font-semibold text-brand-dark mt-1 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-brand-green/30 text-xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why This Technology */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-4">Why CSIR-IIP Technology?</h3>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Compared to 2-step processes from the US and Europe, CSIR-IIP&apos;s single-step approach offers clear advantages for Indian SAF production.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lower Production Cost",
                desc: "Single-step catalysis eliminates an entire processing stage, reducing capital and operational costs compared to imported 2-step technologies.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
              {
                title: "Made in India",
                desc: "Indigenous patented technology — no foreign licensing fees. Supports Atmanirbhar Bharat and reduces dependence on imported fuel technology.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                  </svg>
                ),
              },
              {
                title: "Military Certified",
                desc: "Formally approved by the Indian Air Force for use on military aircraft — the highest validation of fuel quality and reliability.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Flexible Feedstock",
                desc: "Processes a wide range of inputs — used cooking oil, jatropha, karanja, palm fatty acid distillates, and algae-derived lipids.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12" />
                    <path d="M12 3c-2 4-5 6-5 10a5 5 0 0 0 10 0c0-4-3-6-5-10Z" />
                  </svg>
                ),
              },
              {
                title: "Drop-In Compatible",
                desc: "Produces fuel that is chemically identical to conventional jet fuel — works in existing engines and airport infrastructure with zero modifications.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                ),
              },
              {
                title: "CORSIA Compliant",
                desc: "Meets ICAO's Carbon Offsetting and Reduction Scheme for International Aviation — enabling Indian airlines to meet global emission targets.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-green/20 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-base font-semibold text-brand-dark mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
