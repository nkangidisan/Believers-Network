
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://believersnetwork.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Believers' Network | Transforming Lives, Impacting Nations",
    template: "%s | Believers' Network",
  },
  description: 'A global evangelical movement dedicated to spreading the Gospel, reaching students, and winning souls for Christ across Africa and beyond.',
  keywords: ["Believers' Network", "Christian ministry", "evangelism", "missions", "student ministry", "discipleship", "Africa", "Gospel", "Jesus Christ", "revival"],
  authors: [{ name: "Believers' Network", url: siteUrl }],
  creator: "Believers' Network",
  publisher: "Believers' Network",
  openGraph: {
    title: "Believers' Network | Transforming Lives, Impacting Nations",
    description: 'A global evangelical movement dedicated to spreading the Gospel, reaching students, and winning souls for Christ across Africa and beyond.',
    url: siteUrl,
    siteName: "Believers' Network",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Believers\' Network collage showing missions and community outreach.',
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
    title: "Believers' Network | Transforming Lives, Impacting Nations",
    description: 'A global evangelical movement dedicated to spreading the Gospel, reaching students, and winning souls for Christ across Africa and beyond.',
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
  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased bg-background text-foreground")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
