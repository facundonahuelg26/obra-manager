import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { getLocale } from 'next-intl/server'
import { Providers } from './providers'
import { NextIntlClientProvider } from 'next-intl'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable}`}>
        <Providers>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
