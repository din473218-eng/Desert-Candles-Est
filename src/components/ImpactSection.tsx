import React from 'react';
import { TrendingUp, Users, Heart, Cog } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ImpactSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <TrendingUp key="trending" className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
    <Users key="users" className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
    <Heart key="heart" className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
    <Cog key="cog" className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1C1A] tracking-tight mb-2">
          {t.impact.title}
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#6E6458] mb-12 max-w-xl mx-auto">
          {t.impact.subtitle}
        </p>

        {/* 4 Minimalist Floating Impact Items in a Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {t.impact.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#F3EFE8] flex items-center justify-center text-[#B87B3E] mb-3 group-hover:bg-[#EADFCF] group-hover:scale-105 transition-all">
                {icons[idx] || <TrendingUp className="w-6 h-6 text-[#B87B3E]" />}
              </div>
              <h3 className="font-serif font-semibold text-sm text-[#1E1C1A] group-hover:text-[#B87B3E] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
