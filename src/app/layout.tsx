import SmoothScrollProvider from '../components/SmoothScrollProvider'
import './globals.css'
import GlobalCursor from '../components/GlobalCursor'
//font imports 
import { Outfit } from 'next/font/google'

//import header
import Header from '../components/Header'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})


export const metadata = {
  title: 'Dhruv Portfolio',
  description: 'Creative Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <GlobalCursor />
        <SmoothScrollProvider>
          <Header />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}