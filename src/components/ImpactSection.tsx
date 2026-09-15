import React from 'react';
import { TrendingUp, Users, Heart, Cog } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: 'Better HR Strategy',
    },
    {
      icon: <Users className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: 'Stronger Talent',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: 'Engaged Employees',
    },
    {
      icon: <Cog className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: 'More Efficient Processes',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1C1A] tracking-tight mb-2">
          The Impact We Create
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#6E6458] mb-12 max-w-xl mx-auto">
          Helping organizations build stronger teams, better processes and a brighter future.
        </p>

        {/* 4 Minimalist Floating Impact Items in a Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impacts.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center p-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#F3EFE8] flex items-center justify-center text-[#B87B3E] mb-3 group-hover:bg-[#EADFCF] group-hover:scale-105 transition-all">
                {item.icon}
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
