/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '920px',
        'xl': '650px',
        'xs': '320px',
      },
    },
  },
  plugins: [],
}

