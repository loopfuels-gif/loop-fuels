"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef(false);
  const visibleRef = useRef(false);
  const [, forceRender] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const isClickable = (el: Element | null): boolean => {
      while (el) {
        const tag = el.tagName?.toLowerCase();
        if (
          tag === "a" || tag === "button" || tag === "select" || tag === "summary" ||
          (tag === "input" && ["submit", "button"].includes((el as HTMLInputElement).type)) ||
          el.getAttribute("role") === "button" ||
          el.hasAttribute("onclick") ||
          el.classList?.contains("cursor-pointer")
        ) return true;
        el = el.parentElement;
      }
      return false;
    };

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      if (!visibleRef.current) {
        visibleRef.current = true;
        cursor.style.opacity = "1";
      }

      const hovering = isClickable(e.target as Element);
      if (hovering !== pointerRef.current) {
        pointerRef.current = hovering;
        forceRender(n => n + 1);
      }
    };

    const onMouseLeave = () => {
      visibleRef.current = false;
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
      style={{ opacity: 0, top: 0, left: 0, willChange: "left, top" }}
    >
      {pointerRef.current ? (
        <svg width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "-6px", marginTop: "-1px" }}>
          <path d="M10 2c1.1 0 2 .9 2 2v8h1.5V6c0-1.1.9-2 2-2s2 .9 2 2v6H19V8c0-1.1.9-2 2-2s2 .9 2 2v4h1.5v-1c0-1.1.9-2 2-2s2 .9 2 2v9c0 5-4 9-9 9h-1.5c-3.5 0-6.5-2-8-5L5.5 15c-.5-1 0-2.2 1-2.7s2.2 0 2.7 1L10 15V4c0-1.1.9-2 2-2z" fill="#111"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "-3px", marginTop: "-3px" }}>
          <g transform="rotate(315 16 16)">
            <path d="M16 2 C16.8 2 17.5 3 17.5 3 L19 8 L19 13 L29 18 L29 20.5 L19 17.5 L19 23 L22 25.5 L22 27.5 L16 26 L10 27.5 L10 25.5 L13 23 L13 17.5 L3 20.5 L3 18 L13 13 L13 8 L14.5 3 C14.5 3 15.2 2 16 2Z" fill="#111111"/>
          </g>
        </svg>
      )}
    </div>
  );
}
