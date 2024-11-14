import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Devloper's Portfolio",
  description:
    "A personal portfolio to showcase my coding projects and experiances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
