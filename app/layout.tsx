import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3D App',
  description: '3D app with Next R3F and Tailwind',
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
