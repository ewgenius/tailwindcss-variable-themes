import "./globals.css";

import { getTailwindConfig } from "@/lib/getTailwindConfig";
import { ThemeButton } from "@/components/ThemeButton";
import { ColorCard } from "@/components/ColorCard";
import { ExampleLayout } from "@/components/ExampleLayout";
import { ConfigPreview } from "@/components/ConfigPreview";

export default async function CustomExample() {
  const config = await getTailwindConfig(
    "../../apps/example/tailwind-tailwind.config.js"
  );

  return (
    <ExampleLayout
      className="bg-primary-100 text-primary-900"
      subtitle="tailwind colors example"
    >
      <div className="flex flex-wrap gap-1 pb-2">
        <ThemeButton
          theme="gray-light"
          className="border-primary-300 hover:border-primary-400 bg-primary-100 hover:bg-primary-200 active:bg-primary-300"
        />
        <ThemeButton
          theme="gray-dark"
          className="border-primary-300 hover:border-primary-400 bg-primary-100 hover:bg-primary-200 active:bg-primary-300"
        />
        <ThemeButton
          theme="amber-light"
          className="border-primary-300 hover:border-primary-400 bg-primary-100 hover:bg-primary-200 active:bg-primary-300"
        />
        <ThemeButton
          theme="amber-dark"
          className="border-primary-300 hover:border-primary-400 bg-primary-100 hover:bg-primary-200 active:bg-primary-300"
        />
      </div>

      <div className="font-mono text-xs grid grid-cols-2 gap-2 mb-12">
        <ColorCard className="bg-primary-100" />
        <ColorCard className="bg-primary-200" />
        <ColorCard className="bg-primary-300" />
        <ColorCard className="bg-primary-400" />
        <ColorCard className="bg-primary-500" />
        <ColorCard className="bg-primary-600" />
        <ColorCard className="bg-primary-700" />
        <ColorCard className="bg-primary-800" />
        <ColorCard className="bg-primary-900" />
      </div>

      <ConfigPreview config={config} />
    </ExampleLayout>
  );
}
