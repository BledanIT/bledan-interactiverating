/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        highlight: 'hsl(25, 97%, 53%)',
        textMain: 'hsl(0, 0%, 100%)',
        textSecondary: 'hsl(217, 12%, 63%)',
        bgSecondary: 'hsl(213, 19%, 18%)',
        bgMain: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        overpass: ['Overpass','sans-serif'],
      },
    },
  },
  plugins: [],
}

