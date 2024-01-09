import { Quicksand } from 'next/font/google'
import './globals.css'
import Footer from './_components/Footer'
import Provider from './_components/Provider'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Nyumbani Real Estate',
  description: 'A real estate company website where they showcase their properties and manage properties and agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
