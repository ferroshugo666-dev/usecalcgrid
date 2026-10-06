import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usecalcgrid.com"),
  title: {
    default: "UseCalcGrid — Smart Online Calculators",
    template: "%s | UseCalcGrid",
  },
  description:
    "Accurate online calculators for work, money, housing, and everyday decisions.",
  keywords: [
    "online calculators",
    "calculator",
    "California calculators",
    "labor law calculator",
    "rent calculator",
    "financial calculator",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "UseCalcGrid — Smart Online Calculators",
    description:
      "Accurate online calculators for work, money, housing, and everyday decisions.",
    url: "https://usecalcgrid.com",
    siteName: "UseCalcGrid",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
