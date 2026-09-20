import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PortfolioChrome from "@/components/Layout/PortfolioChrome";
import { siteUrl } from "@/lib/siteUrl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alexander Ydler | Full Stack Developer",
    template: "%s | Alexander Ydler",
  },
  description:
    "Portfolio de Alexander Ydler, desarrollador Full Stack especializado en Python, Django, automatización con IA y software a la medida.",
  applicationName: "Portfolio de Alexander Ydler",
  authors: [{ name: "Alexander Ydler" }],
  creator: "Alexander Ydler",
  keywords: [
    "Alexander Ydler",
    "Full Stack Developer",
    "Python",
    "Django",
    "Next.js",
    "automatización con IA",
    "desarrollo de software",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Alexander Ydler | Full Stack Developer",
    description:
      "Desarrollo Full Stack, automatización con IA y software a la medida.",
    siteName: "Portfolio de Alexander Ydler",
    images: [
      {
        url: "/images/alexander.jpeg",
        width: 1200,
        height: 1200,
        alt: "Alexander Ydler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Ydler | Full Stack Developer",
    description:
      "Desarrollo Full Stack, automatización con IA y software a la medida.",
    images: ["/images/alexander.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PortfolioChrome>{children}</PortfolioChrome>
      </body>
    </html>
  );
}
