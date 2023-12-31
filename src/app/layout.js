import './globals.css'
import { Inter } from 'next/font/google'

import Headers from '../components/Header'
import Footers from '../components/Footer'

import StyledComponentsRegistry from '../libs/AntdRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Mowba',
  description: 'E-Module Web Based',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Headers />
          {children}
          <Footers />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
