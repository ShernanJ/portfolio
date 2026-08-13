import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shernanjavier.com"),
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  title: "Shernan Javier",
  description:
    "Software engineer in Toronto building thoughtful products and systems.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Shernan Javier",
    description:
      "Software engineer in Toronto building thoughtful products and systems.",
  },
  twitter: {
    card: "summary",
    title: "Shernan Javier",
    description:
      "Software engineer in Toronto building thoughtful products and systems.",
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
