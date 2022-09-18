/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#975BEC',
        darkPurple: '#7345B3',
      }
    },
  },
  plugins: [],
}
