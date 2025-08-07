/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['Lexend', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf7d7',
          100: '#faf1c4',
          200: '#f5e89e',
          300: '#efdb78',
          400: '#e8cc52',
          500: '#05324f',
          600: '#042944',
          700: '#032139',
          800: '#02192e',
          900: '#011223',
        },
        cream: {
          50: '#fefefe',
          100: '#fdf7d7',
          200: '#fcf4bf',
          300: '#faf1a7',
          400: '#f8ee8f',
          500: '#f6eb77',
          600: '#f4e85f',
          700: '#f2e547',
          800: '#f0e22f',
          900: '#eedf17',
        },
        gold: {
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#e8dcc4',
          300: '#dbc8a2',
          400: '#d4bb8c',
          500: '#c0ac78',
          600: '#b09968',
          700: '#9a8658',
          800: '#847348',
          900: '#6e6038',
        },
        dark: {
          bg: '#0f0f0f',
          surface: '#1a1a1a',
          border: '#2a2a2a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
