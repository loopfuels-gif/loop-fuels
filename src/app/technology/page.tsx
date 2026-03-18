import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import IconCard from "@/components/IconCard";

const processSteps = [
  {
    step: "01",
    title: "Feedstock Collection",
    description: "We source sustainable feedstocks including used cooking oil, animal fats, tall oil, and agricultural residues from certified suppliers worldwide.",
  },
  {
    step: "02",
    title: "Pre-Treatment",
    description: "Raw feedstocks undergo degumming, bleaching, and filtration to remove impurities and prepare for the hydroprocessing stage.",
  },
  {
    step: "03",
    title: "Hydroprocessing (HEFA)",
    description: "Feedstocks react with hydrogen at high temperature and pressure, removing oxygen and converting triglycerides into paraffinic hydrocarbons.",
  },
  {
    step: "04",
    title: "Isomerization & Fractionation",
    description: "The hydrocarbon stream is isomerized to improve cold-flow properties, then fractionated to isolate the jet fuel range (C8-C16).",
  },
  {
    step: "05",
    title: "Quality Assurance",
    description: "Every batch undergoes rigorous testing for ASTM D7566 compliance, including thermal stability, freeze point, and combustion characteristics.",
  },
  {
    step: "06",
    title: "Blending & Distribution",
    description: "Certified SAF is blended up to 50% with conventional jet fuel and distributed directly to airport fueling infrastructure.",
  },
];

const feedstocks = [
  {
    title: "Used Cooking Oil (UCO)",
    description: "Collected from restaurants and food processors, diverting waste from landfills into clean fuel.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Animal Fats & Tallow",
    description: "By-products from the meat processing industry converted into high-energy aviation fuel.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M5.5 8.5l13-1M5.5 15.5l13 1" />
      </svg>
    ),
  },
  {
    title: "Algae",
    description: "Fast-growing microalgae cultivated in non-arable land, offering high oil yields without competing for freshwater or food crops.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c3-4 6-8 10-8s7 4 10 8" />
        <path d="M12 14c-2-4-2-8 0-12" />
        <path d="M7 9c2 0 4 1 5 5" />
        <path d="M17 9c-2 0-4 1-5 5" />
      </svg>
    ),
  },
];

const specs = [
  { label: "Annual Capacity", value: "189 Million Litres" },
  { label: "Conversion Pathway", value: "HEFA" },
  { label: "Blend Ratio", value: "Up to 50% with conventional Jet A-1" },
  { label: "GHG Reduction", value: "Up to 80% lifecycle reduction" },
  { label: "Feedstock Flexibility", value: "Multi-feedstock capable" },
  { label: "Product Quality", value: "Meets ASTM D7566 Annex 2" },
];

const certifications = [
  { name: "ASTM D7566", description: "Standard specification for aviation turbine fuel containing synthesized hydrocarbons." },
  { name: "CORSIA Eligible", description: "Certified under ICAO's Carbon Offsetting and Reduction Scheme for International Aviation." },
  { name: "ISCC EU", description: "International Sustainability & Carbon Certification for EU RED II compliance." },
  { name: "RSB Certified", description: "Roundtable on Sustainable Biomaterials certification for social and environmental sustainability." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="Innovation"
        title="HEFA Technology"
        subtitle="From waste feedstocks to flight-ready fuel — our advanced HEFA process delivers the cleanest SAF at commercial scale."
      />

      {/* Process */}
      <SectionWrapper id="process">
        <div className="text-center mb-16 animate-on-scroll">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="animate-on-scroll card-hover group p-7 rounded-2xl bg-white border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-lg">{step.step}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-green/20 to-transparent" />
              </div>
              <h3 className="text-base font-semibold text-brand-dark mb-2 tracking-tight">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Feedstocks */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Sustainable Inputs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Feedstocks
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We use only waste-derived and non-food-competing feedstocks, ensuring
            true sustainability throughout our supply chain.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {feedstocks.map((f) => (
            <IconCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </SectionWrapper>

      {/* Specs */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll slide-left">
            <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
              Refinery Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-8">
              Technical Specifications
            </h2>
            <div className="space-y-0">
              {specs.map((spec, i) => (
                <div key={spec.label} className={`flex justify-between items-center py-4 border-b border-gray-100 ${i === 0 ? "border-t" : ""} hover:bg-brand-light/30 px-4 -mx-4 rounded-lg transition-colors duration-300`}>
                  <span className="text-sm text-gray-400">{spec.label}</span>
                  <span className="text-sm font-semibold text-brand-dark">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-on-scroll slide-right">
            <div className="relative bg-gradient-to-br from-brand-light to-green-50 rounded-3xl p-12 flex items-center justify-center min-h-[400px] border border-green-100/50 overflow-hidden">
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-brand-green/10" />
              <div className="absolute bottom-8 left-8 w-36 h-36 rounded-full border border-brand-green/5" />
              <div className="text-center relative z-10">
                <div className="text-7xl md:text-8xl font-bold gradient-text mb-3 tracking-tight">189M</div>
                <p className="text-brand-dark font-semibold text-lg">Litres Per Year</p>
                <p className="text-sm text-gray-400 mt-1">Full-scale commercial production capacity</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper bg="light" id="certifications">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Standards & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Certifications
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {certifications.map((cert) => (
            <div key={cert.name} className="animate-on-scroll card-hover p-7 rounded-2xl bg-white border border-gray-100 text-center group">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-accent/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-dark mb-2 tracking-tight">{cert.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
