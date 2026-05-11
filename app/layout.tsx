import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-serif'
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Drive AI | AI Automation & Consulting for Small Businesses',
  description: 'Drive AI helps small businesses implement practical AI tools and workflow automations to save time, reduce manual work, and operate more efficiently.',
  generator: 'v0.app',
  keywords: ['AI automation', 'business automation', 'AI consulting', 'workflow automation', 'small business AI'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#00563b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-61K6X4947K" />
      </body>
    </html>
  )
}
