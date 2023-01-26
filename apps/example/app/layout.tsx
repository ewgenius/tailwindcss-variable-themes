import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
