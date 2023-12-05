/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        "green-rift": "#079992",
        "green-lime": "#7BED9F",
        "wild-watermelon": "#FF6B81",
        "green-light": "#B8E994",
        "orange-cust": "#FF7F50",
        "violet-cust": "#5352ED",
      },
    },
  },
  plugins: [],
});
