import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import IconCard from "@/components/IconCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Loop Fuels — an Indian startup pioneering Sustainable Aviation Fuel (SAF) production from algae using CSIR-IIP technology. Our mission, values, and vision for clean aviation.",
  keywords: [
    "Loop Fuels about",
    "SAF startup India",
    "sustainable aviation fuel company",
    "clean aviation India",
    "algae fuel startup",
  ],
};

const values = [
  {
    title: "Sustainability First",
    description: "Every decision we make is guided by its environmental impact. We exist to reduce aviation's carbon footprint.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M7 12.5l3 3 7-7" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We push the boundaries of refinery technology to deliver cleaner, more efficient fuel production at scale.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "We believe in open reporting of our environmental metrics, supply chain, and impact on communities.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description: "We collaborate with airlines, governments, and communities to create a resilient and fair energy transition.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="About Loop Fuels"
        subtitle="We're on a mission to make every flight more sustainable through next-generation aviation fuel technology."
      />

      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-3xl animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">Our Mission</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-6">
            Closing the Loop on Aviation Emissions
          </h2>
          <div className="border-l-2 border-brand-green/20 pl-6 space-y-4">
            <p className="text-gray-500 leading-relaxed">
              Aviation accounts for roughly 2-3% of global CO2 emissions, and demand
              for air travel continues to grow. At Loop Fuels, we believe the solution
              isn&apos;t to fly less, but to fly cleaner.
            </p>
            <p className="text-gray-500 leading-relaxed">
              By converting waste feedstocks into Sustainable Aviation Fuel, we&apos;re
              creating a circular economy for aviation energy that dramatically reduces
              carbon emissions while supporting the global need for air connectivity.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {values.map((v) => (
            <IconCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
          ))}
        </div>
      </SectionWrapper>

      {/* Cross-links */}
      <SectionWrapper>
        <div className="text-center animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Learn More About Loop Fuels</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">Explore our technology, sustainability initiatives, and investment opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/technology" className="btn-animate inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600">
              Our Technology
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/biostimulants" className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-brand-dark/15 text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-gray-50">
              Biostimulants
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-brand-dark/15 text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-gray-50">
              Get in Touch
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
