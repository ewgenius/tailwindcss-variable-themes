"use client";

import { FC } from "react";

function switchTheme(theme: string) {
  if (!theme) {
    document.documentElement.className = "";
  } else {
    document.documentElement.className = `theme-${theme}`;
  }
}

export const ThemeButton: FC<{
  className: string;
  theme: string;
}> = ({ theme, className }) => {
  return (
    <button
      onClick={() => switchTheme(theme)}
      className={`text-sm px-2 py-1.5 border rounded ${className}`}
    >
      {theme}
    </button>
  );
};
