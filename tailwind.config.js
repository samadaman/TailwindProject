/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('/images/R\ 1.png')",
      }
    },
  },
  plugins: [],
}

