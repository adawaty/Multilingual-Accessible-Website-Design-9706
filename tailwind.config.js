/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        facebook: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1877f2',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accessible: {
          'high-contrast': '#000000',
          'medium-contrast': '#4a5568',
          'low-contrast': '#718096',
          'background': '#ffffff',
          'surface': '#f7fafc',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
        'chinese': ['Noto Sans TC', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'accessible-sm': ['16px', { lineHeight: '1.6' }],
        'accessible-base': ['18px', { lineHeight: '1.6' }],
        'accessible-lg': ['20px', { lineHeight: '1.6' }],
        'accessible-xl': ['24px', { lineHeight: '1.5' }],
        'accessible-2xl': ['32px', { lineHeight: '1.4' }],
        'accessible-3xl': ['40px', { lineHeight: '1.3' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}