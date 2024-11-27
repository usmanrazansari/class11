import './globals.css'
import type { Metadata } from 'next'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Class 11 | Student Information',
  description: 'Comprehensive student information system for Class 11',
  keywords: 'class 11, students, education, information',
  openGraph: {
    title: 'Class 11 | Student Information',
    description: 'Comprehensive student information system for Class 11',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
