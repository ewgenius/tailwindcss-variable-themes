# tailwindcss-variable-themes

TailwindCSS plugin for setting up multiple themes based on css variables

## Examples

https://tailwindcss-variable-themes.ewgenius.me/custom ([code](apps/example/tailwind-custom.config.js))

https://tailwindcss-variable-themes.ewgenius.me/radix-colors ([code](apps/example/tailwind-radix.config.js))

https://tailwindcss-variable-themes.ewgenius.me/radix-semantic ([code](apps/example/tailwind-radix-semantic.config.js))

https://tailwindcss-variable-themes.ewgenius.me/tailwind-colors ([code](apps/example/tailwind-tailwind.config.js))

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-variable-themes
```

Then add the plugin to your tailwind.config.js file:

```js
const tailwindThemePlugin = require("tailwindcss-variable-themes");

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    tailwindThemePlugin({
      themes: {
        light: {
          primary: {
            foreground: "#000",
            background: "#fff",
            // ...
          },
          accent: {
            // ...
          },
        },

        dark: {
          // ...
        },
      },
    }),
  ],
};
```

Add theme class to the root of your application:

```html
<body class="theme-light">
  <!-- ... -->
</body>
```

## Configuration

### `themes: object` (required)

Dictionary with theme declarations

```js
themes: {
  // light theme
  light: {
    // primary palette
    primary: {
      // primary palette colors
      foreground: "#000",
      background: "#fff",
      // ...
    },
    // accent palette
    accent: {
      // ...
    },
  },

  dark: {
    primary: {
      foreground: "#fff",
      background: "#000",
      // ...
    }
    // ...
  },
},
```

### `utilityPrefix: string` (optional, default = `"theme"`)

Prefix for generated utility classes

Theme, from previous example will generate following tailwind classes for setting up theme:

```css
.theme-light {
  --primary-foreground: #000;
  --primary-background: #fff;
  /* ... */
}

.theme-dark {
  --primary-foreground: #fff;
  --primary-background: #000;
  /* ... */
}
```

### `varNameMapper: (key: string, i?: number) => string` (optional, default = `(key) => key`)

You can specify custom mapper, in case if you need more control over generated variable names
