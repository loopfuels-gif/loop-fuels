"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/biostimulants", label: "Biostimulants" },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <img src="/logo.jpg" alt="Loop Fuels" className="h-8 w-auto rounded-md transition-transform duration-300 group-hover:scale-110" />
            <span className={`text-base tracking-[0.06em] uppercase transition-colors duration-300 ${
              scrolled ? "text-brand-dark" : "text-white"
            }`}>
              <span className="font-semibold">Loop</span><span className="font-light opacity-80">Fuels</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === link.href
                    ? scrolled
                      ? "text-brand-green bg-brand-green/5"
                      : "text-white bg-white/10"
                    : scrolled
                      ? "text-brand-neutral/70 hover:text-brand-green hover:bg-brand-green/5"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-green" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-animate ml-3 bg-brand-green text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled ? "#1E293B" : "white"} strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-gray-200/50 px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 px-3 text-sm font-medium rounded-lg transition-colors ${
                pathname === link.href
                  ? "text-brand-green bg-brand-green/5"
                  : "text-brand-neutral hover:text-brand-green hover:bg-brand-green/5"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 bg-brand-green text-white px-5 py-3 rounded-xl text-sm font-semibold text-center hover:bg-green-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
