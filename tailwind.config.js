/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      primary_black: '#000000',
      primary_blackLight: '#1A1E2E',
      blue: '#1B4DB1',
      white: '#ffffff',
    },
    textColor: {
      white: '#FFFFFF',
      primary_blue: '#1B4DB1',
      primary_black: '#000000',
    },
    extend: {
      colors: {
        primaryblue: '#1fb6ff',
        primaryyellow: '#F3F243',
        primarypink: '#FF64BC',
        primaryblack: '#000000',
        primaryblackLight: '#1A1E2E',
        primarygrayDark: '#6E6A6C',
        primarygray: '#A7A6A7',
        primarygrayLight: '#D9D9D9',
        primarygrayLighter: '#F8F7FA',
        secondaryred: '#EF3F47',
      },
    },
  },
  plugins: [],
};
