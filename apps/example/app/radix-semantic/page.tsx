import "./globals.css";

import { getTailwindConfig } from "@/lib/getTailwindConfig";
import { ThemeButton } from "@/components/ThemeButton";
import { ExampleLayout } from "@/components/ExampleLayout";
import { ConfigPreview } from "@/components/ConfigPreview";

export const revalidate = 60 * 60 * 24;

const DemoCard = ({ label }: { label: string }) => (
  <div className="relative bg-primary-subtle-bg text-primary-foreground-primary p-16 rounded-lg flex justify-center items-center gap-4 shadow-md">
    <span className="absolute top-2 left-2 text-xs font-mono">{label}</span>

    <button className="bg-primary-ui border border-primary-border px-3 py-2 rounded-lg hover:shadow hover:bg-primary-ui-hover hover:border-primary-border-hover active:bg-primary-ui-active transition-all duration-300 text-primary-foreground-secondary hover:text-primary-foreground-primary">
      button primary
    </button>

    <button className="bg-accent-ui border border-accent-border px-3 py-2 rounded-lg hover:shadow hover:bg-accent-ui-hover hover:border-accent-border-hover active:bg-accent-ui-active transition-all duration-300 text-accent-foreground-secondary hover:text-accent-foreground-primary">
      button accent
    </button>
  </div>
);

export default async function CustomExample() {
  const config = await getTailwindConfig(
    "../../apps/example/tailwind-radix-semantic.config.js"
  );

  return (
    <ExampleLayout
      className="bg-primary-1 text-primary-12"
      subtitle="radix colors example"
    >
      <div className="flex flex-wrap gap-1 pb-2">
        <ThemeButton
          theme="gray-light"
          bg="bg-primary-1"
          className="border-primary-7 hover:border-primary-8 bg-primary-3 hover:bg-primary-4 active:bg-primary-5"
        />
        <ThemeButton
          theme="gray-dark"
          bg="bg-primary-1"
          className="border-primary-7 hover:border-primary-8 bg-primary-3 hover:bg-primary-4 active:bg-primary-5"
        />
      </div>

      <div className="flex flex-col gap-4 justify-center items-stretch py-8">
        <DemoCard label="global theme" />

        <div className="theme-gray-dark">
          <DemoCard label="local theme-gray-dark" />
        </div>

        <div className="theme-gray-light">
          <DemoCard label="local theme-gray-light" />
        </div>
      </div>

      <ConfigPreview config={config} />
    </ExampleLayout>
  );
}
