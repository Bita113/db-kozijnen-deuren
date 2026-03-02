import React, { useState } from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/site/Navbar';
import HeroSection from '../components/site/HeroSection';
import ServicesSection from '../components/site/ServicesSection';
import WhyUsSection from '../components/site/WhyUsSection';
import AreaSection from '../components/site/AreaSection';
import ContactSection from '../components/site/ContactSection';
import Footer from '../components/site/Footer';
import PrivacyModal from '../components/site/PrivacyModal';
import AlgemeneVoorwaardenModal from '../components/site/AlgemeneVoorwaardenModal';

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <LanguageProvider>
      <SEOHead />
      <div className="min-h-screen bg-white antialiased">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <AreaSection />
        <ContactSection />
        <Footer onPrivacyClick={() => setPrivacyOpen(true)} onTermsClick={() => setTermsOpen(true)} />
        <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
        <AlgemeneVoorwaardenModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      </div>
    </LanguageProvider>
  );
}