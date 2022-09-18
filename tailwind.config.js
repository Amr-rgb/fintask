/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'circle-border':'#FC4F24',
        'circle-bg':'#FC4F2414'
      }
    },
  },
  plugins: [],
}
