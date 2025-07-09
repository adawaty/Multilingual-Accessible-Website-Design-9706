import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import LanguageSelector from './LanguageSelector';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'contact', href: '#contact' },
    { key: 'blog', href: '#blog' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-16 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center focus:outline-none focus:ring-2 focus:ring-facebook-500 rounded-md">
              <div className="w-10 h-10 bg-gradient-to-r from-facebook-500 to-facebook-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Adawaty</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 hover:text-facebook-600 px-3 py-2 rounded-md text-accessible-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-500"
                >
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-facebook-600 focus:outline-none focus:ring-2 focus:ring-facebook-500"
              aria-label={t('accessibility.toggle_menu')}
              aria-expanded={isMenuOpen}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 pt-4 pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-facebook-600 block px-3 py-2 rounded-md text-accessible-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-500"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;