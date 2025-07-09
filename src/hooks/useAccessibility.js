import { useState, useEffect, useCallback } from 'react';

export const useAccessibility = () => {
  // Initialize state with proper defaults
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [adhdMode, setAdhdMode] = useState(false);
  const [eyeComfortMode, setEyeComfortMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedAdhdMode = localStorage.getItem('adhdMode') === 'true';
    const savedEyeComfortMode = localStorage.getItem('eyeComfortMode') === 'true';

    if (savedFontSize && ['small', 'medium', 'large', 'extra-large'].includes(savedFontSize)) {
      setFontSize(savedFontSize);
    }
    setHighContrast(savedHighContrast);
    setDarkMode(savedDarkMode);
    setAdhdMode(savedAdhdMode);
    setEyeComfortMode(savedEyeComfortMode);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply changes to DOM and localStorage
  const applySettings = useCallback(() => {
    console.log('Applying accessibility settings:', {
      fontSize,
      highContrast,
      darkMode,
      adhdMode,
      eyeComfortMode
    });

    // Apply font size
    const fontSizeMap = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'extra-large': '20px'
    };
    
    document.documentElement.style.setProperty('--base-font-size', fontSizeMap[fontSize]);
    document.documentElement.setAttribute('data-font-size', fontSize);

    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.body.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.body.classList.remove('high-contrast');
    }

    // Apply ADHD mode
    if (adhdMode) {
      document.documentElement.classList.add('adhd-mode');
      document.body.classList.add('adhd-mode');
    } else {
      document.documentElement.classList.remove('adhd-mode');
      document.body.classList.remove('adhd-mode');
    }

    // Apply eye comfort mode
    if (eyeComfortMode) {
      document.documentElement.classList.add('eye-comfort');
      document.body.classList.add('eye-comfort');
    } else {
      document.documentElement.classList.remove('eye-comfort');
      document.body.classList.remove('eye-comfort');
    }

    // Save to localStorage
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('highContrast', highContrast.toString());
    localStorage.setItem('darkMode', darkMode.toString());
    localStorage.setItem('adhdMode', adhdMode.toString());
    localStorage.setItem('eyeComfortMode', eyeComfortMode.toString());
  }, [fontSize, highContrast, darkMode, adhdMode, eyeComfortMode]);

  // Apply settings whenever they change
  useEffect(() => {
    applySettings();
  }, [applySettings]);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    const sizes = ['small', 'medium', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      const newSize = sizes[currentIndex + 1];
      console.log('Increasing font size to:', newSize);
      setFontSize(newSize);
    }
  }, [fontSize]);

  const decreaseFontSize = useCallback(() => {
    const sizes = ['small', 'medium', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      const newSize = sizes[currentIndex - 1];
      console.log('Decreasing font size to:', newSize);
      setFontSize(newSize);
    }
  }, [fontSize]);

  // Toggle functions
  const toggleHighContrast = useCallback(() => {
    const newValue = !highContrast;
    console.log('Toggling high contrast:', highContrast, '->', newValue);
    setHighContrast(newValue);
  }, [highContrast]);

  const toggleDarkMode = useCallback(() => {
    const newValue = !darkMode;
    console.log('Toggling dark mode:', darkMode, '->', newValue);
    setDarkMode(newValue);
  }, [darkMode]);

  const toggleAdhdMode = useCallback(() => {
    const newValue = !adhdMode;
    console.log('Toggling ADHD mode:', adhdMode, '->', newValue);
    setAdhdMode(newValue);
  }, [adhdMode]);

  const toggleEyeComfortMode = useCallback(() => {
    const newValue = !eyeComfortMode;
    console.log('Toggling eye comfort mode:', eyeComfortMode, '->', newValue);
    setEyeComfortMode(newValue);
  }, [eyeComfortMode]);

  return {
    fontSize,
    highContrast,
    darkMode,
    adhdMode,
    eyeComfortMode,
    reducedMotion,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleDarkMode,
    toggleAdhdMode,
    toggleEyeComfortMode,
    setFontSize
  };
};