/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
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
        grayBorder: 'rgb(31 41 55)',
      },
      fontFamily: {
        inter: ['inter'],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'backdrop-blur': (value) => {
            const cssBackdropFilterValue = [
              'var(--tw-backdrop-blur,)',
              'var(--tw-backdrop-brightness,)',
              'var(--tw-backdrop-contrast,)',
              'var(--tw-backdrop-grayscale,)',
              'var(--tw-backdrop-hue-rotate,)',
              'var(--tw-backdrop-invert,)',
              'var(--tw-backdrop-opacity,)',
              'var(--tw-backdrop-saturate,)',
              'var(--tw-backdrop-sepia,)',
            ].join(' ')

            return {
              '--tw-backdrop-blur': `blur(${value})`,
              '@defaults backdrop-filter': {},
              'backdrop-filter': cssBackdropFilterValue,
            }
          },
        },
        { values: theme('backdropBlur') }
      )
    }),
  ],
}
