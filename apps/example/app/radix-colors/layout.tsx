import { Inter } from "@next/font/google";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-gray-light">
      <head />
      <body className={`${font.variable} font-sans`}>{children}</body>
    </html>
  );
}
