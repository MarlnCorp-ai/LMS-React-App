/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
        colors: {
            "purple-grad" : "#E5D1F9"
        }
    },
  },
  plugins: [],
};