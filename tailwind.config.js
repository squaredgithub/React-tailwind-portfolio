/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#008080",
        lightText: "#000000",
        boxBg: "#000000",
        designColor: "#000000",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #ffffff, -10px -10px 19px #ffffff",
      },
    },
  },
  plugins: [],
};