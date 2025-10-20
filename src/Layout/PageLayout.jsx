import Navbar from '@/components/Navbar'
import MainPage from '@/components/MainPage'
import Card from '@/components/Card'

const PageLayout = () => {
  return (
    <>
      <div className="min-h-screen container px-10 sm:pl-6 md:pl-16 lg:pl-32">
        <Navbar />
        <MainPage />
      </div>
    </>
  )
}

export default PageLayout
