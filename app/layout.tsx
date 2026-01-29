import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'TOCO | La Primera Tienda Interactiva de San Juan',
  description: 'Descubre TOCO, la experiencia de compra del futuro. La primera tienda interactiva en San Juan donde la tecnología y la innovación transforman tu forma de comprar.',
  generator: 'v0.app',
  keywords: ['tienda interactiva', 'San Juan', 'TOCO', 'innovación', 'tecnología', 'retail del futuro'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'TOCO | La Primera Tienda Interactiva de San Juan',
    description: 'Descubre TOCO, la experiencia de compra del futuro.',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#F7931E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
