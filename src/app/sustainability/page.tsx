import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CarbonBars from "@/components/CarbonBars";

const sdgs = [
  { number: 7, title: "Affordable & Clean Energy", description: "Producing renewable fuel that accelerates the transition to clean energy in aviation." },
  { number: 9, title: "Industry, Innovation & Infrastructure", description: "Building innovative refinery infrastructure for sustainable fuel production." },
  { number: 12, title: "Responsible Consumption & Production", description: "Converting waste into valuable fuel through circular economy principles." },
  { number: 13, title: "Climate Action", description: "Reducing aviation GHG emissions by up to 80% per litre of SAF produced." },
];

const impactStats = [
  { value: "80%", label: "Lifecycle GHG Reduction" },
  { value: "500K+", label: "Tonnes CO2 Avoided/Year" },
  { value: "0", label: "Food-Competing Feedstocks" },
  { value: "100%", label: "Waste-Derived Inputs" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="Sustainability"
        subtitle="Measuring, reporting, and maximizing our positive impact on the planet and the communities we serve."
      />

      {/* Impact Stats */}
      <SectionWrapper id="impact">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            By The Numbers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Environmental Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
          {[
            { value: "80%", label: "Lifecycle GHG Reduction", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>) },
            { value: "500K+", label: "Tonnes CO2 Avoided/Year", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22 16 8"/><path d="m3.47 12.53 4.5-4.5"/><path d="m7.94 8.06 4.5-4.5"/><circle cx="19" cy="5" r="3"/></svg>) },
            { value: "0", label: "Food-Competing Feedstocks", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>) },
            { value: "100%", label: "Waste-Derived Inputs", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>) },
          ].map((stat) => (
            <div key={stat.label} className="animate-on-scroll card-hover p-7 rounded-2xl bg-white border border-gray-100 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-green/80 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text px-1 pb-1 inline-block mb-1 tracking-tight">{stat.value}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Carbon Comparison */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Carbon Lifecycle
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            SAF vs Conventional Jet Fuel
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A lifecycle analysis comparing carbon emissions from feedstock sourcing through
            combustion shows SAF&apos;s dramatic advantage.
          </p>
        </div>
        <CarbonBars />
      </SectionWrapper>

      {/* Circular Economy */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll slide-left">
            <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
              Our Model
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-5">
              The Circular Economy of Flight
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Loop Fuels operates on a circular economy principle: waste materials that would
              otherwise end up in landfills are converted into clean aviation fuel, which powers
              flights that create demand for more waste collection.
            </p>
            <ul className="space-y-4">
              {[
                "Waste oils collected from restaurants & food processors",
                "Refined into SAF at our production facility",
                "Blended and delivered to airport fuel systems",
                "Powers commercial flights with 80% lower emissions",
                "Revenue funds expanded waste collection networks",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-7 h-7 rounded-lg bg-brand-green text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-on-scroll slide-right">
            <div className="relative bg-gradient-to-br from-brand-light to-green-50 rounded-3xl p-12 flex items-center justify-center min-h-[380px] border border-green-100/50 overflow-hidden">
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-brand-green/10" />
              <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full border border-brand-green/5" />
              <div className="text-center relative z-10">
                <div className="w-24 h-24 mx-auto mb-5 bg-white rounded-2xl shadow-lg shadow-green-100 flex items-center justify-center float">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 2v6h-6" />
                    <path d="M2.5 22v-6h6" />
                    <path d="M21.5 8A10 10 0 0 0 5.3 5.3L2.5 8" />
                    <path d="M2.5 16a10 10 0 0 0 16.2 2.7l2.8-2.7" />
                  </svg>
                </div>
                <p className="text-brand-dark font-semibold text-lg">Circular Model</p>
                <p className="text-sm text-gray-400 mt-1">Waste In, Clean Fuel Out</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* UN SDGs */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Global Goals
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            UN Sustainable Development Goals
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our operations contribute to four key UN SDGs, aligning our business
            with the world&apos;s most pressing sustainability targets.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {sdgs.map((sdg) => (
            <div key={sdg.number} className="animate-on-scroll card-hover p-7 rounded-2xl bg-white border border-gray-100 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-green/80 text-white flex items-center justify-center font-bold text-lg mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {sdg.number}
              </div>
              <h3 className="font-semibold text-brand-dark mb-2 text-sm tracking-tight">{sdg.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{sdg.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green via-emerald-500 to-brand-accent/80 py-24 md:py-32 overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight animate-on-scroll">
            Want to Learn More About Our Impact?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed animate-on-scroll">
            Download our latest sustainability report or get in touch to discuss
            partnership opportunities.
          </p>
          <div className="animate-on-scroll">
            <Link
              href="/contact"
              className="btn-animate btn-animate-light inline-flex items-center gap-2 bg-white text-brand-green px-8 py-4 rounded-xl font-semibold hover:bg-gray-50"
            >
              Get In Touch
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
