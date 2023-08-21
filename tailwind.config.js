/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "75rem",
      },
    },
    extend: {
      colors: {
        primary: "#7040F4",
        secondary: "#3A2A68",
      },
      fontFamily: {
        "sans": ["Manrope", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
