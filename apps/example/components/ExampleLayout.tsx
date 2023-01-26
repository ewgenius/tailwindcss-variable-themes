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
        <nav className="text-sm pb-8 flex gap-4 items-center">
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

          <div className="flex-grow" />

          <a
            href="https://www.npmjs.com/package/tailwindcss-variable-themes"
            className="underline opacity-50 hover:no-underline hover:opacity-100"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" y1="22" x2="12" y2="12"></line>
            </svg>
          </a>

          <a
            href="https://github.com/ewgenius/tailwindcss-variable-themes"
            className="underline opacity-50 hover:no-underline hover:opacity-100"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </nav>
        <h1 className="text-3xl font-bold">
          {title || "tailwindcss-variable-themes plugin"}
        </h1>
        <p className="text-md pb-4">{subtitle}</p>

        {children}
      </div>
    </main>
  );
};
