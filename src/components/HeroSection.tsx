import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Using the generated photorealistic image matching the exact picture
import heroSkylineImg from '../assets/images/hero_skyline_executives_1789469842219.jpg';

interface HeroSectionProps {
  onTalkToExperts?: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onTalkToExperts,
  onExploreServices,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[640px] lg:min-h-[720px] flex items-center pt-24 pb-16 overflow-hidden bg-[#1a1410]"
    >
      {/* Background Image with Cinematic Golden Hour Skyline & Executive Silhouettes */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSkylineImg}
          alt="Desert Candles Corporate Skyline and Executives"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Dark Gradient Overlay for perfect typography legibility matching the picture */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isRTL
              ? 'from-transparent via-[#16120F]/70 to-[#14100D]/90'
              : 'from-[#14100D]/90 via-[#16120F]/70 to-transparent'
          } lg:w-2/3 ${isRTL ? 'right-0' : 'left-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/60 via-transparent to-black/20" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow: DESERT CANDLES EST. ──── */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#E0A868] font-sans">
              {t.hero.eyebrow}
            </span>
            <div className="w-12 h-[1.5px] bg-[#C98B4B]/80" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#E6DCD1] leading-relaxed mb-8 max-w-xl font-normal">
            {t.hero.description}
          </p>

          {/* Action Buttons matching the reference */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="hero-talk-to-experts-btn"
              onClick={onTalkToExperts}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#B87B3E] hover:bg-[#A66A30] transition-all duration-200 shadow-md transform hover:-translate-y-0.5 cursor-pointer gap-2"
            >
              <span>{t.hero.talkToExperts}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              id="hero-explore-services-btn"
              onClick={onExploreServices}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-black/30 hover:bg-black/45 border border-white/40 hover:border-white/70 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              {t.hero.exploreServices}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
