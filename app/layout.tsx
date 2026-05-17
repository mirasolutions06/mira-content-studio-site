import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mira Content Studio',
  description:
    'Brand-shoot-quality product photography and campaign video for DTC e-commerce founders. One brief in, one finished campaign out.',
  metadataBase: new URL('https://miracontent.studio'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Mira Content Studio',
    description: 'Brand content. Without the agency.',
    url: 'https://miracontent.studio',
    siteName: 'Mira Content Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mira Content Studio',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mira Content Studio',
    description: 'Brand content. Without the agency.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-body text-ink bg-paper antialiased">
        {children}
      </body>
    </html>
  );
}
