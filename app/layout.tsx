import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Darren Builds",
  description:
    "Builder of businesses and software. From brick and mortar to AI-powered systems.",
  openGraph: {
    title: "Darren Builds",
    description: "Builder of businesses and software.",
    url: "https://darrenbuilds.ai",
    siteName: "Darren Builds",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Builds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
