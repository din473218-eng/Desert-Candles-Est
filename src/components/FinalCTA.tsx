import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onGetInTouch: () => void;
  onExploreServices: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetInTouch, onExploreServices }) => {
  return (
    <section className="bg-[#22160F] text-white py-14 lg:py-16 border-b border-[#332218]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Side: Copy */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight mb-2">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xs sm:text-sm text-[#D4C3B2] leading-relaxed">
              Let's explore how strategic HR practices and technology-driven e-services can support your organization's goals.
            </p>
          </div>

          {/* Right Side: Dual Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <button
              onClick={onGetInTouch}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-all duration-200 shadow-sm gap-2 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold text-white bg-transparent hover:bg-white/10 border border-white/40 hover:border-white/70 transition-all duration-200 cursor-pointer"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
