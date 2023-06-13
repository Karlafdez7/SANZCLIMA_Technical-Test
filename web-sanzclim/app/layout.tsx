import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title> Sanz Clim- Karla</title>
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
