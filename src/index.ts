import plugin from "tailwindcss/plugin";
import type { CSSRuleObject } from "tailwindcss/types/config";
import type { VarNameMapper, ThemeDeclaration } from "./types";

const defaultMapper = (key: string, i?: number) => key;

function expandColors(
  colors: Record<string, string>,
  paletteName: string,
  mapper: VarNameMapper = defaultMapper
) {
  return Object.keys(colors).reduce(
    (dict, key, i) => ({
      ...dict,
      [`--${paletteName}-${mapper(key, i)}`]: colors[key],
    }),
    {}
  );
}

interface PluginOptions {
  themes: Record<string, ThemeDeclaration>;
  utilityPrefix?: string;
  varNameMapper?: VarNameMapper;
}

export = plugin.withOptions<PluginOptions>(
  function ({
    utilityPrefix = "theme",
    themes = {},
    varNameMapper = defaultMapper,
  }) {
    return function ({ addUtilities }) {
      const utilities = Object.keys(themes).reduce<CSSRuleObject>(
        (utilities, theme) => {
          const themeVars = Object.keys(themes[theme]).reduce<
            Record<string, Record<string, string>>
          >((dict, variant) => {
            return {
              ...dict,
              ...expandColors(themes[theme][variant], variant, varNameMapper),
            };
          }, {});

          return {
            ...utilities,
            [`.${utilityPrefix}-${theme}`]: themeVars,
          };
        },
        {}
      );

      addUtilities(utilities);
    };
  },

  function ({
    utilityPrefix = "theme",
    themes = {},
    varNameMapper = defaultMapper,
  }) {
    const themeNames = Object.keys(themes);
    if (themeNames.length === 0) {
      return {};
    }

    const themesList = themeNames.map((t) => `${utilityPrefix}-${t}`);

    const theme = themes[themeNames[0]];
    const extendedColors = Object.keys(theme).reduce<
      Record<string, Record<string, string>>
    >((colors, variant) => {
      return {
        ...colors,
        [variant]: Object.keys(theme[variant]).reduce<Record<string, string>>(
          (acc, color, i) => {
            const varName = varNameMapper(color, i);
            return {
              ...acc,
              [varName]: `var(--${variant}-${varName})`,
            };
          },
          {}
        ),
      };
    }, {});

    const config = {
      theme: {
        extend: {
          colors: extendedColors,
        },
      },
      safelist: themesList,
    };

    return config;
  }
);
