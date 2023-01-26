const { fontFamily } = require("tailwindcss/defaultTheme");
const tailwindThemePlugin = require("tailwindcss-variable-themes");

/**
 * colors partially picked from https://vercel.com/design/color
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/custom/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },

  plugins: [
    tailwindThemePlugin({
      themes: {
        light: {
          geist: {
            foreground: "#000",
            background: "#fff",
            "accents-1": "#fafafa",
            "accents-2": "#eaeaea",
            "accents-3": "#999",
            "accents-4": "#888",
            "accents-5": "#666",
            "accents-6": "#444",
            "accents-7": "#333",
            "accents-8": "#111",
          },
        },
        dark: {
          geist: {
            foreground: "#fff",
            background: "#000",
            "accents-8": "#fafafa",
            "accents-7": "#eaeaea",
            "accents-6": "#999",
            "accents-5": "#888",
            "accents-4": "#666",
            "accents-3": "#444",
            "accents-2": "#333",
            "accents-1": "#111",
          },
        },
      },
    }),
  ],
};
