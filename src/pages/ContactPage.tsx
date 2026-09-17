import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Building2,
  Send,
  Globe,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get('service');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: prefilledService
      ? (isRTL ? `استفسار بخصوص خدمة: ${prefilledService}` : `Inquiring about ${prefilledService} service.`)
      : '',
  });

  const [serviceCategory, setServiceCategory] = useState<string>(
    prefilledService || (isRTL ? 'استشارة عامة' : 'General HR Consultation')
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setServiceCategory(prefilledService);
      setFormData((prev) => ({
        ...prev,
        message: isRTL
          ? `استفسار بخصوص خدمة: ${prefilledService}`
          : `Inquiring about ${prefilledService} service.`,
      }));
    }
  }, [prefilledService, isRTL]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg(t.contact.errorRequired);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const serviceOptions = [
    isRTL ? 'استشارة عامة' : 'General HR Consultation',
    isRTL ? 'التخطيط الاستراتيجي للموارد البشرية' : 'Strategic HR Planning',
    isRTL ? 'استقطاب وإدارة المواهب' : 'Talent Acquisition & Management',
    isRTL ? 'حلول مشاركة وارتباط الموظفين' : 'Employee Engagement Solutions',
    isRTL ? 'إدارة الأداء المؤسسي' : 'Performance Management',
    isRTL ? 'الامتثال وإدارة المخاطر' : 'Compliance & Risk Management',
    isRTL ? 'الخدمات الإلكترونية وحلول الأتمتة' : 'Customized E-Services & Automation',
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
            {isRTL ? 'تواصل معنا' : 'GET IN TOUCH'}
          </span>
          <div className="w-10 h-[1.5px] bg-[#B87B3E]/60" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1C1A] tracking-tight leading-[1.2] max-w-3xl mb-6">
          {t.contact.title}
        </h1>

        <p className="text-base sm:text-lg text-[#5E5448] max-w-2xl leading-relaxed">
          {t.contact.description}
        </p>
      </div>

      {/* 2. Main Contact Form & Direct Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Service Reach */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Official Coordinates Card */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#EADBCA] shadow-xs space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#1E1C1A]">
                {isRTL ? 'قنوات التواصل المباشرة' : 'Direct Communication Channels'}
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:dco.sa@hotmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#EADBCA] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#B87B3E] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#8C7E6F] uppercase tracking-wider block">
                      {isRTL ? 'البريد الإلكتروني الرسمي' : 'Official Email'}
                    </span>
                    <span className="text-sm font-semibold text-[#1E1C1A] group-hover:text-[#B87B3E] transition-colors">
                      dco.sa@hotmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+966582880099"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#EADBCA] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#B87B3E] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#8C7E6F] uppercase tracking-wider block">
                      {isRTL ? 'الهاتف المباشر' : 'Direct Phone Line'}
                    </span>
                    <span className="text-sm font-semibold text-[#1E1C1A] group-hover:text-[#B87B3E] transition-colors" dir="ltr">
                      +966 58 288 0099
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#FAF6EE] border border-[#EADBCA]">
                  <div className="w-11 h-11 rounded-lg bg-[#B87B3E] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#8C7E6F] uppercase tracking-wider block">
                      {isRTL ? 'المقر ونطاق التغطية' : 'Headquarters & Reach'}
                    </span>
                    <span className="text-sm font-semibold text-[#1E1C1A]">
                      {isRTL ? 'المملكة العربية السعودية (تغطية شاملة للمملكة والخليج)' : 'Kingdom of Saudi Arabia (Nationwide & GCC Reach)'}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#FAF6EE] border border-[#EADBCA]">
                  <div className="w-11 h-11 rounded-lg bg-[#B87B3E] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#8C7E6F] uppercase tracking-wider block">
                      {isRTL ? 'أوقات العمل' : 'Business Hours'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#1E1C1A]">
                      {isRTL ? 'الأحد - الخميس: 9:00 ص - 5:00 م' : 'Sunday – Thursday: 9:00 AM – 5:00 PM (AST)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Reach Visual Placeholder */}
            <div className="bg-[#1C1612] rounded-2xl p-7 text-white border border-[#C98B4B]/30 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#E0A868]">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                    {isRTL ? 'نطاق تقديم الخدمات' : 'SERVICE REACH MAP'}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2D221A] text-[#C98B4B] border border-[#C98B4B]/40">
                  KSA & GCC
                </span>
              </div>

              <h4 className="text-base font-serif font-bold text-white mb-2">
                {isRTL ? 'خدماتنا تغطي كافة مناطق المملكة وعن بعد' : 'Comprehensive Nationwide & Digital Coverage'}
              </h4>

              <p className="text-xs text-[#D4C3B2] leading-relaxed mb-4">
                {isRTL
                  ? 'بفضل منظومتنا للخدمات الإلكترونية، نخدم عملاءنا في الرياض، جدة، المنطقة الشرقية، وجميع مدن المملكة والخليج بكفاءة وسلاسة.'
                  : 'Through our secure cloud e-services and consulting advisory, we seamlessly support client organizations across Riyadh, Jeddah, Eastern Province, and the wider GCC.'}
              </p>

              {/* Regional Hub Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#C98B4B]/20 text-[11px]">
                <div className="flex items-center gap-1.5 text-[#E0A868]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E0A868]" />
                  <span>{isRTL ? 'الرياض (المقر الرئيسي)' : 'Riyadh (HQ)'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#E0A868]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E0A868]" />
                  <span>{isRTL ? 'المنطقة الغربية (جدة)' : 'Western Region'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#E0A868]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E0A868]" />
                  <span>{isRTL ? 'المنطقة الشرقية' : 'Eastern Province'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#E0A868]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E0A868]" />
                  <span>{isRTL ? 'الخدمات الإلكترونية السحابية' : 'Cloud E-Services'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#EADBCA] shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-semibold text-[#B87B3E] uppercase tracking-wider block mb-1">
                  {isRTL ? 'استمارة استفسار المؤسسات' : 'ORGANIZATION INQUIRY FORM'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1E1C1A]">
                  {isRTL ? 'طلب استشارة أو خدمة موارد بشرية' : 'Request an HR Consultation or E-Service'}
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FAF5EE] border border-[#EADBCA] flex items-center justify-center text-[#B87B3E] mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1E1C1A]">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6458] max-w-md mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                      }}
                      className="px-7 py-3 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors cursor-pointer"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4A433B] mb-1">
                        {isRTL ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4A433B] mb-1">
                        {isRTL ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4A433B] mb-1">
                        {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.phonePlaceholder}
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4A433B] mb-1">
                        {isRTL ? 'اسم المنشأة / الشركة' : 'Company / Organization'}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Category Selection */}
                  <div>
                    <label className="block text-xs font-medium text-[#4A433B] mb-1">
                      {isRTL ? 'الخدمة المطلوبة أو مجال الاستفسار' : 'Area of Interest / Service'}
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D7C6] text-[#1E1C1A] text-xs focus:outline-none focus:border-[#B87B3E] focus:bg-white transition-all cursor-pointer"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#4A433B] mb-1">
                      {isRTL ? 'تفاصيل الطلب أو التحدي المؤسسي *' : 'Project Details or Requirements *'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-md cursor-pointer disabled:opacity-70"
                    >
                      <span>{isSubmitting ? t.contact.sending : t.contact.sendMessage}</span>
                      <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
