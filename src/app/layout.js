import './globals.css'
import { Inter } from 'next/font/google'

import Headers from '../components/Header'
import Footers from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MOWBA',
  description: 'E-Module Web Based',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        {children}
        <Footers />
      </body>
    </html>
  )
}
