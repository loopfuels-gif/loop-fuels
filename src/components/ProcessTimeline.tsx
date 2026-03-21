"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Feedstock collection & pre-treatment", desc: "Waste oils and fats sourced sustainably" },
  { title: "Hydroprocessing & isomerization", desc: "Advanced catalytic conversion process" },
  { title: "Quality testing & ASTM certification", desc: "Rigorous industry standard compliance" },
  { title: "Distribution to airline partners", desc: "Ready-to-use drop-in jet fuel" },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps one by one
          steps.forEach((_, i) => {
            setTimeout(() => setActiveStep(i), (i + 1) * 400);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-0 relative">
      {/* Vertical line */}
      <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gray-200 overflow-hidden">
        <div
          className="w-full bg-brand-green transition-all duration-1000 ease-out"
          style={{ height: activeStep >= 0 ? `${((activeStep + 1) / steps.length) * 100}%` : "0%" }}
        />
      </div>

      {steps.map((step, i) => (
        <div
          key={i}
          className={`flex items-start gap-4 py-3 transition-all duration-500 ${
            i <= activeStep ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-12px]"
          }`}
        >
          <div
            className={`relative z-10 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-500 ${
              i <= activeStep
                ? "bg-brand-green text-white scale-100 shadow-md shadow-brand-green/30"
                : "bg-brand-green/10 text-brand-green scale-90"
            }`}
          >
            {i + 1}
          </div>
          <div>
            <p className="text-sm text-gray-700 font-medium">{step.title}</p>
            <p
              className={`text-xs text-gray-400 mt-0.5 transition-all duration-500 delay-200 ${
                i <= activeStep ? "opacity-100 max-h-10" : "opacity-0 max-h-0"
              }`}
            >
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
