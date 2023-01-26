import plugin from "tailwindcss/plugin";
import type { CSSRuleObject } from "tailwindcss/types/config";
import type { VarNameMapper, ThemeDeclaration } from "./types";

export const defaultMapper: VarNameMapper = (key: string) => key;

export const defaultUtilityPrefix = "theme";

export function expandColors(
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

export function prepareUtilities({
  themes,
  varNameMapper,
  utilityPrefix,
}: Required<PluginOptions>): CSSRuleObject {
  return Object.keys(themes).reduce<CSSRuleObject>((utilities, theme) => {
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
  }, {});
}

export function prepareColors(
  theme: ThemeDeclaration,
  { varNameMapper }: Required<PluginOptions>
): Record<string, Record<string, string>> {
  return Object.keys(theme).reduce<Record<string, Record<string, string>>>(
    (colors, variant) => {
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
    },
    {}
  );
}

export interface PluginOptions {
  themes: Record<string, ThemeDeclaration>;
  utilityPrefix?: string;
  varNameMapper?: VarNameMapper;
}

export const variableThemesPlugin = plugin.withOptions<PluginOptions>(
  function ({
    themes,
    utilityPrefix = defaultUtilityPrefix,
    varNameMapper = defaultMapper,
  }) {
    return function ({ addUtilities }) {
      const utilities = prepareUtilities({
        themes,
        utilityPrefix,
        varNameMapper,
      });

      addUtilities(utilities);
    };
  },

  function ({
    themes,
    utilityPrefix = defaultUtilityPrefix,
    varNameMapper = defaultMapper,
  }) {
    const themeNames = Object.keys(themes);
    if (themeNames.length === 0) {
      return {};
    }

    const themesList = themeNames.map((t) => `${utilityPrefix}-${t}`);

    // using first theme declaration as default one
    const theme = themes[themeNames[0]];
    const extendedColors = prepareColors(theme, {
      themes,
      utilityPrefix,
      varNameMapper,
    });

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
