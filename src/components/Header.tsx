import React, { useState, useEffect } from 'react';
import { DesertCandlesLogo } from './DesertCandlesLogo';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const { t, language, toggleLanguage } = useLanguage();
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
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.approach, href: '#approach', id: 'approach' },
    { label: t.nav.whyUs, href: '#why-us', id: 'why-us' },
    { label: t.nav.visionMission, href: '#vision-mission', id: 'vision-mission' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
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

          {/* Right Action: Language Switcher & "Let's Talk" Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <button
              id="lang-switcher-btn"
              onClick={toggleLanguage}
              title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[#D9CDBC] text-[#4A433B] hover:text-[#B87B3E] hover:border-[#B87B3E] bg-[#F7F3EC] hover:bg-[#F2ECE1] transition-all cursor-pointer shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#B87B3E]" />
              <span className="font-semibold">{t.nav.langSwitchLabel}</span>
            </button>

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
              {t.nav.letsTalk}
            </button>
          </div>

          {/* Mobile Actions: Language toggle + menu hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#D9CDBC] text-[#4A433B] bg-[#F7F3EC]"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-[#B87B3E]" />
              <span>{t.nav.langSwitchLabel}</span>
            </button>

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

          <div className="pt-2 border-t border-[#EAE1D3] space-y-2">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border border-[#D9CDBC] text-[#4A433B] bg-[#F7F3EC]"
            >
              <Globe className="w-3.5 h-3.5 text-[#B87B3E]" />
              <span>{language === 'en' ? 'التحويل إلى العربية (Arabic)' : 'Switch to English'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-5 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors"
            >
              {t.nav.letsTalk}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
