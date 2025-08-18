/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      extraSm: "300px",
      xs: "440px",
      sm: "640px",
      md: "768px",
      smallLg: "900px",
      lg: "1100px",
      xl: "1250px",
      "2xl": "1440px",
      "3xl": "1533px",
    },
    extend: {},
  },
  plugins: [],
}
