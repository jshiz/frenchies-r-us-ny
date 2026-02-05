import type { Metadata } from 'next';
import { Montserrat, Playfair_Display, Permanent_Marker } from 'next/font/google';
import './globals.css';
import { generateOrganizationStructuredData, generateKeywords } from '@/lib/seo';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://frenchiesrusny.com'),
  title: {
    default: 'Frenchies R Us NY | Premium French Bulldog Breeder | Schenectady, Albany, Troy',
    template: '%s | Frenchies R Us NY'
  },
  description: 'Premium French Bulldog breeder in New York Capital Region. Exotic colors, DNA verified, superior structure. Blue, Lilac, Merle puppies. Schenectady, Albany, Troy. Health guaranteed.',
  keywords: generateKeywords(['trending', 'colors', 'location', 'structure']),
  authors: [{ name: 'Kevin D Briggs Jr' }],
  creator: 'Frenchies R Us NY',
  publisher: 'Frenchies R Us NY',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frenchiesrusny.com',
    title: 'Frenchies R Us NY | Royal Bloodline French Bulldogs',
    description: 'Premium French Bulldog breeder. Exotic colors, DNA verified, raised with love in NY Capital Region.',
    siteName: 'Frenchies R Us NY',
    images: [
      {
        url: '/socialsharing.jpg',
        width: 1200,
        height: 630,
        alt: 'Frenchies R Us NY - Premium French Bulldog Breeder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frenchies R Us NY | Premium French Bulldog Breeder',
    description: 'Exotic French Bulldog puppies. DNA verified, health tested, family raised.',
    images: ['/socialsharing.jpg'],
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
  appleWebApp: {
    title: 'Frenchies R Us NY',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FrenchieRadio from '@/components/FrenchieRadio';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationStructuredData();

  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${permanentMarker.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <FrenchieRadio />
      </body>
    </html>
  );
}
