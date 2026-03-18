interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="animate-on-scroll text-center p-8">
      {icon && <div className="mb-3 flex justify-center text-brand-green">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-2 tracking-tight gradient-text">
        {value}
      </div>
      <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}
