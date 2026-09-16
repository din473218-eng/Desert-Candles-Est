import React from 'react';
import { Award, Cpu, Sliders, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import desertDunesImg from '../assets/images/desert_dunes_waves_1789469877698.jpg';

export const WhyChooseUs: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const icons = [
    <Award key="award" className="w-6 h-6 text-[#E0A868]" strokeWidth={1.5} />,
    <Cpu key="cpu" className="w-6 h-6 text-[#E0A868]" strokeWidth={1.5} />,
    <Sliders key="sliders" className="w-6 h-6 text-[#E0A868]" strokeWidth={1.5} />,
    <ShieldCheck key="shield" className="w-6 h-6 text-[#E0A868]" strokeWidth={1.5} />,
  ];

  return (
    <section id="why-us" className="relative bg-[#20150F] text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Desert Dunes Atmosphere with Warm Dark Chocolate Gradient */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={desertDunesImg}
          alt="Desert Dunes Texture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isRTL
              ? 'from-[#20150F]/70 via-[#20150F]/90 to-[#20150F]'
              : 'from-[#20150F] via-[#20150F]/90 to-[#20150F]/70'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            {/* Eyebrow: WHY CHOOSE DESERT CANDLES ──── */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#E0A868] font-sans">
                {t.whyChooseUs.eyebrow}
              </span>
              <div className="w-10 h-[1.5px] bg-[#E0A868]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF6EE] tracking-tight leading-[1.18] mb-6">
              {t.whyChooseUs.titleLine1} <br />
              {t.whyChooseUs.titleLine2}
            </h2>

            <p className="text-sm sm:text-base text-[#D4C3B2] leading-relaxed max-w-md">
              {t.whyChooseUs.description}
            </p>
          </div>

          {/* Right Column: 2x2 Grid of 4 Pillars matching the picture */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {t.whyChooseUs.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start group">
                  {/* Circular Outline Icon with Gold Border */}
                  <div className="w-14 h-14 rounded-full border border-[#C98B4B]/40 bg-[#2D1E15]/70 flex items-center justify-center mb-4 group-hover:border-[#E0A868] group-hover:bg-[#38261B] transition-all duration-300">
                    {icons[idx] || <Award className="w-6 h-6 text-[#E0A868]" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-[#FAF6EE] mb-2 group-hover:text-[#F3D1A5] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#C4B2A0] leading-relaxed">
                    {item.description}
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
