/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      lightGrey: 'hsl(217, 12%, 63%)',
      mediumGrey: 'hsl(216, 12%, 54%)',
      darkBlue: 'hsl(213, 19%, 18%)',
      veryDarkBlue: 'hsl(216, 12%, 8%)',
      primary: 'hsl(213, 23%, 12%)',
    },
    fontFamily: {
      'primary': ['Overpass'],
    },
    extend: {},
  },
  plugins: [],
}
