import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Eye, Users2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HeroSection } from '../components/HeroSection';
import { CoreCapabilities } from '../components/CoreCapabilities';
import { FinalCTA } from '../components/FinalCTA';
import { AboutNetwork3D } from '../components/AboutNetwork3D';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen pt-20"
    >
      {/* 1. Hero Section */}
      <HeroSection
        onTalkToExperts={() => navigate('/contact')}
        onExploreServices={() => navigate('/services')}
      />

      {/* 2. Four Core Capabilities Bar */}
      <CoreCapabilities onSelectCapability={() => navigate('/services')} />

      {/* 3. Premium 3D HR / Technology Visual Showcase */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE3D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: 3D Interactive Network Node */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-[#1C1612] to-[#120E0A] p-3 sm:p-4 shadow-xl border border-[#C98B4B]/30 overflow-hidden">
                {/* 3D Network Canvas */}
                <div className="h-[320px] sm:h-[380px] w-full rounded-xl overflow-hidden relative">
                  <AboutNetwork3D className="w-full h-full" />

                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 border border-[#C98B4B]/40 backdrop-blur-md flex items-center gap-1.5 text-[11px] text-[#E0A868] font-medium">
                    <Sparkles className="w-3 h-3 text-[#E0A868]" />
                    <span>{isRTL ? 'بيئة تفاعلية ثلاثية الأبعاد' : '3D HR & Tech Network'}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 border border-[#C98B4B]/30 backdrop-blur-md text-[10px] text-[#D4C3B2] font-mono">
                    DESERT CANDLES • EST.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Intro */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE3] border border-[#DFCBB5] text-xs font-semibold text-[#B87B3E] uppercase tracking-wider mb-4">
                <span>{t.techVision.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1E1C1A] tracking-tight mb-4 leading-snug">
                {t.techVision.techHrTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#5E5448] leading-relaxed mb-6 font-normal">
                {t.techVision.techHrDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-[#E8DFC0]/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF5EE] border border-[#E2D2BC] flex items-center justify-center text-[#B87B3E] mb-2.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1E1C1A] mb-1">
                    {t.techVision.visionTitle}
                  </h4>
                  <p className="text-xs text-[#6E6458] leading-relaxed line-clamp-2">
                    {t.techVision.visionDesc}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E8DFC0]/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF5EE] border border-[#E2D2BC] flex items-center justify-center text-[#B87B3E] mb-2.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1E1C1A] mb-1">
                    {t.techVision.missionTitle}
                  </h4>
                  <p className="text-xs text-[#6E6458] leading-relaxed line-clamp-2">
                    {t.techVision.missionDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-sm"
                >
                  <span>{isRTL ? 'اكتشف المزيد عن المؤسسة' : 'Learn More About Us'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>

                <Link
                  to="/vision-mission"
                  className="text-xs font-semibold text-[#6E6458] hover:text-[#B87B3E] transition-colors"
                >
                  {isRTL ? 'عرض الرؤية والرسالة ←' : 'View Vision & Mission →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Small Preview of Company Services */}
      <section className="py-16 lg:py-20 bg-[#F5EFE6]/60 border-b border-[#ECE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B87B3E] block mb-2">
                {isRTL ? 'خدماتنا المتخصصة' : 'TAILORED HR EXCELLENCE'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1E1C1A] tracking-tight">
                {isRTL ? 'نظرة عامة على خدماتنا' : 'Our Specialized Services'}
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#B87B3E] hover:text-[#A36B32] transition-colors mt-4 sm:mt-0"
            >
              <span>{isRTL ? 'استكشف جميع الخدمات وتفاصيلها' : 'View All 6 Services & Deliverables'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* 6 Services Compact Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.servicesSection.items.map((service, index) => (
              <div
                key={service.id}
                onClick={() => navigate('/services')}
                className="bg-white rounded-xl p-6 border border-[#EADBCA] hover:border-[#B87B3E] hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-[#B87B3E]">
                      0{index + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#B87B3E]/40 group-hover:bg-[#B87B3E] transition-colors" />
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#1E1C1A] group-hover:text-[#B87B3E] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#6E6458] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] font-semibold text-[#B87B3E]">
                  <span>{isRTL ? 'عرض التفاصيل' : 'Explore Service'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final Home-page CTA */}
      <FinalCTA
        onGetInTouch={() => navigate('/contact')}
        onExploreServices={() => navigate('/services')}
      />
    </motion.div>
  );
};
