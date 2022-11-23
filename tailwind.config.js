const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    // To center a container
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        // 'sans': ['Rubik', ...defaultTheme.fontFamily.sans]
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
