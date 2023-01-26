const radixColors = require("@radix-ui/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
const tailwindThemePlugin = require("../dist");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/radix-colors/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },

  plugins: [
    tailwindThemePlugin({
      varNameMapper: (_, i) => String(i + 1),
      themes: {
        "gray-light": {
          primary: radixColors.gray,
          accent: radixColors.amber,
        },
        "gray-dark": {
          primary: radixColors.grayDark,
          accent: radixColors.amberDark,
        },
        "amber-light": {
          primary: radixColors.amber,
          accent: radixColors.red,
        },
        "amber-dark": {
          primary: radixColors.amberDark,
          accent: radixColors.redDark,
        },
      },
    }),
  ],
};
