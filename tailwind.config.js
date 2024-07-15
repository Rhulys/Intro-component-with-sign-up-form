/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redf' : '#FF7A7A',
        'greenf' : '#38CC8C',
        'bluef' : '#6055A5',
        'darkblue' : '#3E3C49',
        'grayishblue' : '#B9B6D3'
      },
      backgroundImage: {
        'desktop' : "url(/bg-intro-desktop.png)",
        'mobile' : "url(/bg-intro-mobile.png)"
      }
    },
  },
  plugins: [],
}