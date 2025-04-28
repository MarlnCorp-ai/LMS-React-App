/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
        colors: {
            "purple-grad" : "#DCC1F7"
        }
    },
  },
  plugins: [],
};