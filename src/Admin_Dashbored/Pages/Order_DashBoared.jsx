import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

const Order_Dashboard = () => {
  // 1. Remove static data, add state for orders, loading, and errors
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Add useEffect to fetch data when the component loads
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // This is the API endpoint you just confirmed
        const response = await fetch('http://localhost:3000/api/orders/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); // Empty array means this runs once on mount

  // 3. Add a function to handle deleting an order
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this order?')) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/api/orders/order/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete order');
      }

      // If successful, remove the order from the state
      setOrders(prevOrders => prevOrders.filter(order => order._id !== id));
      
    } catch (e) {
      setError(e.message); // Show error to user
    }
  };
  
  // 4. Add loading and error states
  if (loading) {
    return <div className="p-6">Loading orders...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Dashboard</h2>
      
      <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            
            <thead className="bg-gray-50">
              <tr>
                {/* 5. Updated columns to match your Order schema */}
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Customer Name
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
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Qty
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payment
                </th>
                 <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            
            <tbody className="bg-white divide-y divide-gray-200">
              {/* 6. Map over 'orders' from state */}
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customerContact}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                    {order.customerAddress}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                    {order.productName}
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.paymentMethod}
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {/* Add styling for status */}
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.orderStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.orderStatus === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800' // 'Delivered'
                    }`}>
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">

                      {/* 7. Hook up the delete button */}
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(order._id)}
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
