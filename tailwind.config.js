/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "sans-serif"],
      },
      animation: {
        'zooomIn': 'zooomIn .7s cubic-bezier(1,-0.01,0,1.01) forwards',
        'fadeOut': 'fadeOut .3s linear forwards',
      },
      keyframes: {
        'zooomIn': {
          '100%': { transform: 'scale(1.7)' },
        },
        'fadeOut': {
          '0%': { opacity: '0', transform: 'scale(.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'rfs': "url('/src/assets/images/rfs-promo.png')",
        'our-story': "url('/src/assets/images/our-story.jpg')",
      }
    },
  },
  plugins: [],
}