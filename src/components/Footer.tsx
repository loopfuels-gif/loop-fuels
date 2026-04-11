import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/technology", label: "Technology" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About Us" },
  ],
  Resources: [
    { href: "/technology#process", label: "SAF Process" },
    { href: "/biostimulants", label: "Biostimulants" },
    { href: "/sustainability#impact", label: "Impact Report" },
    { href: "/blog", label: "Blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />

      {/* Decorative orb */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/logo.jpg" alt="Loop Fuels" className="h-10 w-auto rounded-lg" />
              <span className="text-xl tracking-[0.12em] uppercase text-white"><span className="font-semibold">Loop</span><span className="font-light opacity-80">Fuels</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Pioneering the production of Sustainable Aviation Fuel to decarbonize
              the aviation industry and build a cleaner future for flight.
            </p>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs text-gray-400">Building the future of clean aviation</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="font-semibold text-xs mb-5 uppercase tracking-widest text-gray-500">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-brand-green transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact quick info */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-xs mb-5 uppercase tracking-widest text-gray-500">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a href="mailto:loopfuels@gmail.com" className="block text-sm text-gray-400 hover:text-brand-green transition-colors duration-300">loopfuels@gmail.com</a>
              <a href="tel:+919075346665" className="block text-sm text-gray-400 hover:text-brand-green transition-colors duration-300">+91 9075346665</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Loop Fuels. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
