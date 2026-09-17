import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { OurApproachPage } from './pages/OurApproachPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { VisionMissionPage } from './pages/VisionMissionPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { isRTL } = useLanguage();

  return (
    <div
      className="min-h-screen bg-[#FAF8F5] text-[#1E1C1A] selection:bg-[#B87B3E] selection:text-white flex flex-col justify-between"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-approach" element={<OurApproachPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}
