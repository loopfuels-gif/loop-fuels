"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
}

export default function TypeWriter({ text, delay = 80, startDelay = 800, className }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          // Blink cursor a few times then hide
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, delay);
      return () => clearInterval(timer);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, delay, startDelay]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && (
        <span className="inline-block w-[3px] h-[0.85em] bg-brand-green ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}
