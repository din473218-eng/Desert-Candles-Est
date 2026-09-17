import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Users,
  Heart,
  Star,
  Shield,
  Laptop,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceItem } from '../types';
import { ServiceModal } from '../components/ServiceModal';

const serviceIcons: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  UserCheck: <Users className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  HeartHandshake: <Heart className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  BarChart3: <Star className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  ShieldCheck: <Shield className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  Laptop: <Laptop className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
};

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleServiceInquiry = (serviceTitle: string) => {
    setSelectedService(null);
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

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
            {t.servicesSection.eyebrow}
          </span>
          <div className="w-10 h-[1.5px] bg-[#B87B3E]/60" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-[1.2] max-w-3xl mb-6">
          {t.servicesSection.title}
        </h1>

        <p className="text-base sm:text-lg text-[#5E5448] max-w-2xl leading-relaxed">
          {isRTL
            ? 'نقدم باقة متكاملة من الخدمات الاستشارية وحلول الموارد البشرية الرقمية المصممة لدعم أهدافك الاستراتيجية.'
            : 'Explore our six specialized pillars combining seasoned human resource advisory with innovative digital e-services.'}
        </p>
      </div>

      {/* 2. The 6 Main Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.servicesSection.items.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl p-8 border border-[#EADBCA] shadow-sm hover:shadow-xl hover:border-[#B87B3E]/70 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#EADBCA] group-hover:bg-[#B87B3E] transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EE] border border-[#EADBCA] flex items-center justify-center text-[#B87B3E] group-hover:bg-[#B87B3E] group-hover:text-white group-hover:scale-105 transition-all">
                    {serviceIcons[service.icon] || <TrendingUp className="w-6 h-6 text-[#B87B3E]" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#B87B3E] tracking-wider px-2.5 py-1 rounded-md bg-[#FAF5EE] border border-[#EADBCA]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1E1C1A] group-hover:text-[#B87B3E] transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Features Highlights */}
                {service.features && service.features.length > 0 && (
                  <div className="pt-4 border-t border-[#F2ECE1] space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#5E5448]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B87B3E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#B87B3E] group-hover:underline">
                  {t.servicesSection.learnMore}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#B87B3E] group-hover:bg-[#B87B3E] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform rtl:rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1612] rounded-3xl p-8 sm:p-12 text-white border border-[#C98B4B]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#261E17] border border-[#C98B4B]/40 text-xs font-semibold text-[#E0A868] uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              <span>{isRTL ? 'استشارة متخصصة' : 'TAILORED ENGAGEMENT'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
              {isRTL ? 'هل تحتاج إلى استشارة مخصصة لشركتك؟' : 'Need a Customized HR Strategy for Your Organization?'}
            </h2>
            <p className="text-xs sm:text-sm text-[#D4C3B2] leading-relaxed mb-6">
              {isRTL
                ? 'فريقنا جاهز لتصميم حلول وحزم إلكترونية تلبي احتياجاتك الفريدة بدقة وكفاءة عالية.'
                : 'Our consultants will analyze your workplace structure and develop an actionable roadmap aligned with your business vision.'}
            </p>

            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-md cursor-pointer"
            >
              <span>{isRTL ? 'تواصل مع فريقنا' : 'Discuss Your Requirements'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </section>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookConsultation={handleServiceInquiry}
        />
      )}
    </motion.div>
  );
};
