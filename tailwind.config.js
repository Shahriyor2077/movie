/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#111827",
        },
        text: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
