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
    backgroundImage: {
      paraCuandoTitle: "url('../public/paraCuandoTitle.png')",
      loginDesktop: "url('../public/loginDesktopImg.png')",
      loginDeskTitle1: "url('../public/loginDeskTitle1.png')",
      loginDeskTitle2: "url('../public/loginDeskTitle2.png')",
      signinDesktopImg: "url('../public/signinDesktopImg.png')",
    },
  },
  plugins: [],
};
