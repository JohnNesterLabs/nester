import "./globals.css";

export const metadata = {
  title: "Nester Labs – Reimagining Intelligence",
  description:
    "Nester Labs is an AI-accelerated studio reimagining intelligence through research, design, and technology.",
  icons: {
    icon: "/favicon/MacBook Air - 1.svg"
  }
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


