/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroService: "url('./src/assets/imagesServices/pexel.jpg')",
      },
    },
  },
  plugins: [],
};
