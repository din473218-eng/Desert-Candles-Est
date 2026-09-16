import React from 'react';
import { Eye, Compass, Users2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import techHrImg from '../assets/images/tech_hr_office_1789469891928.jpg';

export const TechAndVisionRow: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="vision-mission" className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Image of Executive with Laptop & Holographic HR Nodes */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E8DFC0]/80 h-full min-h-[280px]">
              <img
                src={techHrImg}
                alt="Executive with Technology and HR Systems"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: 4 Clean Cards in a Row/Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 h-full">
              {/* Card 1: Where HR Expertise Meets Technology */}
              <div className="bg-white p-5 rounded-xl border border-[#E8DFC0]/80 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#B87B3E] font-semibold block mb-2">
                    {t.techVision.tag}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-[#1E1C1A] mb-2 leading-snug">
                    {t.techVision.techHrTitle}
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    {t.techVision.techHrDesc}
                  </p>
                </div>
              </div>

              {/* Card 2: Vision */}
              <div className="bg-white p-5 rounded-xl border border-[#E8DFC0]/80 flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#B87B3E] mb-3">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1E1C1A] mb-2">
                    {t.techVision.visionTitle}
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    {t.techVision.visionDesc}
                  </p>
                </div>
                <div className="pt-3 text-[#B87B3E]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </div>
              </div>

              {/* Card 3: Mission */}
              <div className="bg-white p-5 rounded-xl border border-[#E8DFC0]/80 flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#B87B3E] mb-3">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1E1C1A] mb-2">
                    {t.techVision.missionTitle}
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    {t.techVision.missionDesc}
                  </p>
                </div>
                <div className="pt-3 text-[#B87B3E]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </div>
              </div>

              {/* Card 4: Transform */}
              <div className="bg-white p-5 rounded-xl border border-[#E8DFC0]/80 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#B87B3E] mb-3">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1E1C1A] mb-2">
                    {t.techVision.transformTitle}
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    {t.techVision.transformDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
