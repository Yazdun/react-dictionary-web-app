/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          100: '#ffffff',
          200: '#050505',
          300: '#3A3A3A',
          400: '#838383',
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
    },
  },
  plugins: [],
}
