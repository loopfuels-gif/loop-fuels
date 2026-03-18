interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "light" | "dark";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "white",
}: SectionWrapperProps) {
  const bgClass = {
    white: "bg-white",
    light: "bg-brand-light/50 dot-grid",
    dark: "bg-brand-dark text-white grain-overlay relative",
  }[bg];

  return (
    <section id={id} className={`py-24 md:py-32 ${bgClass} ${className}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
