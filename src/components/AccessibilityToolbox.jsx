import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAccessibility } from '../hooks/useAccessibility';
import LanguageSelector from './LanguageSelector';

const { 
  FiType, 
  FiEye, 
  FiMinus, 
  FiPlus, 
  FiMoon, 
  FiSun, 
  FiSettings,
  FiX,
  FiBrain,
  FiHeart
} = FiIcons;

const AccessibilityToolbox = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const {
    fontSize,
    highContrast,
    darkMode,
    adhdMode,
    eyeComfortMode,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleDarkMode,
    toggleAdhdMode,
    toggleEyeComfortMode
  } = useAccessibility();

  return (
    <>
      {/* Skip to content button - always visible on focus */}
      <button
        onClick={() => document.getElementById('main-content')?.focus()}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-facebook-600 dark:bg-facebook-500 text-white px-4 py-2 rounded-md font-medium z-50"
      >
        {t('accessibility.skip_to_content')}
      </button>

      {/* Accessibility toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-facebook-600 dark:bg-facebook-500 text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-label="Accessibility settings"
      >
        <SafeIcon icon={isOpen ? FiX : FiSettings} className="w-6 h-6" />
      </button>

      {/* Accessibility drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 w-80 overflow-hidden"
          >
            <div className="p-4 bg-facebook-600 dark:bg-facebook-500 text-white">
              <h3 className="text-lg font-semibold">{t('accessibility.settings')}</h3>
              <p className="text-sm opacity-90">{t('accessibility.customize')}</p>
            </div>

            <div className="p-4 space-y-4">
              {/* Theme toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={darkMode ? FiMoon : FiSun} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white">{t('accessibility.theme')}</span>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600 focus:ring-offset-2 ${
                    darkMode ? 'bg-facebook-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Font size controls */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <SafeIcon icon={FiType} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white">{t('accessibility.font_size')}</span>
                </div>
                <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600"
                    aria-label="Decrease font size"
                  >
                    <SafeIcon icon={FiMinus} className="w-4 h-4 text-gray-800 dark:text-white" />
                  </button>
                  <span className="text-sm px-3 py-1 bg-white dark:bg-gray-800 rounded shadow text-gray-800 dark:text-white">
                    {fontSize}
                  </span>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600"
                    aria-label="Increase font size"
                  >
                    <SafeIcon icon={FiPlus} className="w-4 h-4 text-gray-800 dark:text-white" />
                  </button>
                </div>
              </div>

              {/* High contrast mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiEye} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white">{t('accessibility.high_contrast')}</span>
                </div>
                <button
                  onClick={toggleHighContrast}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600 focus:ring-offset-2 ${
                    highContrast ? 'bg-facebook-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* ADHD mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiBrain} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white">{t('accessibility.adhd_mode')}</span>
                </div>
                <button
                  onClick={toggleAdhdMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600 focus:ring-offset-2 ${
                    adhdMode ? 'bg-facebook-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      adhdMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Eye comfort mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiHeart} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white">{t('accessibility.eye_comfort')}</span>
                </div>
                <button
                  onClick={toggleEyeComfortMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600 focus:ring-offset-2 ${
                    eyeComfortMode ? 'bg-facebook-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      eyeComfortMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Language selector */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-gray-800 dark:text-white">{t('accessibility.language')}</span>
                </div>
                <LanguageSelector isCompact={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityToolbox;