/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FF0101',
        grayBorder: 'rgb(55 65 81)',
      },
      fontFamily: {
        inter: ['inter'],
      },
    },
  },
  plugins: [],
}
