import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Award,
  Cpu,
  Sliders,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Users,
  Heart,
  Cog,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card3D } from '../components/Card3D';
import desertDunesImg from '../assets/images/desert_dunes_waves_1789469877698.jpg';

export const WhyChooseUsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const pillarIcons = [
    <Award key="award" className="w-7 h-7 text-[#E0A868]" strokeWidth={1.5} />,
    <Cpu key="cpu" className="w-7 h-7 text-[#E0A868]" strokeWidth={1.5} />,
    <Sliders key="sliders" className="w-7 h-7 text-[#E0A868]" strokeWidth={1.5} />,
    <ShieldCheck key="shield" className="w-7 h-7 text-[#E0A868]" strokeWidth={1.5} />,
  ];

  const impacts = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: isRTL ? 'استراتيجية موارد بشرية أفضل' : 'Better HR Strategy',
      desc: isRTL ? 'مواءمة مستمرة مع الأهداف المؤسسية' : 'Direct alignment with corporate goals',
    },
    {
      icon: <Users className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: isRTL ? 'كفاءات ومواهب أقوى' : 'Stronger Talent',
      desc: isRTL ? 'استقطاب وتطوير أفضل الكوادر' : 'Attracting & nurturing top performers',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: isRTL ? 'موظفون أكثر ارتباطاً وتفاعلاً' : 'Engaged Employees',
      desc: isRTL ? 'بيئة عمل تحفيزية وثقافة صحية' : 'Healthy, motivating workplace culture',
    },
    {
      icon: <Cog className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
      title: isRTL ? 'عمليات وإجراءات أكثر كفاءة' : 'More Efficient Processes',
      desc: isRTL ? 'أتمتة ذكية وتوفير في الوقت والموارد' : 'Smart digital automation saving time',
    },
  ];

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
            {t.whyChooseUs.eyebrow}
          </span>
          <div className="w-10 h-[1.5px] bg-[#B87B3E]/60" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-[1.2] max-w-3xl mb-6">
          {t.whyChooseUs.titleLine1} <br />
          <span className="text-[#B87B3E]">{t.whyChooseUs.titleLine2}</span>
        </h1>

        <p className="text-base sm:text-lg text-[#5E5448] max-w-2xl leading-relaxed">
          {t.whyChooseUs.description}
        </p>
      </div>

      {/* 2. The Four Main Areas in Premium 3D Cards */}
      <section className="relative bg-[#1C140E] text-white py-20 mb-20 overflow-hidden">
        {/* Background Desert Dunes Atmosphere */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src={desertDunesImg}
            alt="Desert Dunes Waves"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C140E] via-transparent to-[#1C140E]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A1D14] border border-[#C98B4B]/40 text-xs font-semibold text-[#E0A868] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A868]" />
              <span>{isRTL ? 'الركائز الأساسية' : 'THE FOUR FOUNDATIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
              {isRTL ? 'أربع ركائز تميز استشاراتنا' : 'Four Pillars of Institutional Excellence'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.whyChooseUs.items.map((item, idx) => (
              <Card3D key={idx} depth={8} className="h-full">
                <div className="h-full bg-gradient-to-b from-[#251A12]/95 to-[#1C130D]/95 rounded-2xl p-8 sm:p-10 border border-[#C98B4B]/35 shadow-xl hover:border-[#E0A868] hover:shadow-[0_15px_40px_rgba(224,168,104,0.15)] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#322218] border border-[#C98B4B]/40 flex items-center justify-center group-hover:scale-105 group-hover:border-[#E0A868] transition-all">
                        {pillarIcons[idx] || <Award className="w-7 h-7 text-[#E0A868]" />}
                      </div>
                      <span className="text-xs font-mono tracking-widest text-[#C98B4B] font-semibold px-3 py-1 rounded-full bg-[#C98B4B]/10 border border-[#C98B4B]/20">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#F3D1A5] transition-colors mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D4C3B2] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C98B4B]/20 flex items-center gap-2 text-xs text-[#E0A868]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isRTL ? 'معيار أساسي في شموع الصحراء' : 'Core Desert Candles Standard'}</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Institutional Impact We Create */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1C1A] mb-3">
            {t.impact.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6458]">
            {t.impact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-[#EADBCA] shadow-xs hover:border-[#B87B3E] hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF5EE] border border-[#EADBCA] flex items-center justify-center mb-4 text-[#B87B3E]">
                {impact.icon}
              </div>
              <h3 className="font-serif font-bold text-base text-[#1E1C1A] mb-2">
                {impact.title}
              </h3>
              <p className="text-xs text-[#6E6458] leading-relaxed">
                {impact.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#EADBCA] shadow-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-[#1E1C1A] mb-3">
            {isRTL ? 'ابدأ شراكتك الاستراتيجية معنا' : 'Start Your Strategic Partnership With Us'}
          </h3>
          <p className="text-xs sm:text-sm text-[#5E5448] mb-6">
            {isRTL
              ? 'فريقنا مستعد لدعم رحلة نمو مؤسستك وتقديم الحلول الاستشارية الأمثل.'
              : 'Let us help your organization unlock its true human capital potential.'}
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-sm cursor-pointer"
          >
            <span>{isRTL ? 'تواصل مع خبرائنا' : 'Speak With Our Consultants'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </section>
    </motion.div>
  );
};
