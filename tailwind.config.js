const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
        'custom-gray': '#262626',
        'light-gray': '#2d2d2d',
        'purple': '#a17ae4',
      },
      fontFamily: {
        'jakarta-sans': ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

