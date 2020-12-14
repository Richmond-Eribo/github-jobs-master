module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        searchImage: "url('/src/img/backgroundImg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
