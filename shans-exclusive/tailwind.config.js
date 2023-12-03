/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  
  theme: {
    extend: {
      colors: {
        'saffron': { DEFAULT: '#EEC65E', 100: '#3c2d06', 200: '#785a0d', 300: '#b48613', 400: '#e8b021', 500: '#eec65e', 600: '#f1d17e', 700: '#f5dc9e', 800: '#f8e8be', 900: '#fcf3df' }, 
        'bronze': { DEFAULT: '#CC7F29', 100: '#291a08', 200: '#523310', 300: '#7b4d18', 400: '#a46620', 500: '#cc7f29', 600: '#dc9a4e', 700: '#e5b37a', 800: '#edcca6', 900: '#f6e6d3' }, 
        'alloy_orange': { DEFAULT: '#BE6513', 100: '#261404', 200: '#4c2908', 300: '#723d0b', 400: '#98510f', 500: '#be6513', 600: '#e98324', 700: '#efa25b', 800: '#f4c191', 900: '#fae0c8' }, 
        'white': { DEFAULT: '#FBFCFD', 100: '#223243', 200: '#446586', 300: '#7597ba', 400: '#b8cadb', 500: '#fbfcfd', 600: '#fcfdfe', 700: '#fdfdfe', 800: '#fefefe', 900: '#fefeff' } }
      
    },
  },
  plugins: [],
}

