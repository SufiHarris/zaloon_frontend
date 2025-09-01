import type React from "react";
import type { Metadata } from "next";
import { Open_Sans, Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${workSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
