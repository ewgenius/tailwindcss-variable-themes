import {
  expandColors,
  prepareUtilities,
  prepareColors,
  defaultUtilityPrefix,
  defaultMapper,
} from "../src/plugin";
import { ThemeDeclaration } from "../src/types";

describe("VariableThemesPlugin", () => {
  describe("expandColors", () => {
    it("works with default color swatch", () => {
      const colors = expandColors(
        {
          "100": "#A00",
          "200": "#B00",
          "300": "#C00",
          "400": "#D00",
        },
        "red"
      );

      expect(colors).toEqual({
        "--red-100": "#A00",
        "--red-200": "#B00",
        "--red-300": "#C00",
        "--red-400": "#D00",
      });
    });

    it("works with numeric color swatch", () => {
      const colors = expandColors(
        {
          1: "#A00",
          2: "#B00",
          3: "#C00",
          4: "#D00",
        },
        "red"
      );
      expect(colors).toEqual({
        "--red-1": "#A00",
        "--red-2": "#B00",
        "--red-3": "#C00",
        "--red-4": "#D00",
      });
    });

    it("works with custom mapper", () => {
      const colors = expandColors(
        {
          "100": "#A00",
          "200": "#B00",
          "300": "#C00",
          "400": "#D00",
        },
        "red",
        (key, i) => `${key}-${i}-color`
      );
      expect(colors).toEqual({
        "--red-100-0-color": "#A00",
        "--red-200-1-color": "#B00",
        "--red-300-2-color": "#C00",
        "--red-400-3-color": "#D00",
      });
    });
  });

  const themes: Record<string, ThemeDeclaration> = {
    light: {
      primary: {
        bg: "#FFF",
        text: "#000",
      },
      accent: {
        1: "#F11",
        2: "#F22",
      },
    },

    dark: {
      primary: {
        bg: "#000",
        text: "#FFF",
      },
      accent: {
        1: "#FAA",
        2: "#F99",
      },
    },
  };

  describe("prepareUtilities", () => {
    it("creates valid utility theme classes", () => {
      const utilities = prepareUtilities({
        utilityPrefix: defaultUtilityPrefix,
        varNameMapper: defaultMapper,
        themes,
      });

      expect(utilities).toEqual({
        ".theme-light": {
          "--primary-bg": "#FFF",
          "--primary-text": "#000",
          "--accent-1": "#F11",
          "--accent-2": "#F22",
        },

        ".theme-dark": {
          "--primary-bg": "#000",
          "--primary-text": "#FFF",
          "--accent-1": "#FAA",
          "--accent-2": "#F99",
        },
      });
    });

    it("creates valid utility theme classes with custom prefix", () => {
      const utilities = prepareUtilities({
        utilityPrefix: "my-theme",
        varNameMapper: defaultMapper,
        themes,
      });

      expect(utilities).toEqual({
        ".my-theme-light": {
          "--primary-bg": "#FFF",
          "--primary-text": "#000",
          "--accent-1": "#F11",
          "--accent-2": "#F22",
        },

        ".my-theme-dark": {
          "--primary-bg": "#000",
          "--primary-text": "#FFF",
          "--accent-1": "#FAA",
          "--accent-2": "#F99",
        },
      });
    });
  });

  it("creates valid utility theme classes with custom mapper", () => {
    const utilities = prepareUtilities({
      utilityPrefix: defaultUtilityPrefix,
      varNameMapper: (key, i) => `${key}-${i}-color`,
      themes,
    });

    expect(utilities).toEqual({
      ".theme-light": {
        "--primary-bg-0-color": "#FFF",
        "--primary-text-1-color": "#000",
        "--accent-1-0-color": "#F11",
        "--accent-2-1-color": "#F22",
      },

      ".theme-dark": {
        "--primary-bg-0-color": "#000",
        "--primary-text-1-color": "#FFF",
        "--accent-1-0-color": "#FAA",
        "--accent-2-1-color": "#F99",
      },
    });
  });

  describe("prepareColors", () => {
    it("creates valid color palette extension", () => {
      const extendedColors = prepareColors(themes["light"], {
        utilityPrefix: defaultUtilityPrefix,
        varNameMapper: defaultMapper,
        themes,
      });

      expect(extendedColors).toEqual({
        accent: {
          "1": "var(--accent-1)",
          "2": "var(--accent-2)",
        },
        primary: {
          bg: "var(--primary-bg)",
          text: "var(--primary-text)",
        },
      });
    });

    it("creates valid color palette extension with custom mapper", () => {
      const extendedColors = prepareColors(themes["light"], {
        utilityPrefix: defaultUtilityPrefix,
        varNameMapper: (key, i) => `${key}-${i}-color`,
        themes,
      });

      expect(extendedColors).toEqual({
        accent: {
          "1-0-color": "var(--accent-1-0-color)",
          "2-1-color": "var(--accent-2-1-color)",
        },
        primary: {
          "bg-0-color": "var(--primary-bg-0-color)",
          "text-1-color": "var(--primary-text-1-color)",
        },
      });
    });
  });
});
