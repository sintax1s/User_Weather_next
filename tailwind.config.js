/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        'xxxl': '1300px',
        'xxl+': '1080px',
        'xxl': '920px',
        'xl': '650px',
        'xs': '0px',
      },
    },
  },
  plugins: [],
}

