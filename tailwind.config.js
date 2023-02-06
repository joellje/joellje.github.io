/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif"],
      serif: ["Georgia", "ui-serif"],
      mono: ["Monaco", "ui-monospace"],
    },
    extend: {
      colors: { grayy: "#333333", whitee: "#A1A1A1", blackk: "#313638"},
    },
  },
  plugins: [],
};
