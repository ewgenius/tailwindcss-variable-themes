# tailwindcss-variable-themes

TailwindCSS plugin for setting up multiple themes based on css variables

<img width="1582" alt="CleanShot 2023-01-27 at 00 09 22@2x" src="https://user-images.githubusercontent.com/827338/214940044-6b32f395-9f46-4ae5-b49c-cbc5f2cd190d.png">

## Examples

https://tailwindcss-variable-themes.vercel.app/custom ([code](apps/example/tailwind-custom.config.js))

https://tailwindcss-variable-themes.vercel.app/radix-colors ([code](apps/example/tailwind-radix.config.js))

https://tailwindcss-variable-themes.vercel.app/radix-semantic ([code](apps/example/tailwind-radix-semantic.config.js))

https://tailwindcss-variable-themes.vercel.app/tailwind-colors ([code](apps/example/tailwind-tailwind.config.js))

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
