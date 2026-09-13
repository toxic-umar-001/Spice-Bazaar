import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Spice Bazaar Lahore | Premium Pakistani Restaurant',
  description:
    'Experience traditional Pakistani flavours in an elegant dining atmosphere at Spice Bazaar, Gulberg Lahore.',
  keywords: [
    'Spice Bazaar',
    'Pakistani restaurant Lahore',
    'fine dining Lahore',
    'Gulberg restaurant',
    'MM Alam Road restaurant',
    'Pakistani cuisine',
    'BBQ Lahore',
    'karahi Lahore',
    'hi tea Lahore',
  ],
  openGraph: {
    title: 'Spice Bazaar Lahore | Premium Pakistani Restaurant',
    description:
      'Experience traditional Pakistani flavours in an elegant dining atmosphere at Spice Bazaar, Gulberg Lahore.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Spice Bazaar',
    images: [
      {
        url: 'https://images.pexels.com/photos/18601877/pexels-photo-18601877.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Traditional Pakistani biryani at Spice Bazaar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spice Bazaar Lahore | Premium Pakistani Restaurant',
    description:
      'Experience traditional Pakistani flavours in an elegant dining atmosphere at Spice Bazaar, Gulberg Lahore.',
    images: [
      'https://images.pexels.com/photos/18601877/pexels-photo-18601877.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  alternates: {
    canonical: 'http://spicebazaar.pk/',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Spice Bazaar',
  alternateName: 'سپائیس بازار',
  description:
    'Premium Pakistani restaurant offering traditional flavours in an elegant dining atmosphere in Gulberg, Lahore.',
  servesCuisine: ['Pakistani', 'BBQ', 'South Asian'],
  priceRange: 'Rs 2,000–7,000',
  telephone: '+92 311 1122103',
  url: 'http://spicebazaar.pk/',
  menu: 'http://www.spicebazaar.pk/menu/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'T-01, Tipu Rd, off MM Alam Road, Block T, Gulberg 2',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54660',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.5204,
    longitude: 74.3587,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.3',
    ratingCount: '15992',
    bestRating: '5',
  },
  openingHours: 'Mo-Su 11:00-23:00',
  acceptsReservations: 'True',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
