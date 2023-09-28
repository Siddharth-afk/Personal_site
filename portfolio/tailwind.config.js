/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'reddish-pink': '#db6363',
        'dark-reddish-pink': '#9f4141',
      },
      keyframes:{
        shake: {
          '0%': {transform: 'rotate(0deg)'},
          '25%': {transform: 'rotate(-10deg)'},
          '50%': {transform: 'rotate(0deg)'},
          '75%': {transform: 'rotate(20deg)'},
          '100%': {transform: 'rotate(0deg)'}
        }
      },
      animation:{
        shake: 'shake 1s linear infinite'
      }
    },
    fontFamily:{
      'sans': ['Belanosima', 'Poppins'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Roboto', 'SFMono-Regular'],
    }
  },
  plugins: [],
}

