import "./globals.css";

import { getTailwindConfig } from "@/lib/getTailwindConfig";
import { ThemeButton } from "@/components/ThemeButton";
import { ColorCard } from "@/components/ColorCard";
import { ExampleLayout } from "@/components/ExampleLayout";
import { ConfigPreview } from "@/components/ConfigPreview";

export default async function CustomExample() {
  const config = await getTailwindConfig(
    "../../apps/example/tailwind-custom.config.js"
  );

  return (
    <ExampleLayout
      className="bg-geist-background text-geist-foreground"
      subtitle="custom colors example"
    >
      <div className="flex flex-wrap gap-1 pb-2">
        <ThemeButton
          theme="light"
          className="border-geist-accents-2 hover:border-geist-accents-3 bg-geist-accents-1 hover:bg-geist-accents-2 active:bg-geist-accents-3"
        />
        <ThemeButton
          theme="dark"
          className="border-geist-accents-2 hover:border-geist-accents-3 bg-geist-accents-1 hover:bg-geist-accents-2 active:bg-geist-accents-3"
        />
      </div>

      <div className="font-mono text-xs grid grid-cols-2 gap-2 mb-12">
        <ColorCard className="bg-geist-accents-1" />
        <ColorCard className="bg-geist-accents-2" />
        <ColorCard className="bg-geist-accents-3" />
        <ColorCard className="bg-geist-accents-4" />
        <ColorCard className="bg-geist-accents-5" />
        <ColorCard className="bg-geist-accents-6" />
        <ColorCard className="bg-geist-accents-7" />
        <ColorCard className="bg-geist-accents-8" />
      </div>

      <ConfigPreview config={config} />
    </ExampleLayout>
  );
}
