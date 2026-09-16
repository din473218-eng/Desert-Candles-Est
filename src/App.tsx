import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreCapabilities } from './components/CoreCapabilities';
import { AboutSection } from './components/AboutSection';
import { ServicesShowcase } from './components/ServicesShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurApproachJourney } from './components/OurApproachJourney';
import { TechAndVisionRow } from './components/TechAndVisionRow';
import { ImpactSection } from './components/ImpactSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function MainContent() {
  const { isRTL } = useLanguage();
  const [inquirySubject, setInquirySubject] = useState<string>('');

  const scrollToContact = (subject?: string) => {
    if (subject) {
      setInquirySubject(subject);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToApproach = () => {
    const el = document.getElementById('approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1C1A] selection:bg-[#B87B3E] selection:text-white">
      {/* Light Ivory Sticky Header */}
      <Header onOpenContact={() => scrollToContact(isRTL ? 'استفسار عام' : 'General Inquiry')} />

      {/* Hero Section: Golden Hour Corporate Skyline & Executive Silhouettes */}
      <HeroSection
        onTalkToExperts={() => scrollToContact(isRTL ? 'استشارة الخبراء' : 'Expert Consultation')}
        onExploreServices={scrollToServices}
      />

      {/* Core Capabilities: 4-Column Ivory Divider Row */}
      <CoreCapabilities onSelectCapability={(cap) => scrollToContact(`${isRTL ? 'المجال' : 'Capability'}: ${cap}`)} />

      {/* About Section: Glowing Network Image + Human Capital Narrative */}
      <AboutSection onDiscoverApproach={scrollToApproach} />

      {/* Services Showcase: 6 Clean White Cards on Light Ivory Background */}
      <ServicesShowcase onSelectServiceForConsultation={(svc) => scrollToContact(`${isRTL ? 'الخدمة' : 'Service'}: ${svc}`)} />

      {/* Why Choose Us: Rich Desert Dark Brown Section with 2x2 Pillars */}
      <WhyChooseUs />

      {/* Our Approach: Horizontal 4-Step Process Bar with Arrows */}
      <OurApproachJourney />

      {/* Tech & Vision: Executive Image + 4 Cards (Tech + HR, Vision, Mission, Transform) */}
      <TechAndVisionRow />

      {/* The Impact We Create: 4 Minimalist Icons */}
      <ImpactSection />

      {/* Ready to Transform Your HR: Dark Warm Brown CTA Banner */}
      <FinalCTA
        onGetInTouch={() => scrollToContact(isRTL ? 'تحول الموارد البشرية' : 'HR Transformation')}
        onExploreServices={scrollToServices}
      />

      {/* Let's Start a Conversation: Contact Section with Verified Info & Form */}
      <ContactSection key={`${inquirySubject}-${isRTL}`} initialSubject={inquirySubject} />

      {/* Dark Luxury Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
