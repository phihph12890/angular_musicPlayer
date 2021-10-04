module.exports = {
  mode: 'jit',
  purge: [
    './src/app/client/**/*.{html,ts}',
    './src/app/client/components/**/*.{html,ts}',
    './src/index.html',
    './src/app/*.{html,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
