import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import PageLayout from './Layout/PageLayout'
import MainPage from './Routes/MainPage'
import About from './Routes/About'
import { RouterProvider } from 'react-router'
import Products from './Routes/Products'
import Contact from './Routes/Contact'

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
