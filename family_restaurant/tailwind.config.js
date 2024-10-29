/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./family_restaurant/build/index.html','./family_restaurant/build/js/main.js'],
  theme: {
    extend: {
      colors:{
        'first':'#f8cf16',
        'second':'#1c2233',
        'third':'#151d33',
      },
      keyframes:{
        'open-menu':{
          '0%'   : {transform:'scaleY(0)'},
          '80%'  : {transform:'scaleY(1.2)'},
          '100%' : {transform:'scaleY(1)'},
        }
      },
      fontFamily:{
        Yekan:'Yekan',
      },
    },
  },
  plugins: [],
}

