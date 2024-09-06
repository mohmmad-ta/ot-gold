/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        redRgb: {
          50: 'rgba(239,68,68,0.1)',
        }
      },
      backgroundColor: {
        'rgba-amber': 'rgba(245, 158, 11, 0.05)',
      },
    },

  },
  plugins: [],
}

