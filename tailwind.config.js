/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        cream: '#f5f0e8',
        muted: '#888888',
        card: '#111111',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}