import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card3D } from '../components/Card3D';

export const OurApproachPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const corePillars = [
    {
      icon: <Layers className="w-6 h-6 text-[#B87B3E]" />,
      title: isRTL ? 'الخبرة القطاعية العميقة' : 'Industry Expertise',
      desc: isRTL
        ? 'فريق من كبار استشاريي الموارد البشرية يمتلكون خبرة عملية واسعة عبر مختلف القطاعات الاقتصادية بالمملكة.'
        : 'Seasoned HR professionals bringing deep cross-sector insights to navigate complex workforce landscapes.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#B87B3E]" />,
      title: isRTL ? 'خدمات إلكترونية متقدمة' : 'Cutting-Edge E-Services',
      desc: isRTL
        ? 'تسخير التقنيات الرقمية المبتكرة والأنظمة السحابية لتبسيط وأتمتة العمليات اليومية بكفاءة عالية.'
        : 'Harnessing modern technology and digital tools to automate, streamline, and accelerate HR operations.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#B87B3E]" />,
      title: isRTL ? 'استراتيجيات مبتكرة' : 'Innovative Strategies',
      desc: isRTL
        ? 'تطوير منهجيات مرنة وغير تقليدية تتناسب مع التغيرات السريعة في بيئات العمل المعاصرة.'
        : 'Agile, forward-thinking methodologies crafted to foster engagement, resilience, and productivity.',
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#B87B3E]" />,
      title: isRTL ? 'شراكة وتعاون وثيق' : 'Collaboration with Businesses',
      desc: isRTL
        ? 'العمل جنباً إلى جنب مع الإدارة التنفيذية والفرق الداخلية كشريك استراتيجي ملتزم بتحقيق الأهداف المشتركة.'
        : 'Partnering shoulder-to-shoulder with leadership to ensure solutions truly fit organizational culture.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#B87B3E]" />,
      title: isRTL ? 'ممارسات مستدامة واستشراف للمستقبل' : 'Sustainable Practices & Future Needs',
      desc: isRTL
        ? 'معالجة التحديات الراهنة واستشراف متطلبات الغد لبناء أنظمة موارد بشرية صلبة ومستدامة على المدى الطويل.'
        : 'Addressing immediate operational challenges while actively anticipating future talent requirements.',
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
            {t.approach.eyebrow}
          </span>
          <div className="w-10 h-[1.5px] bg-[#B87B3E]/60" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-[1.2] max-w-3xl mb-6">
          {t.approach.titleLine1} <br />
          <span className="text-[#B87B3E]">{t.approach.titleLine2}</span>
        </h1>

        <div className="max-w-3xl p-6 sm:p-8 rounded-2xl bg-[#F2EDE3]/70 border border-[#EADBCA]">
          <p className="text-base sm:text-lg text-[#1E1C1A] font-serif font-medium mb-3 leading-snug">
            {isRTL
              ? 'كل منشأة فريدة من نوعها وتستحق حلولاً مصممة خصيصاً لها.'
              : 'Every organization is distinct and deserves tailored solutions.'}
          </p>
          <p className="text-xs sm:text-sm text-[#5E5448] leading-relaxed">
            {t.approach.description}
          </p>
        </div>
      </div>

      {/* 2. Visual Sequential 4-Step Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-10 text-center sm:text-start">
          <span className="text-xs font-mono font-semibold text-[#B87B3E] uppercase tracking-wider block mb-1">
            {isRTL ? 'مراحل العمل' : 'OUR 4-STAGE METHODOLOGY'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1C1A]">
            {isRTL ? 'كيف نحول التحديات إلى نجاحات مستدامة' : 'From Discovery to Sustainable Transformation'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.approach.steps.map((step, idx) => (
            <Card3D key={step.number} depth={6} className="h-full">
              <div className="h-full bg-white rounded-2xl p-7 border border-[#EADBCA] shadow-xs hover:border-[#B87B3E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-full bg-[#B87B3E] text-white flex items-center justify-center font-serif text-base font-bold shadow-sm group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    {idx < t.approach.steps.length - 1 && (
                      <div className="hidden lg:block text-[#C9B8A4]">
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1E1C1A] group-hover:text-[#B87B3E] transition-colors mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#6E6458] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE1] text-[11px] font-mono text-[#B87B3E] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isRTL ? `المرحلة 0${idx + 1}` : `Stage 0${idx + 1}`}</span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 3. 3D Presentation of the 5 Core Tenets */}
      <section className="py-16 bg-[#18130F] text-white border-y border-[#292018] mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#261E17] border border-[#C98B4B]/40 text-xs font-semibold text-[#E0A868] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A868]" />
              <span>{isRTL ? 'ركائز المنهجية' : 'CORE APPROACH PILLARS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
              {isRTL ? 'الجمع بين الخبرة والتقنية والشراكة' : 'Expertise, Innovation & True Collaboration'}
            </h2>
            <p className="text-xs sm:text-sm text-[#D4C3B2]">
              {isRTL
                ? 'نعمل جنباً إلى جنب مع عملائنا لبناء ممارسات مستدامة تواجه تحديات الحاضر وتستشرف متطلبات المستقبل.'
                : 'Addressing current challenges and anticipating future needs through sustainable HR practices.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="bg-[#221A14]/90 rounded-2xl p-7 border border-[#C98B4B]/30 hover:border-[#E0A868] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2D221A] border border-[#C98B4B]/40 flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9B8A4] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Special Highlight Box */}
            <div className="bg-gradient-to-br from-[#B87B3E] to-[#8C5824] rounded-2xl p-7 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-white/80 block mb-3">
                  {isRTL ? 'رؤيتنا للمستقبل' : 'FUTURE READINESS'}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {isRTL ? 'حلول مستدامة تصنع الفارق' : 'Anticipating What Lies Ahead'}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                  {isRTL
                    ? 'نهيئ منظمتك للمتغيرات الاقتصادية والتقنية القادمة عبر بنية موارد بشرية مرنة وموثوقة.'
                    : 'We prepare your organization for the next wave of workforce transformation with agile, compliant systems.'}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-[#1E1C1A] hover:bg-[#FAF5EE] transition-colors"
              >
                <span>{isRTL ? 'صمم خطتك المخصصة معنا' : 'Design Your Tailored Plan'}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 rtl:mr-2 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#EADBCA] shadow-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-[#1E1C1A] mb-3">
            {isRTL ? 'هل ترغب في تطبيق هذه المنهجية في منشأتك؟' : 'Ready to Apply This Approach to Your Team?'}
          </h3>
          <p className="text-xs sm:text-sm text-[#5E5448] mb-6">
            {isRTL
              ? 'تواصل معنا لعقد جلسة استكشافية لفهم أهدافك وتحديد الحلول الأنسب.'
              : 'Schedule an initial discovery session to explore customized strategies and e-services.'}
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-sm cursor-pointer"
          >
            <span>{isRTL ? 'احجز جلسة استشارية' : 'Book a Discovery Call'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </section>
    </motion.div>
  );
};
