/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        primaryblue: '#1B4DB1',
        primaryyellow: '#F3F243',
        primarypink: '#FF64BC',
        primaryblack: '#000000',
        primaryblackLight: '#1A1E2E',
        primarygrayDark: '#6E6A6C',
        primarygray: '#A7A6A7',
        primarygrayLight: '#D9D9D9',
        primarygrayLighter: '#F8F7FA',
        secondaryred: '#EF3F47',
        borderGray: '#7D7D7D',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        paraCuandoTitle: "url('../public/paraCuandoTitle.png')",
        paraCuandoTitleWhite: "url('../public/paraCuandoTitleWhite.png')",
        loginDesktop: "url('../public/loginDesktopImg.png')",
        loginDeskTitle1: "url('../public/loginDeskTitle1.png')",
        loginDeskTitle2: "url('../public/loginDeskTitle2.png')",
        signinDesktopImg: "url('../public/signinDesktopImg.png')",
        loginDeskTitle1Small: "url('../public/loginDeskTitle1Small.png')",
        //* HOME
        homeImage: "url('../public/homeImage.png')",
        homeImageMobile: "url('../public/homeImageMobile.png')",
        //* BRANDS
        brandsImage: "url('../public/brandsImage.png')",
        brandsImageMobile: "url('../public/brandsImageMobile.png')",
        //* ARTISTS
        artistsImage: "url('../public/artistsImage.png')",
        //* TOURNAMENTS
        tournamentsImage: "url('../public/tournamentsImage.png')",
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
});
