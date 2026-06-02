import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://comtricks.vercel.app'),
  title: {
    default: 'ComTricks',
    template: '%s | ComTricks',
  },
  description: 'Pentest - Bug Bounty - Write-ups CTF',

  verification: {
    google: 'FsyHxGTkTeIDJkAgnhFRJQ7ZpqTemfRsnld6BCdT0Es',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}