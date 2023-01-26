export type VarNameMapper = (key: string, i: number) => string;

export type ColorsSwatch = Record<string, string>;

export interface ThemeDeclaration {
  [accent: string]: ColorsSwatch;
}
