const tailwindColors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
const tailwindThemePlugin = require("../dist");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/tailwind-colors/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },

  plugins: [
    tailwindThemePlugin({
      themes: {
        "gray-light": {
          primary: tailwindColors.gray,
        },
        "gray-dark": {
          primary: {
            50: tailwindColors.gray["900"],
            100: tailwindColors.gray["800"],
            200: tailwindColors.gray["700"],
            300: tailwindColors.gray["600"],
            400: tailwindColors.gray["500"],
            500: tailwindColors.gray["400"],
            600: tailwindColors.gray["300"],
            700: tailwindColors.gray["200"],
            800: tailwindColors.gray["100"],
            900: tailwindColors.gray["50"],
          },
        },
        "amber-light": {
          primary: tailwindColors.amber,
        },
        "amber-dark": {
          primary: {
            50: tailwindColors.amber["900"],
            100: tailwindColors.amber["800"],
            200: tailwindColors.amber["700"],
            300: tailwindColors.amber["600"],
            400: tailwindColors.amber["500"],
            500: tailwindColors.amber["400"],
            600: tailwindColors.amber["300"],
            700: tailwindColors.amber["200"],
            800: tailwindColors.amber["100"],
            900: tailwindColors.amber["50"],
          },
        },
      },
    }),
  ],
};
