const radixColors = require("@radix-ui/colors");
const tailwindThemePlugin = require("../../dist");

/**
 * colors guide: https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
 *
 * bg
 * 1  - App background
 * 2  - Subtle background
 *
 * bg
 * 3  - UI element background
 * 4  - Hovered UI element background
 * 5  - Active / Selected UI element background
 *
 * borders
 * 6  - Subtle borders and separators
 * 7  - UI element border and focus rings
 * 8  - Hovered UI element border
 *
 * solid
 * 9  - Solid backgrounds
 * 10 - Hovered solid backgrounds
 *
 * text
 * 11 - Low-contrast text
 * 12 - High-contrast text
 *
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./examples/radix-colors/index.html"],
  darkMode: "class",
  theme: {
    extend: {},
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
