const radixColors = require("@radix-ui/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
const tailwindThemePlugin = require("tailwindcss-variable-themes");

/**
 * colors partially picked from https://vercel.com/design/color
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/radix-semantic/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },

  plugins: [
    tailwindThemePlugin({
      // colors guide from Radix-UI
      // https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
      varNameMapper: (_, i) =>
        [
          "app-bg", //               1  - App background
          "subtle-bg", //            2  - Subtle background
          "ui", //                   3  - UI element background
          "ui-hover", //             4  - Hovered UI element background
          "ui-active", //            5  - Active / Selected UI element background
          "border-subtle", //        6  - Subtle borders and separators
          "border", //               7  - UI element border and focus rings
          "border-hover", //         8  - Hovered UI element border
          "solid", //                9  - Solid backgrounds
          "solid-hover", //          10 - Hovered solid backgrounds
          "foreground-secondary", // 11 - Low-contrast text
          "foreground-primary", //   12 - High-contrast text
        ][i],

      themes: {
        "gray-light": {
          primary: radixColors.gray,
          accent: radixColors.red,
        },

        "gray-dark": {
          primary: radixColors.grayDark,
          accent: radixColors.redDark,
        },
      },
    }),
  ],
};
