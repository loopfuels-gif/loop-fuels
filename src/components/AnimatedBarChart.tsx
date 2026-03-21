"use client";

import { useEffect, useRef, useState } from "react";

interface BarData {
  year: string;
  size: string;
  height: number;
  detail?: string;
}

interface AnimatedBarChartProps {
  data: BarData[];
  maxHeight?: number;
}

export default function AnimatedBarChart({ data, maxHeight = 320 }: AnimatedBarChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <div className="flex items-end justify-center gap-6 md:gap-10" style={{ height: `${maxHeight}px` }}>
        {data.map((d, i) => (
          <div
            key={d.year}
            className="flex flex-col items-center gap-3 relative"
            style={{ flex: "1", maxWidth: "120px" }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            <div
              className={`absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-brand-dark text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg transition-all duration-300 z-10 ${
                hoveredIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              <div className="font-bold">{d.size}</div>
              <div className="text-gray-300">{d.detail || `Projected ${d.year}`}</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-brand-dark rotate-45" />
            </div>

            {/* Value */}
            <div
              className={`text-lg md:text-xl font-bold gradient-text transition-all duration-700 ${
                started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 200 + 600}ms` }}
            >
              {d.size}
            </div>

            {/* Bar */}
            <div
              className={`w-full rounded-2xl bg-gradient-to-t from-brand-green to-brand-green/60 relative group transition-all duration-1000 ease-out shadow-lg shadow-brand-green/10 cursor-pointer ${
                hoveredIndex === i ? "from-green-600 to-green-400 shadow-brand-green/30 scale-105" : ""
              }`}
              style={{
                height: started ? `${d.height}px` : "0px",
                transitionDelay: `${i * 200}ms`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl shimmer" />
            </div>

            {/* Year */}
            <div
              className={`text-sm font-semibold text-brand-dark mt-1 transition-all duration-500 ${
                started ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${i * 200 + 400}ms` }}
            >
              {d.year}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-lg mx-auto border-t border-gray-200 mt-0" />
      <p className="text-center text-xs text-gray-400 mt-6">
        Source: Industry estimates. Global SAF market size projections.
      </p>
    </div>
  );
}
