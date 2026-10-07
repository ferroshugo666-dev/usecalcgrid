import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://usecalcgrid.com"),
  title: {
    default: "UseCalcGrid - Don't Overpay. Calculate The Real Cost In 30s",
    template: "%s | UseCalcGrid",
  },
  description:
    "Stop guessing. Get instant contractor-grade estimates for driveway, kitchen, bathroom and more. Trusted by 50,000+ homeowners.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "UseCalcGrid - Don't Overpay For Your Next Project",
    description: "Calculate real costs in 30 seconds. No guesswork, just real numbers.",
    url: "https://usecalcgrid.com",
    siteName: "UseCalcGrid",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
