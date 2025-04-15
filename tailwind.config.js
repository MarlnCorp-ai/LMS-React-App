/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            "purple-grad" : "#b299ff"
        }
    },
  },
  plugins: [],
};


export default config;
