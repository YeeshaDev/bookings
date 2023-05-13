import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/header/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import SearchModal from './components/modals/SearchModal'
import RentModal from './components/modals/RentModal'


const font =Poppins({
   weight: ['200','300','500'],
   preload:false
   })

export const metadata = {
  title: 'Bookings App',
  description: 'This is a booking website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal/>
          <SearchModal />
          <RentModal/>
        <Navbar currentUser={currentUser} />
        </ClientOnly> 
        <div className="pb-20 pt-28">
          {children}
        </div>
        </body>
    </html>
  )
}
