import React, { useState, useEffect } from 'react';
import { DesertCandlesLogo } from './DesertCandlesLogo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'services',
        'approach',
        'why-us',
        'vision-mission',
        'contact',
      ];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Our Approach', href: '#approach', id: 'approach' },
    { label: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { label: 'Vision & Mission', href: '#vision-mission', id: 'vision-mission' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.04)] border-b border-[#EADFCF]'
          : 'bg-[#FAF8F5] border-b border-[#EFE8DC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo matching the exact reference */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none"
          >
            <DesertCandlesLogo theme="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[13.5px] font-medium transition-colors duration-200 tracking-normal ${
                    isActive
                      ? 'text-[#B87B3E] font-semibold'
                      : 'text-[#4A433B] hover:text-[#B87B3E]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: "Let's Talk" Button */}
          <div className="hidden sm:flex items-center">
            <button
              id="header-lets-talk-btn"
              onClick={() => {
                if (onOpenContact) onOpenContact();
                else {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-all duration-200 shadow-sm cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#332D27] hover:text-[#B87B3E] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#EADFCF] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                activeSection === link.id
                  ? 'bg-[#F2ECE1] text-[#B87B3E] font-semibold'
                  : 'text-[#4A433B] hover:text-[#B87B3E]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full mt-2 px-5 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors"
          >
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
};
