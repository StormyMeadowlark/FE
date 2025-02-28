import forms from "@tailwindcss/forms";
import textStroke from "@designbycode/tailwindcss-text-stroke";
import transforms from "@xpd/tailwind-3dtransforms";

export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideUp: "slideUp 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontFamily: {
        Play: ["Play", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
        Bungee: ["Bungee", "sans-serif"],
      },
      colors: {
        HEMgreen: "#00FF00",
        HEMgray: "#333333",
        silver: "#C0C0C0",
        dark: "#000000",
      },
      backgroundImage: {
        engine: "url('/src/assets/images/HEM-Automotive-Front-of-Building.jpg')",
        hexagons: "url('/src/assets/images/Hexagons.webp')",
      },
    },
  },
  plugins: [forms, textStroke, transforms],
};
