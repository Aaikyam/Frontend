/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/fonts.css"],
  theme: {
    extend: {
      fontFamily: {
        Tilt: ["Tilt Neon", "sans-serif"],
        Rose: ["Red Rose", "sans-serif"],
        SAMAN__: ["SAMAN__", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "@font-face": {
          fontFamily: "SAMAN__",
          src: `url('/src/fonts/SAMAN___.TTF') format('truetype')`, // Adjust the path accordingly
          fontWeight: "normal",
          fontStyle: "normal",
        },
      });
    },
  ],
};
