/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/fonts.css"],
  theme: {
    extend: {
      fontFamily: {
        Tilt: ["Tilt Neon", "sans-serif"],
        Rose: ["Red Rose", "sans-serif"],
        SAMAN__: ["SAMAN__", "sans-serif"],
        Raleway:["Raleway","sans-serif"],
        Poppins:["Poppins","sans-serif"]
      },
    },
  },
  plugins: [

  ],
};
