"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  compact?: boolean;
}

export default function AnimatedCounter({ value, label, compact }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [started, setStarted] = useState(false);

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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    // Extract prefix (like ~), numeric part, and suffix (like %, K+, M)
    const match = value.match(/^([^0-9]*)([\d.]+)(.*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const duration = 2000;
    const totalSteps = 60;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / totalSteps, 3);
      const current = target * progress;

      if (step >= totalSteps) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        const formatted = target >= 1 ? Math.round(current).toString() : current.toFixed(1);
        setDisplayed(prefix + formatted + suffix);
      }
    }, duration / totalSteps);

    return () => clearInterval(timer);
  }, [started, value]);

  if (compact) {
    return (
      <div ref={ref}>
        <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 tracking-tight">
          {displayed}
        </div>
        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider leading-snug">
          {label}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="text-center p-8">
      <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-2 tracking-tight gradient-text">
        {displayed}
      </div>
      <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
