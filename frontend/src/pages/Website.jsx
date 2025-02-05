import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import ServicesSection from '../components/ServicesSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';
import FAQ from '../components/FAQ';
import Notification from '../components/Notification'
function Website() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutUs />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
      <NewsletterSection />
      <FAQ/>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default Website;
