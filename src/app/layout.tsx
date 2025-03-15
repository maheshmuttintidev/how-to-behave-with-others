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
  title: "How to Behave with Others - Bible-Based Guidance",
  description:
    "Get personalized responses based on God's word from the Holy Bible. Learn how to respond to various behaviors with wisdom and love.",

    metadataBase: new URL('https://how-to-behave-with-others.maheshmuttintidev.in'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Mahesh Muttinti' }],
  creator: 'Mahesh Muttinti',
  publisher: 'Mahesh Muttinti',
  formatDetection: {
  },
  openGraph: {
    type: 'website',
    siteName: 'How to Behave with Others - Bible-Based Guidance', title: "How to Behave with Others - Bible-Based Guidance",
    description:
      "Get personalized responses based on God's word from the Holy Bible. Learn how to respond to various behaviors with wisdom and love.",
    images: '/opengraph-image',
  },
  twitter: {
    card: 'summary_large_image', title: "How to Behave with Others - Bible-Based Guidance",
    description:
      "Get personalized responses based on God's word from the Holy Bible. Learn how to respond to various behaviors with wisdom and love.",
    images: '/twitter-image',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="How to Behave with Others" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
