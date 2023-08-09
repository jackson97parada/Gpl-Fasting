/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroService: "url('/Gpl-Fasting/assets/pexel-16cf111e.jpg')",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      avantGarde: ["ITC Avant Garde Gothic", "sans-serif"],
      futura: ["Futura", "sans-serif"],
      futuraLigth: ["Futura ligth", "sans-serif"],
    },
  },
  plugins: [],
};
