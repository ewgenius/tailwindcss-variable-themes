"use-client";

import { FC, PropsWithChildren } from "react";

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
        <h1 className="text-3xl font-bold">
          {title || "tailwindcss-variable-theme plugin"}
        </h1>
        <p className="text-lg pb-4">{subtitle}</p>

        {children}
      </div>
    </main>
  );
};
