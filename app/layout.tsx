import type { Metadata } from "next";
import { seo } from "@/data/seo";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: seo.siteName,
  authors: [{ name: seo.siteName, url: seo.siteUrl }],
  category: "portfolio",
  creator: seo.siteName,
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL(seo.siteUrl),
  publisher: seo.siteName,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  title: {
    default: seo.siteName,
    template: `%s | ${seo.siteName}`,
  },
  manifest: "/site.webmanifest",
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    description: seo.description,
    images: [seo.ogImage],
    locale: "en_CA",
    siteName: seo.siteName,
    title: seo.siteName,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    creator: seo.twitterHandle,
    description: seo.description,
    images: [seo.ogImage.url],
    title: seo.siteName,
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
