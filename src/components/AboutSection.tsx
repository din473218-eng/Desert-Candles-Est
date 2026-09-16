import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import aboutNetworkImg from '../assets/images/about_network_touch_1789469859759.jpg';

interface AboutSectionProps {
  onDiscoverApproach?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverApproach }) => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image of Executive touching Glowing HR Network */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E8DFC0]/60 group">
              <img
                src={aboutNetworkImg}
                alt="Organizational human capital and digital technology network"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative matching the exact picture */}
          <div className="lg:col-span-6">
            {/* Eyebrow with horizontal line: ABOUT DESERT CANDLES ──── */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B87B3E] font-sans">
                {t.about.eyebrow}
              </span>
              <div className="w-10 h-[1.5px] bg-[#B87B3E]/60" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-[1.2] mb-6">
              {t.about.titleLine1} <br />
              {t.about.titleLine2}
            </h2>

            {/* Supporting Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#5E5448] leading-relaxed mb-8">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onDiscoverApproach}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-all duration-200 shadow-sm gap-2 cursor-pointer"
            >
              <span>{t.about.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
