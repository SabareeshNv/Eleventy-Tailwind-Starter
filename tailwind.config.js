const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
