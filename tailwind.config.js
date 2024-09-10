module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@designbycode/tailwindcss-text-stroke"),
    require("@xpd/tailwind-3dtransforms"),
  ],
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
};
