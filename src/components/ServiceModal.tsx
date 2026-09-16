import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookConsultation,
}) => {
  const { t, isRTL } = useLanguage();
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#18120d] border border-[#c88a2c]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 md:p-10 text-[#f5efe6] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full bg-[#231a13] border border-[#c88a2c]/30 text-[#d8c7b0] hover:text-[#f59e0b] hover:bg-[#2c2017] transition-colors cursor-pointer"
          aria-label={t.serviceModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Number & Category Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-3xl font-bold text-[#f59e0b]">
            {service.number}
          </span>
          <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#c88a2c]/15 text-[#f59e0b] border border-[#c88a2c]/30">
            {t.brand.name}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#faf6ee] mb-4">
          {service.title}
        </h3>

        {/* Main description */}
        <p className="text-base sm:text-lg text-[#d8c9b5] leading-relaxed mb-6 font-normal">
          {service.shortDesc}
        </p>

        {/* Deep dive narrative */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#120e0a]/80 border border-[#c88a2c]/20 mb-8">
          <p className="text-sm text-[#b8a995] leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Two-column features & benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#f59e0b] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.serviceModal.coreDeliverables}</span>
            </h4>
            <ul className="space-y-2.5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d0c2b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c88a2c] shrink-0 mt-1.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#f59e0b] mb-3 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              <span>{t.serviceModal.keyBenefits}</span>
            </h4>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d0c2b0]">
                  <Check className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-[#c88a2c]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#a99986]">
            <Clock className="w-4 h-4 text-[#c88a2c]" />
            <span>{isRTL ? 'خطة تنفيذ مخصصة لمنظمتك' : 'Tailored execution roadmap'}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookConsultation(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-[#f59e0b] to-[#c88a2c] hover:from-[#fbbf24] hover:to-[#d97706] transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] cursor-pointer gap-2"
          >
            <span>{t.serviceModal.bookConsultation}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
