/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue", "index.html"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

