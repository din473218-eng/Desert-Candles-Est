import React, { useState } from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: initialSubject ? `Inquiring about ${initialSubject}.` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1C1A] tracking-tight mb-4">
              {t.contact.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#5E5448] leading-relaxed mb-8 max-w-md">
              {t.contact.description}
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:dco.sa@hotmail.com"
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#F3EFE8] flex items-center justify-center text-[#B87B3E] group-hover:bg-[#EADFCF] transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-[#383129] font-medium group-hover:text-[#B87B3E] transition-colors">
                  dco.sa@hotmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+966582880099"
                className="flex items-center gap-3.5 group"
                dir="ltr"
              >
                <div className="w-10 h-10 rounded-full bg-[#F3EFE8] flex items-center justify-center text-[#B87B3E] group-hover:bg-[#EADFCF] transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-[#383129] font-medium group-hover:text-[#B87B3E] transition-colors">
                  +966 58 288 0099
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Light Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 bg-white rounded-xl border border-[#E8DFC0] shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-[#F3EFE8] flex items-center justify-center text-[#B87B3E] mx-auto mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1E1C1A] mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6458] mb-6 max-w-sm mx-auto">
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors cursor-pointer"
                >
                  {t.contact.sendAnother}
                </button>
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
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] transition-colors shadow-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] transition-colors shadow-sm"
                  />
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] transition-colors shadow-sm"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.contact.companyPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] transition-colors shadow-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#E0D7C6] text-[#1E1C1A] placeholder-[#9E9182] text-xs focus:outline-none focus:border-[#B87B3E] transition-colors shadow-sm resize-none"
                  />
                </div>

                {/* Send Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-md text-xs font-semibold text-white bg-[#B87B3E] hover:bg-[#A36B32] transition-colors shadow-sm cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? t.contact.sending : t.contact.sendMessage}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
