/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
        colors: {
            "purple-grad" : "#b299ff"
        }
    },
  },
  plugins: [],
};