import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Users, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AboutNetwork3D } from '../components/AboutNetwork3D';
import aboutNetworkImg from '../assets/images/about_network_touch_1789469859759.jpg';
import techHrImg from '../assets/images/tech_hr_office_1789469891928.jpg';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen pt-24 pb-20 bg-[#FAF8F5]"
    >
      {/* 1. Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B87B3E]">
            {t.about.eyebrow}
          </span>
          <div className="w-10 h-[1.5px] bg-[#B87B3E]/60" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-[1.2] max-w-3xl mb-6">
          {t.about.titleLine1} <br />
          <span className="text-[#B87B3E]">{t.about.titleLine2}</span>
        </h1>

        <p className="text-base sm:text-lg text-[#5E5448] max-w-2xl leading-relaxed">
          {t.about.paragraph1}
        </p>
      </div>

      {/* 2. Main Company Narrative & Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Overlay */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.09)] border border-[#E8DFC0]/70 group">
              <img
                src={aboutNetworkImg}
                alt="Organizational human capital and technology network"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                <p className="text-xs sm:text-sm font-medium leading-snug">
                  {isRTL
                    ? 'تمكين المنشآت من تحسين رأس المال البشري والاستفادة من أحدث التقنيات.'
                    : 'Optimizing human capital and leveraging technology for high-performance organizations.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#EADBCA] shadow-xs">
              <h3 className="text-xl font-serif font-bold text-[#1E1C1A] mb-3">
                {isRTL ? 'من نحن ورؤيتنا لمستقبل العمل' : 'Who We Are & How We Operate'}
              </h3>
              <p className="text-sm sm:text-base text-[#5E5448] leading-relaxed mb-4">
                {t.about.paragraph1}
              </p>
              <p className="text-sm sm:text-base text-[#5E5448] leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-[#EADBCA] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#FAF5EE] border border-[#E2D2BC] flex items-center justify-center text-[#B87B3E] mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1E1C1A] mb-1.5">
                  {isRTL ? 'استشارات الموارد البشرية' : 'HR Consultancy Focus'}
                </h4>
                <p className="text-xs text-[#6E6458] leading-relaxed">
                  {isRTL
                    ? 'ممارسات متخصصة في التخطيط الاستراتيجي، إدارة المواهب، وتطوير الأداء المؤسسي.'
                    : 'Dedicated advisory in talent management, strategic workforce planning, and organizational excellence.'}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#EADBCA] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#FAF5EE] border border-[#E2D2BC] flex items-center justify-center text-[#B87B3E] mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1E1C1A] mb-1.5">
                  {isRTL ? 'التقنية والخدمات الإلكترونية' : 'Technology & E-Services'}
                </h4>
                <p className="text-xs text-[#6E6458] leading-relaxed">
                  {isRTL
                    ? 'أتمتة العمليات ورقمنة قنوات الموارد البشرية لضمان كفاءة تشغيلية مستدامة.'
                    : 'Modern digital systems, e-service automation, and workflow integration for agile enterprises.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Technology Focus & 3D Interactive Network */}
      <section className="py-16 bg-[#16120E] text-white border-y border-[#292018] mb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 3D Canvas */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-[#1C1612] p-4 border border-[#C98B4B]/30 shadow-2xl">
                <div className="h-[340px] sm:h-[400px] w-full rounded-xl overflow-hidden relative">
                  <AboutNetwork3D className="w-full h-full" />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-[#C98B4B]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {isRTL ? 'نظام شموع الصحراء المترابط' : 'Desert Candles Interactive 3D Ecosystem'}
                  </span>
                  <span className="text-[11px] font-mono text-[#A89886]">ACTIVE NODE</span>
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#261E17] border border-[#C98B4B]/40 text-xs font-semibold text-[#E0A868] uppercase tracking-wider">
                <span>{t.techVision.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight leading-snug text-white">
                {t.techVision.techHrTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#D4C3B2] leading-relaxed">
                {t.techVision.techHrDesc}
              </p>

              {/* Guiding Mission Box as Provided by the Company */}
              <div className="p-6 rounded-xl bg-[#221A14] border border-[#C98B4B]/30">
                <div className="flex items-center gap-2 mb-2 text-[#E0A868]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold font-mono">
                    {isRTL ? 'رسالتنا وهدفنا' : 'OUR PURPOSE & MISSION'}
                  </span>
                </div>
                <blockquote className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
                  "{t.techVision.missionDesc}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#EADBCA] shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-[#1E1C1A] mb-3">
            {isRTL ? 'جاهز للارتقاء بمنظومة الموارد البشرية؟' : 'Ready to Elevate Your HR Ecosystem?'}
          </h3>
          <p className="text-xs sm:text-sm text-[#5E5448] mb-6 max-w-lg mx-auto">
            {isRTL
              ? 'تواصل مع مستشارينا لمناقشة التحديات والحلول المخصصة لمؤسستك.'
              : 'Connect with our senior consultants to explore customized strategies and e-services.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-sm"
            >
              <span>{isRTL ? 'تواصل معنا الآن' : "Let's Connect"}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#1E1C1A] bg-[#F2EDE3] hover:bg-[#EAE2D3] transition-colors border border-[#D9CDBC]"
            >
              <span>{isRTL ? 'استكشف خدماتنا' : 'Explore Our Services'}</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
