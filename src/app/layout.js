import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Provider from './components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nyumbani Real Estate',
  description: 'A real estate company website where they showcase their properties and manage properties and agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
