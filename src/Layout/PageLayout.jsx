import Navbar from '@/components/Navbar'
import MainPage from '@/components/MainPage'

const PageLayout = () => {
  return (
    <>
      <div className="min-h-screen container pl-10 sm:pl-6 md:pl-16 lg:pl-32">
        <Navbar />
        <MainPage />
      </div>
    </>
  )
}

export default PageLayout
