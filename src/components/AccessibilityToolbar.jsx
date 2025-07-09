import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAccessibility } from '../hooks/useAccessibility';

const { FiType, FiEye, FiMinus, FiPlus } = FiIcons;

const AccessibilityToolbar = () => {
  const { t } = useTranslation();
  const {
    fontSize,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast
  } = useAccessibility();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-facebook-600 text-white py-2 px-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => document.getElementById('main-content')?.focus()}
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-facebook-600 px-4 py-2 rounded-md font-medium"
        >
          {t('accessibility.skip_to_content')}
        </button>
        
        <div className="flex items-center space-x-4 ml-auto">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{t('accessibility.font_size')}:</span>
            <button
              onClick={decreaseFontSize}
              className="p-2 hover:bg-facebook-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Decrease font size"
            >
              <SafeIcon icon={FiMinus} className="w-4 h-4" />
            </button>
            <span className="text-sm px-2 py-1 bg-facebook-700 rounded">{fontSize}</span>
            <button
              onClick={increaseFontSize}
              className="p-2 hover:bg-facebook-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Increase font size"
            >
              <SafeIcon icon={FiPlus} className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={toggleHighContrast}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
              highContrast ? 'bg-white text-facebook-600' : 'hover:bg-facebook-700'
            }`}
            aria-label={t('accessibility.high_contrast')}
            aria-pressed={highContrast}
          >
            <SafeIcon icon={FiEye} className="w-4 h-4" />
            <span className="text-sm font-medium">{t('accessibility.high_contrast')}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AccessibilityToolbar;