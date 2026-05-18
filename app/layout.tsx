import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { CookieBanner } from '@/components/cookie-banner'
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
  title: 'Drive AI | Revenue Systems for Roofing Companies',
  description: 'Drive AI builds revenue-generating systems for roofing companies.',
  generator: 'v0.app',
  keywords: ['roofing software', 'roofing business automation', 'roofing CRM', 'roofing company management', 'roofing operations'],
  icons: {
    icon: [
      {
        url: '/favicon-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon-logo.png',
    shortcut: '/favicon-logo.png',
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
        <CookieBanner />
      </body>
    </html>
  )
}
