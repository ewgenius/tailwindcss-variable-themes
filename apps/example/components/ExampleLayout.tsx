"use-client";

import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export const ExampleLayout: FC<
  PropsWithChildren<{
    className: string;
    title?: string;
    subtitle: string;
  }>
> = ({ title, subtitle, children, className }) => {
  return (
    <main className={`min-h-screen ${className}`}>
      <div className="container mx-auto p-4 max-w-3xl flex flex-col gap-2">
        <nav className="text-sm pb-8 flex gap-4">
          <Link
            href="/custom"
            className="underline opacity-50 hover:no-underline hover:opacity-100"
          >
            custom
          </Link>
          <Link
            href="/radix-colors"
            className="underline opacity-50 hover:no-underline hover:opacity-100"
          >
            radix colors
          </Link>
          <Link
            href="/tailwind-colors"
            className="underline opacity-50 hover:no-underline hover:opacity-100"
          >
            tailwind colors
          </Link>
        </nav>
        <h1 className="text-3xl font-bold">
          {title || "tailwindcss-variable-themes plugin"}
        </h1>
        <p className="text-lg pb-4">{subtitle}</p>

        {children}
      </div>
    </main>
  );
};
