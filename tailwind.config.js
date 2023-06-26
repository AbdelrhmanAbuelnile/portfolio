/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // 'primary': '#1E1E1E',
      },screens: {
        'xs': '350px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      flex: {
        '2': '2 2 0%'
      }
      // backgroundImage: {
      //   'header-waves': 'url("../assets/imgs/header-waves.svg")',
      // }
    },
  },
  plugins: [],
}

