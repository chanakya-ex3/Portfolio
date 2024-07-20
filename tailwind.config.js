
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      colors: {
        'primary-light': '#000000',
        'primary-dark': '#ffffff',
        'secondary-light': '#ffffff',
        'secondary-dark': '#000000',
        'purple': '#6D28D9',
        'blue-light':'#3B82F6',
        'blue-dark':'#1E40AF'
      },
    },
  },
  plugins:[]
}