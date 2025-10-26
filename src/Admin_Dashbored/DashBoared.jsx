import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { UserCog } from 'lucide-react'; // 1. Import the icon

// 1. Import icons from lucide-react
import {
  Package,    // for Products
  Star,       // for Top Ranking
  ShoppingCart, // for Orders
  MessageSquare, // for Messages
  Users,      // for Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Renamed to conventional "Dashboard"
const Dashboard = () => {

  // 2. Navigation items array (cleaner to manage)
  const navLinks = [
    { to: '/admin/Products', text: 'All Products', icon: <Package size={20} /> },
    { to: '/admin/Orders', text: 'Orders', icon: <ShoppingCart size={20} /> },
    { to: '/admin/Messeges', text: 'Messages', icon: <MessageSquare size={20} /> },
    { to: '/admin/User', text: 'Users', icon: <Users size={20} /> },
    { to: '/admin/AddProduct', text: 'Add Products', icon: <Package size={20} /> },
  ];

  // 3. Helper function for NavLink className
  const getNavLinkClass = ({ isActive }) => {
    return `
      flex items-center gap-3 rounded-lg p-3 text-base font-medium transition-colors duration-150
      ${isActive
        ? 'bg-slate-600 text-white' // Active state (neutral)
        : 'text-slate-600 hover:bg-slate-50' // Default & hover
      }
    `;
  };

  return (
    <>
      {/* 4. Main layout: Vertical Sidebar + Content Area */}
      <div className="flex min-h-screen bg-gray-50 relative">

        {/* --- Sidebar --- */}
        <nav className="w-64 flex-shrink-0 bg-white border-r border-gray-200 p-5">
          {/* Dashboard Title/Logo */}
          <h1 className="text-2xl font-bold text-slate-800 mb-10">
            BK Organics
          </h1>

          {/* Navigation List */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={getNavLinkClass}>
                  {link.icon}
                  <span>{link.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-30">
            <Button variant="outline" className="h-16 w-55 px-8 text-2xl" >
              Edit Admin
            </Button>
          </div>

        </nav>

        {/* --- Content Area --- */}
        <main className="flex-1 p-8 md:p-12 overflow-auto">
          {/* The Outlet renders the content for each route (Products, Orders, etc.) */}
          <Outlet />
        </main>

      </div>
    </>
  );
};

export default Dashboard;