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
import TopRanking_Dasbored from './Admin_Dashbored/Pages/TopRanking_Dasbored'
import Order_DashBoared from './Admin_Dashbored/Pages/Order_DashBoared'
import Products_Dashboard from './Admin_Dashbored/Pages/Product_DashBoared'
import Messeges_DashBoared from './Admin_Dashbored/Pages/Messeges_DashBored'
import User_Dashboared from './Admin_Dashbored/Pages/User_DashBoared'
import AddProductForm from './Admin_Dashbored/Pages/AddProductForm'

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
          path: '/admin/Products',
          element: <Products_Dashboard />
        },
        {
          path: '/admin/TopRanking',
          element: <TopRanking_Dasbored />
        },
        {
          path: '/admin/Orders',
          element: <Order_DashBoared />
        },
        {
          path: '/admin/Messeges',
          element: <Messeges_DashBoared />
        },
        {
          path: '/admin/User',
          element: <User_Dashboared />
        },
        {
          path: '/admin/AddProduct',
          element: <AddProductForm />
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
