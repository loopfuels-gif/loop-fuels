import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Why India Needs Sustainable Aviation Fuel Now",
  description:
    "India's aviation sector is the fastest growing globally. With CORSIA mandates and net-zero targets, domestic SAF production is critical. Learn about India's SAF opportunity.",
  keywords: [
    "sustainable aviation fuel India",
    "SAF India market",
    "CORSIA India aviation",
    "Indian aviation decarbonization",
    "SAF mandate India 2027",
  ],
};

export default function ArticlePage() {
  return (
    <>
      <article>
        <header className="pt-32 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-green/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="text-brand-green text-sm font-semibold mb-6 inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-brand-green bg-white/10 px-3 py-1 rounded-full">Industry</span>
              <span className="text-xs text-gray-400">5 min read</span>
              <span className="text-xs text-gray-400">April 10, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Why India Needs Sustainable Aviation Fuel Now
            </h1>
            <p className="text-lg text-gray-300/80 leading-relaxed">
              India&apos;s aviation sector is the fastest growing in the world. With SAF mandates coming by 2027, the opportunity for domestic SAF production has never been bigger.
            </p>
          </div>
        </header>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto prose-custom">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">India&apos;s Aviation Boom</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              India is projected to become the third-largest aviation market globally by 2030. Domestic air passenger traffic crossed 150 million in 2024, and the government aims to build 200+ new airports under the UDAN scheme. But this growth comes at a cost — aviation emissions are rising rapidly.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">The CORSIA Mandate</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The International Civil Aviation Organization (ICAO) introduced CORSIA — the Carbon Offsetting and Reduction Scheme for International Aviation. Starting 2027, Indian airlines operating international routes must offset their carbon emissions. SAF is the most effective tool to achieve this compliance.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Domestic Production Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Currently, India imports 100% of its aviation fuel. Producing SAF domestically would reduce import dependence, create thousands of green jobs, and position India as a leader in clean aviation. The Indian government has signaled strong interest in SAF blending mandates of 1% by 2027, scaling to 5% by 2030.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">Loop Fuels&apos; Role</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Loop Fuels, we&apos;re building India&apos;s first algae-to-SAF production facility using <Link href="/technology" className="text-brand-green font-semibold hover:underline">CSIR-IIP&apos;s single-step catalytic hydroprocessing technology</Link>. Our process not only produces SAF but also extracts valuable <Link href="/biostimulants" className="text-brand-green font-semibold hover:underline">biostimulants</Link> — creating a dual-revenue model that makes the economics work.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Opportunity</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              India&apos;s SAF market is projected to reach significant scale by 2030. Early movers who build production capacity now will capture this growing demand. With proven HEFA technology, supportive government policy, and abundant feedstock, India has everything it needs to become a global SAF hub.
            </p>

            <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/investors" className="btn-animate inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 text-sm">
                Investment Opportunities
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/technology" className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-gray-200 text-brand-dark px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 text-sm">
                Our Technology
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </article>
    </>
  );
}
