/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true,
      padding:'16px',
    },
    extend: {
      colors: {
        cyan: '#094067',
        dark: '#5f6c7b',
        biru: '#3da9fc',
        merah: '#ef4565',
      },
      screens: {  
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

