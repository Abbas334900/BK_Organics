import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/Routes/About'
import MainPage from '@/Routes/MainPage'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <>
      <div className="min-h-screen container px-10 sm:pl-6 md:pl-16 lg:pl-32">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default PageLayout
