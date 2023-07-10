/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroService: "url('/Gpl-Fasting/assets/pexel-16cf111e.jpg')",
      },
    },
  },
  plugins: [],
};
