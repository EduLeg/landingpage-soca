/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        '7DB9FF': '#7DB9FF',
      }
    }
  },
  plugins: [],
}
