import { useState, useEffect } from 'react';

export const useAccessibility = () => {
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('fontSize') || 'medium';
  });
  
  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('highContrast') === 'true';
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [adhdMode, setAdhdMode] = useState(() => {
    return localStorage.getItem('adhdMode') === 'true';
  });

  const [eyeComfortMode, setEyeComfortMode] = useState(() => {
    return localStorage.getItem('eyeComfortMode') === 'true';
  });

  const [reducedMotion, setReducedMotion] = useState(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('highContrast', highContrast.toString());
    document.documentElement.setAttribute('data-high-contrast', highContrast.toString());
  }, [highContrast]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.setAttribute('data-dark-mode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('adhdMode', adhdMode.toString());
    document.documentElement.setAttribute('data-adhd-mode', adhdMode.toString());
  }, [adhdMode]);

  useEffect(() => {
    localStorage.setItem('eyeComfortMode', eyeComfortMode.toString());
    document.documentElement.setAttribute('data-eye-comfort', eyeComfortMode.toString());
  }, [eyeComfortMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const increaseFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleAdhdMode = () => {
    setAdhdMode(!adhdMode);
  };

  const toggleEyeComfortMode = () => {
    setEyeComfortMode(!eyeComfortMode);
  };

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