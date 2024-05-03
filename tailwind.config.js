const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'clr-blue': 'rgb(var(--clr-blue) / <alpha-value>)',
      'clr-green': 'rgb(var(--clr-green) / <alpha-value>)',
      'clr-sand': 'rgb(var(--clr-sand) / <alpha-value>)',
    },
    fontFamily: {
      'fnt-vazir-light': ['VazirLight', 'ui-sans-serif', 'system-ui'],
      'fnt-vazir-medium': ['VazirMedium', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      width: {
        '54': '13.5rem',
      }
    },
  },
  plugins: [],
}
