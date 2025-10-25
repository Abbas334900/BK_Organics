import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import PageLayout from './Layout/PageLayout'
import MainPage from './Routes/MainPage'
import About from './Routes/About'
import { RouterProvider } from 'react-router'
import Products from './Routes/Products'
import Contact from './Routes/Contact'
import BuyLayout from './Layout/BuyLayout'
import DashBoared from './Admin_Dashbored/DashBoared'
import ProductsDashBoared from './Admin_Dashbored/Pages/ProductsDashBoared'

export default function App() {

  const router = createBrowserRouter([
    {
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: <MainPage />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/buy',
          element: <BuyLayout />
        },
      ]
    },
    {
      element: <DashBoared />,
      children: [
        {
          path: '/adminProduct',
          element: <ProductsDashBoared />
        }
      ]
    }
    
  ])

  return (
    <>
      {/* <PageLayout /> */}
      <RouterProvider router={router} />
    </>
  )
}
