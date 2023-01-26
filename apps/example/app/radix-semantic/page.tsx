import "./globals.css";

import { getTailwindConfig } from "@/lib/getTailwindConfig";
import { ThemeButton } from "@/components/ThemeButton";
import { ExampleLayout } from "@/components/ExampleLayout";
import { ConfigPreview } from "@/components/ConfigPreview";

export const revalidate = 60 * 60 * 24;

const DemoCard = ({ label }: { label: string }) => (
  <div className="relative border border-primary-border-subtle bg-primary-subtle-bg text-primary-foreground-primary px-8 pt-12 pb-8 rounded-lg flex flex-col justify-center items-stretch gap-4 shadow">
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
      className="bg-primary-app-bg text-primary-foreground-primary"
      subtitle="radix colors example"
    >
      <div className="flex flex-wrap gap-1 pb-2">
        <ThemeButton
          theme="gray-light"
          bg="bg-primary-app-bg"
          className="border-primary-border hover:border-primary-border-hover bg-primary-ui hover:bg-primary-ui-hover active:bg-primary-ui-active"
        />
        <ThemeButton
          theme="gray-dark"
          bg="bg-primary-app-bg"
          className="border-primary-border hover:border-primary-border-hover bg-primary-ui hover:bg-primary-ui-hover active:bg-primary-ui-active"
        />
        <ThemeButton
          theme="amber-light"
          bg="bg-primary-app-bg"
          className="border-primary-border hover:border-primary-border-hover bg-primary-ui hover:bg-primary-ui-hover active:bg-primary-ui-active"
        />
        <ThemeButton
          theme="amber-dark"
          bg="bg-primary-app-bg"
          className="border-primary-border hover:border-primary-border-hover bg-primary-ui hover:bg-primary-ui-hover active:bg-primary-ui-active"
        />
        <ThemeButton
          theme="green-light"
          bg="bg-primary-app-bg"
          className="border-primary-border hover:border-primary-border-hover bg-primary-ui hover:bg-primary-ui-hover active:bg-primary-ui-active"
        />
        <ThemeButton
          theme="green-dark"
          bg="bg-primary-app-bg"
          className="border-primary-border hover:border-primary-border-hover bg-primary-ui hover:bg-primary-ui-hover active:bg-primary-ui-active"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-stretch items-stretch py-8">
        <div className="sm:col-span-2 md:col-span-3">
          <DemoCard label="global theme" />
        </div>

        <div className="theme-gray-dark">
          <DemoCard label="local theme-gray-dark" />
        </div>

        <div className="theme-gray-light">
          <DemoCard label="local theme-gray-light" />
        </div>

        <div className="theme-amber-light">
          <DemoCard label="local theme-gray-light" />
        </div>

        <div className="theme-amber-dark">
          <DemoCard label="local theme-gray-light" />
        </div>

        <div className="theme-green-light">
          <DemoCard label="local theme-gray-light" />
        </div>

        <div className="theme-green-dark">
          <DemoCard label="local theme-gray-light" />
        </div>
      </div>

      <ConfigPreview config={config} />
    </ExampleLayout>
  );
}
