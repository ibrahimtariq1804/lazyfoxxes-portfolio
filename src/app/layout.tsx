import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navigation, RootClient } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LazyFoxxes",
  description: "Portfolio website of LazyFoxxes - Showcasing creative projects and professional work",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: "LazyFoxxes",
    description: "Portfolio website of LazyFoxxes - Showcasing creative projects and professional work",
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LazyFoxxes",
    description: "Portfolio website of LazyFoxxes - Showcasing creative projects and professional work",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LazyFoxxes",
              "url": "https://lazyfoxxes-portfolio.vercel.app",
              "logo": "https://lazyfoxxes-portfolio.vercel.app/logo.png",
              "description": "Portfolio website of LazyFoxxes - Showcasing creative projects and professional work"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootClient />
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
