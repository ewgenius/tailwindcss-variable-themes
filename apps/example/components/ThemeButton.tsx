"use client";

import { FC } from "react";

function switchTheme(theme: string, bg: string) {
  if (!theme) {
    document.documentElement.className = "";
  } else {
    document.documentElement.className = `theme-${theme} ${bg}`;
  }
}

export const ThemeButton: FC<{
  className: string;
  theme: string;
  bg: string;
}> = ({ theme, bg, className }) => {
  return (
    <button
      onClick={() => switchTheme(theme, bg)}
      className={`text-sm px-2 py-1.5 border rounded transition-colors duration-300 ${className}`}
    >
      {theme}
    </button>
  );
};
