import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const openSauceOne = localFont({
  src: [
    {
      path: '../../public/fonts/OpenSauceOne-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenSauceOne-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenSauceOne-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    // Add other weights if needed
  ],
  variable: '--font-opensauce',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${openSauceOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
