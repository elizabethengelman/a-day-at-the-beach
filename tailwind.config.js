/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        beach: "url(/images/beach.gif)",
      },
      animation: {
        brighten: "brightend .5s linear",
      },
      keyframes: {
        brighten: {
          "0%": { opacity: "80" },
          "100%": { opacity: "100" },
        },
      },
    },
  },
  plugins: [],
};
