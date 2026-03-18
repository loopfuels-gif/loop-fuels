import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import StatCard from "@/components/StatCard";
import IconCard from "@/components/IconCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-green/60 overflow-hidden grain-overlay">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-brand-green/8 rounded-full blur-3xl float-slow" />
          <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-brand-accent/6 rounded-full blur-3xl float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              Sustainable Aviation Fuel
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-200">
              Powering the Future <br />
              <span className="gradient-text">of Clean Flight</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300/80 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
              Loop Fuels produces next-generation Sustainable Aviation Fuel that
              reduces lifecycle carbon emissions by up to 80%. We&apos;re closing the
              loop on aviation&apos;s carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/technology"
                className="btn-animate inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 text-center"
              >
                HEFA Technology
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="/investors"
                className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 text-center backdrop-blur-sm"
              >
                Investor Relations
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-white border-b border-gray-100/80">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2">
            <div className="border-r border-gray-100">
              <StatCard value="80%" label="CO2 Reduction" />
            </div>
            <StatCard value="189M" label="Litres/Year Capacity" />
          </div>
        </div>
      </section>

      {/* What is SAF */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            The Future of Aviation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            What is Sustainable Aviation Fuel?
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            SAF is a drop-in replacement for conventional jet fuel made from
            sustainable feedstocks. It significantly reduces aviation&apos;s carbon
            footprint while requiring small engine modifications.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          <IconCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20l4-16m2 16l4-16M3 8h18M3 16h18" />
              </svg>
            }
            title="Renewable Feedstocks"
            description="Produced from waste oils, agricultural residues, and other sustainable sources that don't compete with food production."
          />
          <IconCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            }
            title="Drop-In Compatible"
            description="Fully compatible with existing aircraft engines and fueling infrastructure. No modifications needed for immediate deployment."
          />
          <IconCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            }
            title="Up to 80% Cleaner"
            description="Reduces lifecycle greenhouse gas emissions by up to 80% compared to conventional fossil-based jet fuel."
          />
        </div>
      </SectionWrapper>

      {/* Technology Teaser */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll slide-left">
            <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-5">
              Advanced Refinery Technology
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              HEFA (Hydroprocessed Esters and Fatty Acids) technology
              converts waste feedstocks into high-quality SAF through a proven,
              scalable process.
            </p>
            <ul className="space-y-4 mb-8">
              {["Feedstock collection & pre-treatment", "Hydroprocessing & isomerization", "Quality testing & ASTM certification", "Distribution to airline partners"].map(
                (step, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-7 h-7 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/technology"
              className="link-arrow text-brand-green font-semibold text-sm"
            >
              Learn about our technology
              <svg className="btn-arrow ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="animate-on-scroll slide-right">
            <div className="relative bg-gradient-to-br from-brand-light to-green-50 rounded-3xl p-12 flex items-center justify-center min-h-[380px] border border-green-100/50 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-brand-green/10" />
              <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full border border-brand-green/5" />
              <div className="text-center relative z-10">
                <div className="w-24 h-24 mx-auto mb-5 bg-white rounded-2xl shadow-lg shadow-green-100 flex items-center justify-center float">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-brand-dark font-semibold text-lg">HEFA Process</p>
                <p className="text-sm text-gray-400 mt-1">Feedstock to Flight-Ready Fuel</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Sustainability Highlights */}
      <SectionWrapper bg="dark">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-brand-green text-xs font-semibold uppercase tracking-widest mb-3">
            Environmental Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Building a Sustainable Future
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {[
            { value: "80%", label: "Lower lifecycle GHG emissions vs. conventional jet fuel" },
            { value: "500K+", label: "Tonnes of CO2 avoided annually at full capacity" },
            { value: "100%", label: "Waste-derived feedstock, zero competition with food" },
          ].map((stat, i) => (
            <div key={i} className="animate-on-scroll group text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-green/10 hover:border-brand-green/20 transition-all duration-500 cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-brand-green mb-3 tracking-tight transition-transform duration-500 group-hover:scale-110">{stat.value}</div>
              <p className="text-sm text-gray-400 leading-relaxed transition-colors duration-500 group-hover:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/sustainability"
            className="link-arrow text-brand-green font-semibold text-sm"
          >
            View our sustainability report
            <svg className="btn-arrow ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green via-emerald-500 to-brand-accent/80 py-24 md:py-32 overflow-hidden grain-overlay">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight animate-on-scroll">
            Ready to Join the Clean Aviation Revolution?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed animate-on-scroll">
            Whether you&apos;re an airline looking for sustainable fuel solutions or an
            investor seeking impactful opportunities, we&apos;d love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link
              href="/contact"
              className="btn-animate btn-animate-light inline-flex items-center justify-center gap-2 bg-white text-brand-green px-8 py-4 rounded-xl font-semibold hover:bg-gray-50"
            >
              Partner With Us
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link
              href="/investors"
              className="btn-animate btn-animate-outline inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm"
            >
              Invest in Loop Fuels
              <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
