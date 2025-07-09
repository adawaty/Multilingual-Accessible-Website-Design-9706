import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useAccessibility } from './hooks/useAccessibility';
import './i18n/config';

function App() {
  const { i18n } = useTranslation();
  const { fontSize, highContrast } = useAccessibility();

  useEffect(() => {
    // Apply accessibility settings to document
    document.documentElement.setAttribute('data-font-size', fontSize);
    document.documentElement.setAttribute('data-high-contrast', highContrast.toString());
    
    // Set language direction
    const isRtl = i18n.language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [fontSize, highContrast, i18n.language]);

  return (
    <div className="min-h-screen bg-white">
      <AccessibilityToolbar />
      <Header />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;