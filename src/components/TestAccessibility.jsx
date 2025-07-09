import React, { useEffect } from 'react';
import { useAccessibility } from '../hooks/useAccessibility';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiToggleLeft, FiToggleRight } = FiIcons;

// This is a test component to directly test accessibility toggles
const TestAccessibility = () => {
  const {
    fontSize,
    highContrast,
    darkMode,
    adhdMode,
    eyeComfortMode,
    toggleHighContrast,
    toggleDarkMode,
    toggleAdhdMode,
    toggleEyeComfortMode
  } = useAccessibility();

  // Log current state on mount and when it changes
  useEffect(() => {
    console.log('TestAccessibility component rendered with settings:', {
      fontSize,
      highContrast,
      darkMode,
      adhdMode,
      eyeComfortMode
    });
  }, [fontSize, highContrast, darkMode, adhdMode, eyeComfortMode]);

  // Direct toggle handlers with debug logging
  const handleToggleHighContrast = () => {
    console.log('Direct toggle high contrast, current value:', highContrast);
    toggleHighContrast();
  };

  const handleToggleDarkMode = () => {
    console.log('Direct toggle dark mode, current value:', darkMode);
    toggleDarkMode();
  };

  const handleToggleAdhdMode = () => {
    console.log('Direct toggle ADHD mode, current value:', adhdMode);
    toggleAdhdMode();
  };

  const handleToggleEyeComfortMode = () => {
    console.log('Direct toggle eye comfort, current value:', eyeComfortMode);
    toggleEyeComfortMode();
  };

  return (
    <div className="fixed top-20 left-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold mb-4">Accessibility Test Panel</h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span>High Contrast: {highContrast ? 'ON' : 'OFF'}</span>
          <button
            onClick={handleToggleHighContrast}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <SafeIcon icon={highContrast ? FiToggleRight : FiToggleLeft} className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Dark Mode: {darkMode ? 'ON' : 'OFF'}</span>
          <button
            onClick={handleToggleDarkMode}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <SafeIcon icon={darkMode ? FiToggleRight : FiToggleLeft} className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span>ADHD Mode: {adhdMode ? 'ON' : 'OFF'}</span>
          <button
            onClick={handleToggleAdhdMode}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <SafeIcon icon={adhdMode ? FiToggleRight : FiToggleLeft} className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Eye Comfort: {eyeComfortMode ? 'ON' : 'OFF'}</span>
          <button
            onClick={handleToggleEyeComfortMode}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <SafeIcon icon={eyeComfortMode ? FiToggleRight : FiToggleLeft} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestAccessibility;