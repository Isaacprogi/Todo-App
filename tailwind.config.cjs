/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito':['Press Start 2P','cursive']
      },
      gridTemplateColumns:{
        'large':'30vw auto 30vw',
        'medium':'60vw 40vw'

      }
    },
  },
  plugins: [],
}
