import React from 'react';
import { Eye, Compass, Users2, ArrowRight } from 'lucide-react';
import techHrImg from '../assets/images/tech_hr_office_1789469891928.jpg';

export const TechAndVisionRow: React.FC = () => {
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
                    TECHNOLOGY + HR
                  </span>
                  <h3 className="font-serif font-bold text-sm text-[#1E1C1A] mb-2 leading-snug">
                    Where HR Expertise Meets Technology
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    Desert Candles combines seasoned HR expertise with cutting-edge e-services for modern organizations.
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
                    Vision
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    To be a leading HR consultancy recognized for our innovative solutions and commitment to excellence.
                  </p>
                </div>
                <div className="pt-3 text-[#B87B3E]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card 3: Mission */}
              <div className="bg-white p-5 rounded-xl border border-[#E8DFC0]/80 flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#B87B3E] mb-3">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1E1C1A] mb-2">
                    Mission
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    To empower organizations through strategic HR practices and technology-driven e-services to foster a thriving workplace culture.
                  </p>
                </div>
                <div className="pt-3 text-[#B87B3E]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card 4: Transform */}
              <div className="bg-white p-5 rounded-xl border border-[#E8DFC0]/80 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#B87B3E] mb-3">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1E1C1A] mb-2">
                    Transform
                  </h3>
                  <p className="text-xs text-[#6E6458] leading-relaxed">
                    Build sustainable HR practices that address current challenges and anticipate future needs.
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
