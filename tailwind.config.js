/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Source-Sans-Pro", "ui-sans-serif"],
      serif: ["Georgia", "ui-serif"],
      mono: ["Monaco", "ui-monospace"],
    },
    extend: {
      colors: {
        grayy: "#333333",
        whitee: "#A1A1A1",
        blackk: "#18191a",
        a: "#fc0345",
        b: "#fc03b1",
        c: "#4a03fc",
      },
    },
    fontSize: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
  },
  plugins: [],
};
