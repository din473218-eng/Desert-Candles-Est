import React from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CoreCapabilitiesProps {
  onSelectCapability?: (title: string) => void;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ onSelectCapability }) => {
  const { t } = useLanguage();

  const icons = [
    <Target key="target" className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
    <Lightbulb key="bulb" className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
    <Users key="users" className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
    <Award key="award" className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
  ];

  return (
    <section className="bg-[#FAF8F5] border-b border-[#ECE3D5] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#E5DAC9]">
          {t.capabilities.map((item, idx) => (
            <div
              key={item.number}
              onClick={() => onSelectCapability && onSelectCapability(item.title)}
              className={`flex flex-col items-start px-4 lg:px-6 py-4 sm:py-2 group cursor-pointer hover:bg-[#F2EDE3]/50 transition-colors rounded-lg ${
                idx !== 0 ? 'sm:pl-6 lg:pl-8 rtl:sm:pl-0 rtl:sm:pr-6 rtl:lg:pr-8' : ''
              }`}
            >
              {/* Clean line icon */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-[#1E1A16] group-hover:text-[#B87B3E] transition-colors">
                {icons[idx] || <Award className="w-6 h-6" />}
              </div>

              {/* Title */}
              <h3 className="text-base font-serif font-bold text-[#1E1C1A] mb-1.5 group-hover:text-[#B87B3E] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#6E6458] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
