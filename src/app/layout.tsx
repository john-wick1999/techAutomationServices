import { Ubuntu_Mono } from 'next/font/google'
import '../styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/footer'

const font = Ubuntu_Mono({ subsets: ['latin'], 
                           weight: ['400']})


export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
