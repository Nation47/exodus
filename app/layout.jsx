import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechBlog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <section className='flex'>
          <aside className='lg:w-1/4 hidden lg:block'>
            <SideBar/>
          </aside>
          <main className='w-3/4 py-6 px-8 bg-gray-100'>
            {children}
          </main>
        </section>
        <Footer />
      </body>
    </html>
  )
}
