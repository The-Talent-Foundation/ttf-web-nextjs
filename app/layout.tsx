import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | The Talent Foundation',
    default: 'The Talent Foundation - Strategic Talent Solutions',
  },
  description: 'Enterprise talent solutions that build sustainable internal capability. Expert hiring, talent strategy, and organizational development.',
  keywords: ['talent solutions', 'hiring', 'recruitment', 'talent strategy'],
  authors: [{ name: 'The Talent Foundation' }],
  creator: 'The Talent Foundation',
  publisher: 'The Talent Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://talent.foundation'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talent.foundation',
    title: 'The Talent Foundation - Strategic Talent Solutions',
    description: 'Enterprise talent solutions that build sustainable internal capability.',
    siteName: 'The Talent Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Talent Foundation - Strategic Talent Solutions',
    description: 'Enterprise talent solutions that build sustainable internal capability.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}