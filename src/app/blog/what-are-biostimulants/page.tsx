import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "What Are Biostimulants and Why Do They Matter for Indian Agriculture?",
  description:
    "Biostimulants boost crop yields by 20-30% and restore soil health. Learn how algae-derived biostimulants are transforming Indian agriculture and why they matter for food security.",
  keywords: [
    "what are biostimulants",
    "biostimulants India agriculture",
    "algae biostimulants benefits",
    "crop yield India",
    "soil health improvement",
    "organic farming India",
  ],
};

export default function ArticlePage() {
  return (
    <>
      <article>
        <header className="pt-32 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-brand-dark via-brand-dark to-emerald-800/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="text-brand-green text-sm font-semibold mb-6 inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-emerald-400 bg-white/10 px-3 py-1 rounded-full">Agriculture</span>
              <span className="text-xs text-gray-400">6 min read</span>
              <span className="text-xs text-gray-400">April 8, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              What Are Biostimulants and Why Do They Matter for Indian Agriculture?
            </h1>
            <p className="text-lg text-gray-300/80 leading-relaxed">
              Biostimulants are transforming farming worldwide. Learn how algae-derived biostimulants can boost crop yields and restore India&apos;s degrading farmland.
            </p>
          </div>
        </header>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto prose-custom">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Understanding Biostimulants</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Biostimulants are naturally derived substances that enhance plant nutrition, growth, and stress tolerance. Unlike fertilizers that supply nutrients directly, biostimulants improve how plants absorb and use existing nutrients in the soil. They work with nature, not against it.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">India&apos;s Agricultural Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              India feeds 1.4 billion people, but its soil is under severe stress. Over 30% of Indian farmland is degraded, and chemical-heavy farming practices continue to deplete soil health. Crop yields have plateaued in many regions despite increasing fertilizer use. India needs a new approach — and biostimulants are the answer.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">How Biostimulants Help</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Boost crop yields by 20-30%</strong> — by enhancing nutrient uptake and root development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Restore degraded soil</strong> — by increasing microbial diversity and organic matter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Reduce water usage by 15-25%</strong> — by improving soil water retention capacity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                <span className="text-gray-600"><strong className="text-brand-dark">Cut fertilizer dependence by 20-30%</strong> — by making existing nutrients more available</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Algae-Derived Biostimulants?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Algae are the most efficient biological source of biostimulant compounds. They grow 10x faster than land plants, absorb CO2, and produce a rich mix of amino acids, hormones, and micronutrients that plants love. At Loop Fuels, we extract biostimulants as part of our <Link href="/technology" className="text-brand-green font-semibold hover:underline">SAF production process</Link> — creating a zero-waste circular model.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Market Opportunity</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              India&apos;s biostimulant market is growing rapidly, driven by government support for organic farming, increasing awareness of soil degradation, and rising demand for higher crop yields. Early adoption of algae-derived biostimulants positions Indian farmers to lead the next agricultural revolution.
            </p>

            <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/biostimulants" className="btn-animate inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 text-sm">
                Explore Our Biostimulants
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact" className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-gray-200 text-brand-dark px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 text-sm">
                Contact Us
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </article>
    </>
  );
}
