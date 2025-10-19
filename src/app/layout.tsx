
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { Analytics } from "@vercel/analytics/react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://believersnetworkintl.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Believers' Network International | School Ministry & Youth Empowerment",
    template: "%s | Believers' Network International",
  },
  description: "Believers' Network International is a faith-based non-profit organization dedicated to school ministry, student discipleship, and empowering the young generation across Africa. Join our global mission.",
  keywords: ["Believers' Network International", "school ministry", "youth empowerment", "non-profit organization", "faith-based initiatives", "student evangelism", "discipleship", "Africa missions", "Christian ministry"],
  authors: [{ name: "Believers' Network International", url: siteUrl }],
  creator: "Believers' Network International",
  publisher: "Believers' Network International",
  openGraph: {
    title: "Believers' Network International | School Ministry & Youth Empowerment",
    description: 'A global evangelical movement dedicated to spreading the Gospel, reaching students, and winning souls for Christ across Africa and beyond.',
    url: siteUrl,
    siteName: "Believers' Network International",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "A collage of Believers' Network International's impact, showing school ministry and youth empowerment.",
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
    title: "Believers' Network International | School Ministry & Youth Empowerment",
    description: 'Join our faith-based non-profit in its mission of school ministry and empowering the young generation across Africa.',
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
    "name": "Believers' Network International",
    "url": siteUrl,
    "logo": `${siteUrl}/bnlogo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256-766-754-286",
      "contactType": "Customer Service",
      "email": "hello@believersnetworkintl.org"
    },
    "sameAs": [
      "https://www.facebook.com/BelieversNetworkInternational",
      "https://www.instagram.com/believersnetworkintl/",
      "https://www.youtube.com/@believersnetworkinternational"
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
