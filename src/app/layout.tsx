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

const siteUrl = "https://lazyfoxxes-portfolio.vercel.app";
const sameAs = [
  "https://github.com/lazyfoxxes",
  "https://www.linkedin.com/in/lazyfoxxes-softech-15172238a/",
  "https://twitter.com/lazyfoxxes",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LazyFoxxes | Creative Web & App Studio",
    template: "%s | LazyFoxxes",
  },
  description:
    "LazyFoxxes crafts premium web applications, mobile apps, and UI/UX design from Islamabad, Pakistan. A portfolio for ambitious startups, SaaS products, and digital brands.",
  keywords: [
    "LazyFoxxes",
    "web development",
    "mobile app development",
    "UI UX design",
    "Next.js",
    "React",
    "Islamabad",
    "Pakistan",
    "digital agency",
    "portfolio",
  ],
  applicationName: "LazyFoxxes",
  authors: [{ name: "LazyFoxxes", url: siteUrl }],
  creator: "LazyFoxxes",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    url: siteUrl,
    title: "LazyFoxxes | Creative Web & App Studio",
    description:
      "LazyFoxxes crafts premium web applications, mobile apps, and UI/UX design from Islamabad, Pakistan. A portfolio for ambitious startups, SaaS products, and digital brands.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "LazyFoxxes logo",
      },
    ],
    type: "website",
    siteName: "LazyFoxxes",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LazyFoxxes | Creative Web & App Studio",
    description:
      "LazyFoxxes crafts premium web applications, mobile apps, and UI/UX design from Islamabad, Pakistan. A portfolio for ambitious startups, SaaS products, and digital brands.",
    images: [`${siteUrl}/logo.png`],
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  "name": "LazyFoxxes",
                  "url": siteUrl,
                  "logo": `${siteUrl}/logo.png`,
                  "description": "Professional web development, mobile app development, and UI/UX design services based in Islamabad, Pakistan.",
                  "sameAs": sameAs,
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+92-335-426-2912",
                      "contactType": "customer service",
                      "areaServed": "PK",
                      "availableLanguage": ["English"]
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  "url": siteUrl,
                  "name": "LazyFoxxes",
                  "description": "LazyFoxxes crafts premium web applications, mobile apps, and UI/UX design from Islamabad, Pakistan.",
                  "publisher": {
                    "@id": `${siteUrl}/#organization`
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "name": "LazyFoxxes",
                  "url": siteUrl,
                  "logo": `${siteUrl}/logo.png`,
                  "description": "Professional web development, mobile app development, and UI/UX design services based in Islamabad, Pakistan.",
                  "telephone": "+92-335-426-2912",
                  "email": "lazyfoxxes@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Islamabad",
                    "addressRegion": "Islamabad Capital Territory",
                    "addressCountry": "PK"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.6844,
                    "longitude": 73.0479
                  },
                  "areaServed": "Worldwide",
                  "sameAs": sameAs,
                  "priceRange": "$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                      ],
                      "opens": "09:00",
                      "closes": "19:00"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootClient />
        <Navigation />
        <main className="pt-[4.5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
