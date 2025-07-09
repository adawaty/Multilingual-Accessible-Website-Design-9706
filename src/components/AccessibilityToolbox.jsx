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
  
  // Get display value for font size
  const getFontSizeDisplay = () => {
    const sizeMap = {
      'small': 'S',
      'medium': 'M',
      'large': 'L',
      'extra-large': 'XL'
    };
    return sizeMap[fontSize] || 'M';
  };

  // Simple toggle switch component
  const ToggleSwitch = ({ isOn, onToggle, label }) => (
    <button
      onClick={onToggle}
      type="button"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600 focus:ring-offset-2 ${
        isOn ? 'bg-facebook-600' : 'bg-gray-300 dark:bg-gray-600'
      }`}
      aria-pressed={isOn}
      aria-label={label}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <>
      {/* Skip to content button */}
      <button
        onClick={() => document.getElementById('main-content')?.focus()}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-facebook-600 text-white px-4 py-2 rounded-md font-medium z-50"
      >
        {t('accessibility.skip_to_content')}
      </button>

      {/* Accessibility toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-facebook-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-facebook-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-label="Accessibility settings"
      >
        <SafeIcon icon={isOpen ? FiX : FiSettings} className="w-6 h-6" />
      </button>

      {/* Accessibility drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 overflow-hidden"
          >
            <div className="p-4 bg-facebook-600 text-white">
              <h3 className="text-lg font-semibold">{t('accessibility.settings')}</h3>
              <p className="text-sm opacity-90">{t('accessibility.customize')}</p>
            </div>

            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Theme toggle */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={darkMode ? FiMoon : FiSun} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white font-medium">{t('accessibility.theme')}</span>
                </div>
                <ToggleSwitch 
                  isOn={darkMode} 
                  onToggle={toggleDarkMode} 
                  label="Toggle dark mode"
                />
              </div>

              {/* Font size controls */}
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <SafeIcon icon={FiType} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white font-medium">{t('accessibility.font_size')}</span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={fontSize === 'small'}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Decrease font size"
                  >
                    <SafeIcon icon={FiMinus} className="w-4 h-4" />
                  </button>
                  <span className="text-sm px-3 py-1 bg-facebook-100 dark:bg-facebook-900 text-facebook-800 dark:text-facebook-200 rounded font-bold min-w-[40px] text-center">
                    {getFontSizeDisplay()}
                  </span>
                  <button
                    onClick={increaseFontSize}
                    disabled={fontSize === 'extra-large'}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-facebook-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Increase font size"
                  >
                    <SafeIcon icon={FiPlus} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* High contrast mode */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiEye} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white font-medium">{t('accessibility.high_contrast')}</span>
                </div>
                <ToggleSwitch 
                  isOn={highContrast} 
                  onToggle={toggleHighContrast} 
                  label="Toggle high contrast"
                />
              </div>

              {/* ADHD mode */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiBrain} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white font-medium">{t('accessibility.adhd_mode')}</span>
                </div>
                <ToggleSwitch 
                  isOn={adhdMode} 
                  onToggle={toggleAdhdMode} 
                  label="Toggle ADHD mode"
                />
              </div>

              {/* Eye comfort mode */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiHeart} className="w-5 h-5 text-facebook-600 dark:text-facebook-400" />
                  <span className="text-gray-800 dark:text-white font-medium">{t('accessibility.eye_comfort')}</span>
                </div>
                <ToggleSwitch 
                  isOn={eyeComfortMode} 
                  onToggle={toggleEyeComfortMode} 
                  label="Toggle eye comfort mode"
                />
              </div>

              {/* Language selector */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-gray-800 dark:text-white font-medium">{t('accessibility.language')}</span>
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