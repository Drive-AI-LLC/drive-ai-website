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
  title: 'Drive AI | Roofing Insurance Supplement Software',
  description: 'Drive AI helps small businesses implement practical AI tools and workflow automations to save time, reduce manual work, and operate more efficiently.',
  generator: 'v0.app',
  keywords: ['AI automation', 'business automation', 'AI consulting', 'workflow automation', 'small business AI'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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
