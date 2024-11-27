import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Class 11',
  description: 'Student Information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
