interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="animate-on-scroll card-hover group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green/10 to-brand-accent/5 flex items-center justify-center text-brand-green mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-brand-dark mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
