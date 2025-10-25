import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoared = () => {
  return (
    <>
      <div className="min-h-screen container px-10 sm:pl-6 md:pl-16 lg:min-w-screen lg:px-24">
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tight py-4'>Welcome to BK Organics</h1>
        <nav>
            <ul className="flex justify-between mt-20">
                <li className="w-100 h-20 bg-slate-600 text-white transition-all duration-900 hover:bg-slate-800 text-center p-4 text-4xl rounded-2xl shadow-8xl cursor-pointer"><Link to="/">All Products</Link></li>
                <li className="w-100 h-20 bg-slate-600 text-white transition-all duration-900 hover:bg-slate-800 text-center p-4 text-4xl rounded-2xl shadow-8xl cursor-pointer"><Link to="/products">Top Rating</Link></li>
                <li className="w-100 h-20 bg-slate-600 text-white transition-all duration-900 hover:bg-slate-800 text-center p-4 text-4xl rounded-2xl shadow-8xl cursor-pointer"><Link to="/about">Orders</Link></li>
                <li className="w-100 h-20 bg-slate-600 text-white transition-all duration-900 hover:bg-slate-800 text-center p-4 text-4xl rounded-2xl shadow-8xl cursor-pointer"><Link to="/contact">Messeges</Link></li>
            </ul>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default DashBoared
