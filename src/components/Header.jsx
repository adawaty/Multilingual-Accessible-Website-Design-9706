import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import LanguageSelector from './LanguageSelector';
import { useAccessibility } from '../hooks/useAccessibility';

const { FiMenu, FiX, FiMoon, FiSun } = FiIcons;

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useAccessibility();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'contact', href: '#contact' },
    { key: 'blog', href: '#blog' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400 rounded-md"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-facebook-500 to-facebook-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">Adawaty</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 dark:text-gray-200 hover:text-facebook-600 dark:hover:text-facebook-400 px-3 py-2 rounded-md text-accessible-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-facebook-600 dark:hover:text-facebook-400 focus:outline-none focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <SafeIcon icon={darkMode ? FiSun : FiMoon} className="w-5 h-5" />
            </button>
            
            {/* Language Selector - Desktop */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-facebook-600 dark:hover:text-facebook-400 focus:outline-none focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400"
              aria-label={t('accessibility.toggle_menu')}
              aria-expanded={isMenuOpen}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 dark:text-gray-200 hover:text-facebook-600 dark:hover:text-facebook-400 hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('accessibility.language')}
                  </span>
                  <LanguageSelector isCompact={true} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;