/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#E89b02', // Customize this color as needed
      },
      fontFamily: {
        body: ['Nunito', 'Sans', 'Roboto', 'Condensed'],
      },
    },
  },
  plugins: [],
}