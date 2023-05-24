/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#333333',
        light: '#ffffff',
        primary: '#04DDB2',
        grey: '#777777',
        lgrey: '#EEF0F2',
      },

      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1920'
      }
    },
  },
  plugins: [],
}

