/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '673px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        light: {
          100: '#ffffff',
          200: '#F4F4F4',
          300: '#E9E9E9',
          400: '#757575',
        },
        dark: {
          100: '#3A3A3A',
          200: '#2D2D2D',
          300: '#1F1F1F',
          400: '#050505',
        },
        danger: {
          100: '#838383',
        },
        primary: {
          100: '#A445ED',
        },
      },
      boxShadow: {
        sm: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
    },
  },
  plugins: [],
}
