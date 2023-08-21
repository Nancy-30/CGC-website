/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{

    },
    extend: {
      colors :{
        neavyBlue : '#013365',
        blackish : "#0d0d0d",
        lightGray : "#EBEDEA",
        lightBlue : "#50A5CA",
        darkBlue : "#051F40"
      }
    },
  },
  plugins: [],
}