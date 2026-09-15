import React from 'react';
import { Card3D } from './Card3D';
import { Eye, Compass, Sparkles, Sun } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="relative py-24 md:py-32 bg-[#0c0a08] overflow-hidden">
      {/* Glowing Horizon / Light Behind the Panels */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#f59e0b]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c150f] border border-[#c88a2c]/35 mb-4 text-xs uppercase tracking-[0.25em] font-semibold text-[#f59e0b]">
            <Sun className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>OUR GUIDING PRINCIPLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#faf6ee] tracking-tight">
            Vision & Mission
          </h2>
        </div>

        {/* Two Large Floating 3D Glass Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* VISION Panel */}
          <Card3D depth={10} className="h-full">
            <div className="h-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1b1510]/90 to-[#120e0b]/95 border border-[#c88a2c]/35 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#f59e0b]/70 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#231a12] border border-[#c88a2c]/40 flex items-center justify-center text-[#f59e0b] group-hover:scale-110 group-hover:border-[#f59e0b] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#c88a2c] font-semibold px-3 py-1 rounded-full bg-[#c88a2c]/10 border border-[#c88a2c]/20">
                    Aspiration
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fcf9f2] mb-6 group-hover:text-[#fde68a] transition-colors">
                  Our Vision
                </h3>

                <blockquote className="text-lg sm:text-xl font-serif italic text-[#ded2c3] leading-relaxed relative pl-4 border-l-2 border-[#f59e0b]">
                  "To be a leading HR consultancy recognized for our innovative solutions and commitment to excellence."
                </blockquote>
              </div>

              <div className="mt-10 pt-6 border-t border-[#c88a2c]/20 flex items-center justify-between">
                <span className="text-xs tracking-wider uppercase text-[#a99986]">
                  Strategic Guidance
                </span>
                <Sparkles className="w-4 h-4 text-[#f59e0b]" />
              </div>
            </div>
          </Card3D>

          {/* MISSION Panel */}
          <Card3D depth={10} className="h-full">
            <div className="h-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1b1510]/90 to-[#120e0b]/95 border border-[#c88a2c]/35 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#f59e0b]/70 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#231a12] border border-[#c88a2c]/40 flex items-center justify-center text-[#f59e0b] group-hover:scale-110 group-hover:border-[#f59e0b] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#c88a2c] font-semibold px-3 py-1 rounded-full bg-[#c88a2c]/10 border border-[#c88a2c]/20">
                    Purpose
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fcf9f2] mb-6 group-hover:text-[#fde68a] transition-colors">
                  Our Mission
                </h3>

                <blockquote className="text-lg sm:text-xl font-serif italic text-[#ded2c3] leading-relaxed relative pl-4 border-l-2 border-[#f59e0b]">
                  "To empower organizations through strategic HR practices and technology-driven e-services that foster a thriving workplace culture."
                </blockquote>
              </div>

              <div className="mt-10 pt-6 border-t border-[#c88a2c]/20 flex items-center justify-between">
                <span className="text-xs tracking-wider uppercase text-[#a99986]">
                  Culture & Technology
                </span>
                <Sparkles className="w-4 h-4 text-[#f59e0b]" />
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};
