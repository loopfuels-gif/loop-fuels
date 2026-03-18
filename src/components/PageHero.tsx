interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-green/60 overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-brand-green/10 rounded-full blur-3xl pulse-soft" />
        <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-brand-accent/8 rounded-full blur-3xl pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-semibold tracking-widest uppercase mb-5 animate-fade-in-up">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight animate-fade-in-up animation-delay-200">
          {title}
        </h1>
        <p className="text-base md:text-lg text-gray-300/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
