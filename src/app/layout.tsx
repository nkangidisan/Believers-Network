import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { Analytics } from "@vercel/analytics/react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://believersnetworkintl.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Believers' Network Intl | School Ministry & New Life Book",
    template: "%s | Believers' Network Intl",
  },
  description: "Official site of Believers' Network Intl. Get the 'New Life Book' by Iradukunda Pacifique. Dedicated to school ministry, youth empowerment, and global revival.",
  keywords: [
    "New Life Book", 
    "New Life Book Iradukunda Pacifique", 
    "Pacifique book", 
    "Iradukunda book", 
    "Iradukunda Pacifique book", 
    "New Life", 
    "Believers' Network International", 
    "Believers' Network Intl", 
    "school ministry", 
    "youth empowerment", 
    "Africa missions"
  ],
  authors: [{ name: "Iradukunda Pacifique Benjamin", url: siteUrl }],
  creator: "Iradukunda Pacifique Benjamin",
  publisher: "Believers' Network Intl",
  openGraph: {
    title: "New Life Book | By Iradukunda Pacifique Benjamin",
    description: "Discover the 'New Life Book' – a spiritual roadmap for the young generation. Get your copy today via access code or donation.",
    url: siteUrl,
    siteName: "Believers' Network Intl",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "New Life Book by Iradukunda Pacifique Benjamin",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "New Life Book | Iradukunda Pacifique",
    description: "Get the life-transforming New Life Book by Iradukunda Pacifique. Available now.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteUrl}/manifest.json`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Believers' Network Intl",
    "url": siteUrl,
    "logo": `${siteUrl}/bnlogo.png`,
    "description": "A global faith-based non-profit organization reaching students and communities.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256-766-754-286",
      "contactType": "Customer Service",
      "email": "hello@believersnetworkintl.org"
    },
    "sameAs": [
      "https://www.instagram.com/believersnetworkintl/",
      "https://www.youtube.com/@Iradukundapacifiquebenjamin"
    ]
  };

  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={cn("font-body antialiased bg-background text-foreground")}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
