"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch/mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.style.opacity = "1";
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[99999]"
      style={{ opacity: 0, top: 0, left: 0, marginLeft: "10px", marginTop: "-5px" }}
    >
      <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(315 16 16)">
          <path
            d="M16 2 C16.8 2 17.5 3 17.5 3 L19 8 L19 13 L29 18 L29 20.5 L19 17.5 L19 23 L22 25.5 L22 27.5 L16 26 L10 27.5 L10 25.5 L13 23 L13 17.5 L3 20.5 L3 18 L13 13 L13 8 L14.5 3 C14.5 3 15.2 2 16 2Z"
            fill="#111111"
          />
        </g>
      </svg>
    </div>
  );
}
