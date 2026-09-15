import React from 'react';
import { Target, Lightbulb, Users, Star } from 'lucide-react';

interface CoreCapabilitiesProps {
  onSelectCapability?: (title: string) => void;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ onSelectCapability }) => {
  const capabilities = [
    {
      icon: <Target className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
      title: 'Strategic HR',
      desc: 'Align people strategy with business objectives.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
      title: 'Innovative Solutions',
      desc: 'Technology-enabled HR solutions for modern organizations.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
      title: 'Customized Strategies',
      desc: "Solutions designed around each organization's unique needs.",
    },
    {
      icon: <Star className="w-6 h-6 text-[#1E1A16]" strokeWidth={1.75} />,
      title: 'Experienced Professionals',
      desc: 'Seasoned HR expertise across various industries.',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] border-b border-[#ECE3D5] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DAC9]">
          {capabilities.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => onSelectCapability && onSelectCapability(item.title)}
              className={`flex flex-col items-start px-4 lg:px-6 py-4 sm:py-2 group cursor-pointer hover:bg-[#F2EDE3]/50 transition-colors rounded-lg ${
                idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''
              }`}
            >
              {/* Clean line icon */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-[#1E1A16] group-hover:text-[#B87B3E] transition-colors">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-serif font-bold text-[#1E1C1A] mb-1.5 group-hover:text-[#B87B3E] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#6E6458] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
