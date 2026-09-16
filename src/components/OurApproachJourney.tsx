import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const OurApproachJourney: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#ECE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-4">
            {/* Eyebrow: OUR APPROACH ──── */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B87B3E] font-sans">
                {t.approach.eyebrow}
              </span>
              <div className="w-10 h-[1.5px] bg-[#B87B3E]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-[1.2] mb-6">
              {t.approach.titleLine1} <br />
              {t.approach.titleLine2}
            </h2>

            <p className="text-sm sm:text-base text-[#5E5448] leading-relaxed">
              {t.approach.description}
            </p>
          </div>

          {/* Right Column: 4-Step Horizontal Sequential Flow with Arrows matching the picture */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {t.approach.steps.map((step, idx) => (
                <div key={step.number} className="relative flex flex-col items-start group">
                  {/* Top Row: Number Badge and Arrow */}
                  <div className="flex items-center justify-between w-full mb-4">
                    {/* Amber circular badge */}
                    <div className="w-10 h-10 rounded-full bg-[#B87B3E] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm">
                      {step.number}
                    </div>

                    {/* Arrow to next step (only for steps 1, 2, 3 on desktop) */}
                    {idx < t.approach.steps.length - 1 && (
                      <div className="hidden lg:block text-[#D1C3B2] pr-2 rtl:pr-0 rtl:pl-2">
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-serif font-bold text-[#1E1C1A] mb-2 group-hover:text-[#B87B3E] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
