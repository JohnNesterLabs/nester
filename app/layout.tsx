import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PureVisuals Studio",
  description: "Visual creative studio – photography, videography, and visual direction."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}


