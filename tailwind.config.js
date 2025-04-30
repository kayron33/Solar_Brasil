/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c2eb',
          300: '#66a3e0',
          400: '#3385d6',
          500: '#0A6EBD', // Primary blue
          600: '#0958a0',
          700: '#074283',
          800: '#052c66',
          900: '#021233',
        },
        secondary: {
          50: '#fff9e6',
          100: '#fff4cc',
          200: '#ffe999',
          300: '#ffdf66',
          400: '#ffd433',
          500: '#FFD600', // Solar yellow
          600: '#ccab00',
          700: '#998100',
          800: '#665600',
          900: '#332b00',
        },
        accent: {
          50: '#e8f5e9',
          100: '#d2ebd3',
          200: '#a5d6a7',
          300: '#77c27b',
          400: '#4caf50', // Green
          500: '#4CAF50',
          600: '#3d8c40',
          700: '#2e6930',
          800: '#1e4620',
          900: '#0f2310',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg')",
        'benefits-pattern': "url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg')",
      }
    },
  },
  plugins: [],
};