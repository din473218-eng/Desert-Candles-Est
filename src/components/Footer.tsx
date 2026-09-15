import React from 'react';
import { DesertCandlesLogo } from './DesertCandlesLogo';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#151311] text-[#9E9182] pt-14 pb-10 border-t border-[#26211C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 border-b border-[#25201A]">
          {/* Left: Brand Logo & Tagline */}
          <div className="max-w-xs">
            <div className="mb-3">
              <DesertCandlesLogo theme="dark" size="md" />
            </div>
            <p className="text-xs text-[#8C7E6F] leading-relaxed">
              Strategic HR solutions and technology-driven e-services for modern organizations.
            </p>
          </div>

          {/* Middle: Horizontal Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-[#B8AA99]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Direct Contact Links */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 text-xs text-[#B8AA99]">
            <a
              href="mailto:dco.sa@hotmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B87B3E]" />
              <span>dco.sa@hotmail.com</span>
            </a>
            <a
              href="tel:+966582880099"
              className="flex items-center gap-2 hover:text-white transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87B3E]" />
              <span>+966 58 288 0099</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-[11px] text-[#6E6356]">
          © Desert Candles Est. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
