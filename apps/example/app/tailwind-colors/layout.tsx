import { JetBrains_Mono } from "@next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-gray-light">
      <head />
      <body className={`${mono.variable} font-mono`}>{children}</body>
    </html>
  );
}
