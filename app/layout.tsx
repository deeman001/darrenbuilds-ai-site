import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darrenbuilds.ai"),
  title: {
    default: "Darren Peterson | Darren Builds — Business + Software Builder",
    template: "%s | Darren Builds",
  },
  description:
    "Darren Peterson builds businesses and software systems — from brick-and-mortar operations to AI-powered platforms. Founder, operator, and product builder.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Darren Peterson",
    "Darren Builds",
    "business builder",
    "software builder",
    "AI systems",
    "product founder",
    "entrepreneur",
    "brand builder",
    "operator",
    "Forthean Labs",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Darren Peterson | Darren Builds",
    description:
      "Builder of businesses and software. From brick-and-mortar operations to AI-powered systems.",
    url: "https://darrenbuilds.ai/",
    siteName: "Darren Builds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/darren-hero.jpg",
        alt: "Darren Peterson, founder of Darren Builds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Peterson | Darren Builds",
    description:
      "Builder of businesses and software. From brick-and-mortar operations to AI-powered systems.",
    images: ["/images/darren-hero.jpg"],
    creator: "@Darren_Builds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
