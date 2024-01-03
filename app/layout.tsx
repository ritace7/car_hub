//components
import { Navbar, Footer } from '@/components'

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Drive Your Dreams, Every Mile with Style!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
