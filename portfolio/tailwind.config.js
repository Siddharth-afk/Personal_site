/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['Belanosima', 'Poppins'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Roboto', 'SFMono-Regular'],
    }
  },
  plugins: [],
}

