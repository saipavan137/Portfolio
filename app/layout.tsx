import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venkata Sai Pavan Bommuluri - Full Stack Developer & Data Engineer",
  description: "Full Stack Developer & Data Engineer specializing in building scalable, production-grade web applications and data engineering solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}

