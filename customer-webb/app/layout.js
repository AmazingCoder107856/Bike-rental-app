import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Authprovider from '@components/Authprovider'
import Foot from '@components/Foot'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Authprovider>
          <main>
          <Nav />
          {children}
          <Foot />
          </main>
          </Authprovider>
      </body>

    </html>
  )
}
