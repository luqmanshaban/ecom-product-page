/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   'sans': ['Kumbh Sans']
    // },
    colors: {
      orange: '#FF4500',
      paleOrange: '#FFEBD6',
      veryDarkBlue: '#080C15',
      darkGrayishBlue: '#313D4A',
      grayishBlue: '#6E7E91',
      lightGrayishBlue: '#F2F7FC',
      white: '#FFFFFF',
      black: 'rgba(0, 0, 0, 0.75)'
    }
  },
  plugins: [],
}