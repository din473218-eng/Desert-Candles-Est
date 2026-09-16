import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import { useLanguage } from '../context/LanguageContext';
import {
  TrendingUp,
  Users,
  Heart,
  Star,
  Shield,
  Laptop,
  ArrowRight,
} from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  UserCheck: <Users className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  HeartHandshake: <Heart className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  BarChart3: <Star className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  ShieldCheck: <Shield className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
  Laptop: <Laptop className="w-6 h-6 text-[#B87B3E]" strokeWidth={1.75} />,
};

interface ServicesShowcaseProps {
  onSelectServiceForConsultation?: (serviceTitle: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectServiceForConsultation,
}) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookConsultation = (title: string) => {
    if (onSelectServiceForConsultation) {
      onSelectServiceForConsultation(title);
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F2EB] border-y border-[#ECE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Eyebrow: ──── OUR HR SOLUTIONS ──── */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#B87B3E]/60" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B87B3E] font-sans">
              {t.servicesSection.eyebrow}
            </span>
            <div className="w-8 h-[1px] bg-[#B87B3E]/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-tight">
            {t.servicesSection.title}
          </h2>
        </div>

        {/* 6 White Cards in 3x2 Grid matching the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.servicesSection.items.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-xl p-8 border border-[#E8DFC0]/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-[#B87B3E]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Icon */}
                <div className="mb-4 text-[#B87B3E]">
                  {serviceIcons[service.icon] || <TrendingUp className="w-6 h-6 text-[#B87B3E]" />}
                </div>

                {/* Number */}
                <div className="text-sm font-sans font-bold text-[#B87B3E] tracking-wider mb-2">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-[#1E1C1A] mb-2.5 group-hover:text-[#B87B3E] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-[13px] text-[#6E6458] leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Link at Bottom */}
              <div className="pt-2 flex items-center gap-1.5 text-xs font-medium text-[#B87B3E] group-hover:underline">
                <span>{t.servicesSection.learnMore}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={handleBookConsultation}
      />
    </section>
  );
};
