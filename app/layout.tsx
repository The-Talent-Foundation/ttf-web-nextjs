import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | The Talent Foundation',
    default: 'Strategic Talent Enablement | The Talent Foundation',
  },
  description: 'Build a predictable hiring engine that cuts talent acquisition costs and drives faster growth. Book a complimentary Strategic Assessment today.',
  keywords: ['talent enablement', 'strategic talent solutions', 'hiring', 'recruitment', 'talent strategy', 'talent acquisition', 'workforce planning'],
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
    title: 'Strategic Talent Enablement | The Talent Foundation',
    description: 'Build a predictable hiring engine that cuts talent acquisition costs and drives faster growth. Expert talent enablement for complex challenges.',
    siteName: 'The Talent Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Talent Enablement | The Talent Foundation',
    description: 'Build a predictable hiring engine that cuts talent acquisition costs and drives faster growth. Expert talent enablement for complex challenges.',
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
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}