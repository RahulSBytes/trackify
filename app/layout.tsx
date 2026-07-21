import type { Metadata } from 'next'
import localfont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/context/Theme'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from '@/components/ui/sonner';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang='en' className={cn("h-full antialiased suppressHydrationWarning", "font-sans", geist.variable)}>
      <body
        className={` ${inter.variable} ${baumans.variable} flex h-full min-h-full flex-col antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
        {children}
        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}
