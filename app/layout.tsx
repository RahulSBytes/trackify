import type { Metadata } from 'next'
import localfont from 'next/font/local'
import './globals.css'

const inter = localfont({
  src: './fonts/interVF.woff2',
  variable: '--font-inter',
  weight: '400 500 600'
})

const baumans = localfont({
  src: './fonts/BaumansVF.woff2',
  variable: '--font-baumans',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Trackify',
  description:
    'Track job applications, interviews, and offers in one place. Stay organized, monitor your progress, and land your next opportunity with confidence.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark h-full antialiased'>
      <body
        className={` ${inter.variable} ${baumans.variable} flex h-full min-h-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
