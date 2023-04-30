import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/header/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

const font =Poppins({
   weight: ['200','300','500'],
   preload:false
   })

export const metadata = {
  title: 'Bookings App',
  description: 'This is a booking website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal/>
        <Navbar/>
        </ClientOnly>
        {children}</body>
    </html>
  )
}
