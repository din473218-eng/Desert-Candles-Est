import React from 'react';
import { motion } from 'motion/react';
import { Eye, Compass, Sparkles, Sun, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Card3D } from '../components/Card3D';

export const VisionMissionPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen pt-24 pb-20 bg-[#0E0B08] text-white relative overflow-hidden"
    >
      {/* 3D Glowing Horizon / Light connecting the Vision and Mission */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-transparent via-[#E0A868]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B87B3E]/15 blur-[140px] pointer-events-none" />

      {/* Decorative Golden Light Ray beam connecting the cards */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E0A868]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20150F] border border-[#C98B4B]/40 mb-4 text-xs uppercase tracking-[0.25em] font-semibold text-[#E0A868]">
            <Sun className="w-3.5 h-3.5 text-[#E0A868]" />
            <span>{isRTL ? 'مبادئنا وتطلعاتنا' : 'OUR GUIDING PRINCIPLES'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {isRTL ? 'الرؤية والرسالة' : 'Vision & Mission'}
          </h1>
        </div>

        {/* Two Floating 3D Panels with Connecting Light Beam */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16 relative">
          {/* Central Connecting Radiant Node between the two panels on large screens */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#B87B3E] items-center justify-center text-white shadow-[0_0_30px_rgba(224,168,104,0.8)] z-20 pointer-events-none border border-white/40">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>

          {/* 1. OUR VISION Panel */}
          <Card3D depth={10} className="h-full">
            <div className="h-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1C140E]/95 to-[#140E0A]/98 border border-[#C98B4B]/40 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between group hover:border-[#E0A868] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0A868]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#2D1D12] border border-[#C98B4B]/40 flex items-center justify-center text-[#E0A868] group-hover:scale-110 group-hover:border-[#E0A868] group-hover:shadow-[0_0_20px_rgba(224,168,104,0.3)] transition-all">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#E0A868] font-semibold px-3 py-1 rounded-full bg-[#E0A868]/10 border border-[#E0A868]/30">
                    {isRTL ? 'تطلعاتنا' : 'ASPIRATION'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6 group-hover:text-[#F3D1A5] transition-colors">
                  {isRTL ? 'رؤيتنا' : 'Our Vision'}
                </h2>

                <blockquote className="text-lg sm:text-xl font-serif italic text-[#E5D7C7] leading-relaxed relative pl-5 rtl:pl-0 rtl:pr-5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#E0A868]">
                  "{t.techVision.visionDesc}"
                </blockquote>
              </div>

              <div className="mt-10 pt-6 border-t border-[#C98B4B]/20 flex items-center justify-between">
                <span className="text-xs tracking-wider uppercase text-[#A89886] font-mono">
                  {isRTL ? 'الريادة والتميز المؤسسي' : 'Leadership & Excellence'}
                </span>
                <Sparkles className="w-4 h-4 text-[#E0A868]" />
              </div>
            </div>
          </Card3D>

          {/* 2. OUR MISSION Panel */}
          <Card3D depth={10} className="h-full">
            <div className="h-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1C140E]/95 to-[#140E0A]/98 border border-[#C98B4B]/40 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between group hover:border-[#E0A868] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#E0A868]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#2D1D12] border border-[#C98B4B]/40 flex items-center justify-center text-[#E0A868] group-hover:scale-110 group-hover:border-[#E0A868] group-hover:shadow-[0_0_20px_rgba(224,168,104,0.3)] transition-all">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#E0A868] font-semibold px-3 py-1 rounded-full bg-[#E0A868]/10 border border-[#E0A868]/30">
                    {isRTL ? 'رسالتنا' : 'PURPOSE'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6 group-hover:text-[#F3D1A5] transition-colors">
                  {isRTL ? 'رسالتنا' : 'Our Mission'}
                </h2>

                <blockquote className="text-lg sm:text-xl font-serif italic text-[#E5D7C7] leading-relaxed relative pl-5 rtl:pl-0 rtl:pr-5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#E0A868]">
                  "{t.techVision.missionDesc}"
                </blockquote>
              </div>

              <div className="mt-10 pt-6 border-t border-[#C98B4B]/20 flex items-center justify-between">
                <span className="text-xs tracking-wider uppercase text-[#A89886] font-mono">
                  {isRTL ? 'تمكين المنشآت وثقافة العمل' : 'Empowering Organizations'}
                </span>
                <Sparkles className="w-4 h-4 text-[#E0A868]" />
              </div>
            </div>
          </Card3D>
        </div>

        {/* Action Link to Contact or Services */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-lg"
          >
            <span>{isRTL ? 'شاركنا رحلة النجاح' : 'Partner With Us on This Mission'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
