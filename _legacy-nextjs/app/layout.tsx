import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#EC4899", // Pink for Rainbow theme
};

export const metadata: Metadata = {
  metadataBase: new URL("https://birthdaysurprisevadodara.com"),
  title: {
    default: "Best Birthday Celebration in Vadodara | Friends Factory Cafe | #1 Birthday Venue",
    template: "%s | Friends Factory Cafe Vadodara",
  },
  description:
    "Best birthday celebration venue in Vadodara! 🎂 Premium rooftop birthday surprises, balloon decorations, midnight birthday parties, couple birthday celebrations. 100% private venue. Starting ₹6,900. Call +91 74878 88730.",
  keywords: [
    "birthday celebration vadodara",
    "birthday surprise vadodara",
    "birthday party venues vadodara",
    "birthday party places vadodara",
    "birthday decoration vadodara",
    "birthday balloon decoration vadodara",
    "midnight birthday surprise vadodara",
    "birthday surprise for boyfriend vadodara",
    "birthday surprise for girlfriend vadodara",
    "birthday surprise for husband vadodara",
    "birthday surprise for wife vadodara",
    "rooftop birthday party vadodara",
    "private birthday celebration vadodara",
    "birthday packages vadodara",
    "best birthday venue vadodara",
    "birthday decorators vadodara",
    "birthday organisers vadodara",
    "birthday event planners vadodara",
    "couple birthday celebration vadodara",
    "romantic birthday surprise vadodara",
    "unique birthday celebration vadodara",
    "birthday photoshoot vadodara",
    "birthday dinner date vadodara",
    "birthday candlelight dinner vadodara",
    "friends factory cafe vadodara",
    "friends factory cafe"
  ],
  authors: [{ name: "Friends Factory Cafe", url: "https://birthdaysurprisevadodara.com" }],
  creator: "Friends Factory Cafe",
  publisher: "Friends Factory Cafe",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Restaurant",
  classification: "Birthday Celebration Venue",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://birthdaysurprisevadodara.com",
    siteName: "Friends Factory Cafe",
    title: "Best Birthday Celebration Venue in Vadodara | Friends Factory Cafe",
    description: "Best birthday celebration venue in Vadodara! 🎂 Premium rooftop birthday surprises, balloon decorations, midnight parties. 100% private. Starting ₹6,900.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Friends Factory Cafe - Best Birthday Celebration Venue in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Birthday Celebration Venue in Vadodara | Friends Factory Cafe",
    description: "Best birthday celebration venue in Vadodara! 🎂 Premium rooftop birthday surprises, decorations & more! Starting ₹6,900.",
    images: ["/images/twitter-image.jpg"],
    creator: "@friendsfactorycafe",
    site: "@friendsfactorycafe",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c1b155cb6acd07f9", // From googlec1b155cb6acd07f9.html
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara",
    "geo.position": "22.3072;73.1812",
    "ICBM": "22.3072, 73.1812",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://birthdaysurprisevadodara.com/#business",
      "name": "Friends Factory Cafe",
      "alternateName": "Friends Factory Cafe Vadodara",
      "description": "Best romantic celebration venue in Vadodara, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. 100% private rooftop & glass house experiences.",
      "url": "https://birthdaysurprisevadodara.com",
      "telephone": "+91-7487888730",
      "email": "hello@birthdaysurprisevadodara.com",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://birthdaysurprisevadodara.com/images/gallery/romantic-rooftop-candlelight-dinner-vadodara-1.jpg",
        "https://birthdaysurprisevadodara.com/images/gallery/birthday-surprise-decoration-vadodara-1.jpg",
        "https://birthdaysurprisevadodara.com/images/gallery/glass-house-dinner-vadodara-1.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa",
        "addressLocality": "Gotri",
        "addressRegion": "Gujarat",
        "postalCode": "391101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.3072",
        "longitude": "73.1812"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/friendsfactorycafe/",
        "https://www.facebook.com/friendsfactorycafe/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Romantic Celebration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Birthday Surprise Package",
              "description": "Private rooftop birthday celebration with decorations, cake, and romantic setup"
            },
            "price": "6900",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Candlelight Dinner",
              "description": "Romantic candlelight dinner for couples with private setting"
            },
            "price": "6900",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Anniversary Celebration",
              "description": "Special anniversary celebration with decorations and intimate dining"
            },
            "price": "6900",
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://birthdaysurprisevadodara.com/#website",
      "url": "https://birthdaysurprisevadodara.com",
      "name": "Friends Factory Cafe",
      "description": "Best romantic celebration venue in Vadodara",
      "publisher": {
        "@id": "https://birthdaysurprisevadodara.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://birthdaysurprisevadodara.com/services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://birthdaysurprisevadodara.com/#organization",
      "name": "Friends Factory Cafe",
      "url": "https://birthdaysurprisevadodara.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://birthdaysurprisevadodara.com/images/gallery/friends-factory-cafe-logo-1.png",
        "width": "512",
        "height": "512"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7487888730",
        "contactType": "reservations",
        "areaServed": "Vadodara",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://birthdaysurprisevadodara.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://birthdaysurprisevadodara.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://birthdaysurprisevadodara.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Packages",
          "item": "https://birthdaysurprisevadodara.com/packages"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
