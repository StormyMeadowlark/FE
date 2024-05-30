import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      Play: "Play",
      Urbanist: "Urbanist",
      Bungee: "Bungee",
    },
  
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@designbycode/tailwindcss-text-stroke"),
    require("@xpd/tailwind-3dtransforms"),
  ],
}

