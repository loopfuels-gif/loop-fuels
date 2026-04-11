import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "CSIR-IIP Single-Step SAF Technology Explained",
  description:
    "CSIR-IIP has developed a breakthrough single-step catalytic hydroprocessing method to produce Sustainable Aviation Fuel from algae oil. Learn how this Indian technology works.",
  keywords: [
    "CSIR-IIP SAF technology",
    "single step catalytic hydroprocessing",
    "Indian SAF technology",
    "algae to jet fuel India",
    "CSIR-IIP Dehradun aviation fuel",
    "HEFA technology India",
  ],
};

export default function ArticlePage() {
  return (
    <>
      <article>
        <header className="pt-32 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-accent/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="text-brand-green text-sm font-semibold mb-6 inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-brand-accent bg-white/10 px-3 py-1 rounded-full">Technology</span>
              <span className="text-xs text-gray-400">4 min read</span>
              <span className="text-xs text-gray-400">April 5, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              CSIR-IIP Single-Step SAF Technology Explained
            </h1>
            <p className="text-lg text-gray-300/80 leading-relaxed">
              India&apos;s CSIR-IIP has developed a breakthrough single-step catalytic hydroprocessing method to convert algae oil into jet fuel. Here&apos;s how it works.
            </p>
          </div>
        </header>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto prose-custom">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What is CSIR-IIP?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Council of Scientific and Industrial Research — Indian Institute of Petroleum (CSIR-IIP), based in Dehradun, is India&apos;s premier research institution for petroleum and fuel technology. They have developed a proprietary single-step catalytic hydroprocessing method that converts bio-oils into aviation-grade fuel.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">How the Technology Works</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Traditional HEFA processes require multiple stages — deoxygenation, hydrocracking, isomerization, and fractionation. CSIR-IIP&apos;s breakthrough combines these into a single catalytic step:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Algae Oil Extraction", desc: "Lipids are extracted from cultivated algae biomass, yielding high-quality bio-oil feedstock." },
                { step: "2", title: "Single-Step Catalytic Hydroprocessing", desc: "The bio-oil enters a single reactor with CSIR-IIP's proprietary catalyst under controlled temperature and hydrogen pressure." },
                { step: "3", title: "Simultaneous Conversion", desc: "Deoxygenation, cracking, and isomerization happen in one pass — producing jet-range hydrocarbons (C8-C16) directly." },
                { step: "4", title: "SAF Output", desc: "The output is ASTM-compliant Sustainable Aviation Fuel ready for blending with conventional jet fuel." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why This Matters</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Lower capital cost</strong> — one reactor instead of multiple processing units</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Higher efficiency</strong> — reduced energy consumption and hydrogen usage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Made in India</strong> — indigenous technology reduces foreign dependency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Scalable</strong> — designed for commercial-scale production from the start</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">Loop Fuels &amp; CSIR-IIP</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Loop Fuels is leveraging CSIR-IIP&apos;s technology to build a commercial SAF production facility. Our <Link href="/technology" className="text-brand-green font-semibold hover:underline">integrated production model</Link> combines SAF production with <Link href="/biostimulants" className="text-brand-green font-semibold hover:underline">biostimulant extraction</Link>, creating a zero-waste biorefinery that maximizes the value of every kilogram of algae.
            </p>

            <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/technology" className="btn-animate inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 text-sm">
                Full Technology Overview
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/investors" className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-gray-200 text-brand-dark px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 text-sm">
                Investment Opportunities
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </article>
    </>
  );
}
