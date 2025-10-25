import React from 'react';
// 1. Import Button and icons
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

// Corrected component name (Dashboard)
const Order_Dashboard = () => {
  
  // Sample data for the table
  const orders = [
    {
      id: 'ORD-001',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      contact: '123-456-7890',
      address: '123 Main St, Anytown, USA 12345',
      productName: 'The Complete React Guide',
      productId: 'PROD-1024',
    },
    {
      id: 'ORD-002',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      contact: '987-654-3210',
      address: '456 Oak Ave, Sometown, USA 54321',
      productName: 'Tailwind CSS Fundamentals',
      productId: 'PROD-1025',
    },
    {
      id: 'ORD-003',
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.j@web.com',
      contact: '555-123-4567',
      address: '789 Pine Rd, Othercity, USA 67890',
      productName: 'JavaScript Algorithms',
      productId: 'PROD-1026',
    },
    {
      id: 'ORD-004',
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'em.davis@mail.io',
      contact: '555-987-6543',
      address: '101 Maple Ln, Newville, USA 10101',
      productName: 'Next.js for Beginners',
      productId: 'PROD-1027',
    },
  ];

  return (
    // 2. Removed outer padding/min-h-screen to fit in <Outlet />
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Dashboard</h2>
      
      {/* 3. Added border for a clean card look */}
      <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            
            {/* 4. Replaced heavy header with a light, standard one */}
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  First Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact No
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product ID
                </th>
                {/* 5. Added Actions column */}
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.contact}
                  </td>
                  {/* 6. Added max-w-xs to allow wrapping */}
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                    {order.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                    {order.productName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.productId}
                  </td>
                  {/* 7. Added Actions cell */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>

                      <Button
                        variant="destructive"
                        size="icon"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order_Dashboard;