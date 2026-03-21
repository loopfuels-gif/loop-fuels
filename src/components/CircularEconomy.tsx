"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { icon: "🗑️", label: "Waste Collection" },
  { icon: "⚙️", label: "Refinery" },
  { icon: "✈️", label: "Clean Flight" },
  { icon: "♻️", label: "Revenue & Repeat" },
];

export default function CircularEconomy() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpinning(true);
          // Animate steps one by one
          steps.forEach((_, i) => {
            setTimeout(() => setActive(i), (i + 1) * 600);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-[380px] mx-auto aspect-square">
      {/* Spinning outer ring */}
      <div
        className={`absolute inset-4 rounded-full border-2 border-dashed transition-all duration-1000 ${
          spinning ? "border-brand-green/30 animate-[spin_20s_linear_infinite]" : "border-gray-200"
        }`}
      />

      {/* Solid inner ring */}
      <div className="absolute inset-12 rounded-full border border-brand-green/10" />

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-20 h-20 rounded-2xl bg-white shadow-lg shadow-green-100 flex items-center justify-center transition-all duration-700 ${
            spinning ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6" />
            <path d="M2.5 22v-6h6" />
            <path d="M21.5 8A10 10 0 0 0 5.3 5.3L2.5 8" />
            <path d="M2.5 16a10 10 0 0 0 16.2 2.7l2.8-2.7" />
          </svg>
        </div>
      </div>

      {/* Step nodes positioned around the circle */}
      {steps.map((step, i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180); // Start from top
        const radius = 42; // % from center
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const isActive = i <= active;

        return (
          <div
            key={i}
            className={`absolute flex flex-col items-center gap-1.5 transition-all duration-700 ${
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 ${
                isActive
                  ? "bg-white shadow-md shadow-green-100 scale-100"
                  : "bg-gray-100 scale-90"
              }`}
            >
              {step.icon}
            </div>
            <span className="text-[10px] font-semibold text-brand-dark whitespace-nowrap">{step.label}</span>
          </div>
        );
      })}

      {/* Animated arrows between nodes */}
      {steps.map((_, i) => {
        const angle1 = (i * 90 - 90 + 20) * (Math.PI / 180);
        const angle2 = (i * 90 - 90 + 70) * (Math.PI / 180);
        const r = 42;
        const x1 = 50 + r * Math.cos(angle1);
        const y1 = 50 + r * Math.sin(angle1);
        const x2 = 50 + r * Math.cos(angle2);
        const y2 = 50 + r * Math.sin(angle2);
        const isActive = i <= active;

        return (
          <svg
            key={`arrow-${i}`}
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
              isActive ? "opacity-40" : "opacity-0"
            }`}
            style={{ transitionDelay: `${i * 150 + 300}ms` }}
          >
            <line
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#16A34A"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
        );
      })}
    </div>
  );
}
