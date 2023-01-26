import "./globals.css";

import { getTailwindConfig } from "@/lib/getTailwindConfig";
import { ThemeButton } from "@/components/ThemeButton";
import { ColorCard } from "@/components/ColorCard";
import { ExampleLayout } from "@/components/ExampleLayout";
import { ConfigPreview } from "@/components/ConfigPreview";

export default async function CustomExample() {
  const config = await getTailwindConfig(
    "../../apps/example/tailwind-radix.config.js"
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
        <ThemeButton
          theme="amber-light"
          bg="bg-primary-1"
          className="border-primary-7 hover:border-primary-8 bg-primary-3 hover:bg-primary-4 active:bg-primary-5"
        />
        <ThemeButton
          theme="amber-dark"
          bg="bg-primary-1"
          className="border-primary-7 hover:border-primary-8 bg-primary-3 hover:bg-primary-4 active:bg-primary-5"
        />
      </div>

      <div className="font-mono text-xs grid grid-cols-2 gap-2 mb-12">
        <ColorCard className="bg-primary-1" />
        <ColorCard className="bg-primary-2" />
        <ColorCard className="bg-primary-3" />
        <ColorCard className="bg-primary-4" />
        <ColorCard className="bg-primary-5" />
        <ColorCard className="bg-primary-6" />
        <ColorCard className="bg-primary-7" />
        <ColorCard className="bg-primary-8" />
        <ColorCard className="bg-primary-9" />
        <ColorCard className="bg-primary-10" />
        <ColorCard className="bg-primary-11" />
        <ColorCard className="bg-primary-12" />
        <ColorCard className="bg-accent-1" />
        <ColorCard className="bg-accent-2" />
        <ColorCard className="bg-accent-3" />
        <ColorCard className="bg-accent-4" />
        <ColorCard className="bg-accent-5" />
        <ColorCard className="bg-accent-6" />
        <ColorCard className="bg-accent-7" />
        <ColorCard className="bg-accent-8" />
        <ColorCard className="bg-accent-9" />
        <ColorCard className="bg-accent-10" />
        <ColorCard className="bg-accent-11" />
        <ColorCard className="bg-accent-12" />
      </div>

      <ConfigPreview config={config} />
    </ExampleLayout>
  );
}
