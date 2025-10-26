import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react'; // 1. Import hooks
import { Pencil, Trash2 } from 'lucide-react';

// --- Edit Modal Component ---
const EditProductModal = ({ product, onClose, onSave, onChange }) => {
  if (!product) return null;

  return (
    // Backdrop - Added bg-black bg-opacity-50 for overlay and onClick for closing
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs"
      onClick={onClose} // Closes modal when clicking on the backdrop
    >
      {/* Modal Content - Added e.stopPropagation() to prevent closing when clicking inside */}
      <div 
        className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevents click from bubbling to backdrop
      >
        <h3 className="text-2xl font-bold mb-6">Edit Product</h3>
        
        <div className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="editProductId" className="block text-sm font-medium text-gray-700 mb-1">Product ID (SKU)</label>
              <input
                type="text"
                id="editProductId"
                name="productId"
                value={product.productId}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="editName" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input
                type="text"
                id="editName"
                name="name"
                value={product.name}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="editDescription" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="editDescription"
              name="description"
              rows="4"
              value={product.description}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="editPrice" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
              <input
                type="number"
                id="editPrice"
                name="price"
                value={product.price}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="editImageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="url"
                id="editImageUrl"
                name="imageUrl"
                value={product.imageUrl}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-medium"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSave}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- End of Edit Modal Component ---


const Products_Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- State for Edit Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // Holds the product being edited
  // -----------------------------

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    // We use a custom modal for confirm now, but window.confirm is fine.
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/api/products/product/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete product');
      }
      setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
    } catch (e) {
      setError(e.message);
      console.error('Error deleting product:', e);
    }
  };

  // --- Functions for Edit Modal ---

  // Called when user clicks the Pencil icon
  const handleEditClick = (product) => {
    setEditingProduct(product); // Set the product to edit
    setIsModalOpen(true);       // Open the modal
  };

  // Called when user clicks "Cancel" or "X" on the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingProduct(null); // Clear the product
  };

  // Updates the state as the user types in the modal's form
  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === 'price' ? Number(value) : value, // Handle number conversion for price
    }));
  };

  // Called when user clicks "Save Changes" in the modal
  const handleUpdateSubmit = async () => {
    if (!editingProduct) return;

    try {
      const response = await fetch(`http://localhost:3000/api/products/product/${editingProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingProduct), // Send the entire updated product object
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update product');
      }

      const updatedProduct = await response.json();

      // Update the product in the main list
      setProducts(prevProducts => 
        prevProducts.map(p => 
          p._id === updatedProduct._id ? updatedProduct : p
        )
      );
      
      handleModalClose(); // Close the modal on success

    } catch (e) {
      setError(e.message); // You might want a dedicated modalError state
      console.error('Error updating product:', e);
    }
  };
  // --- End of Edit Modal Functions ---


  if (loading) {
    return <div className="p-6">Loading products...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Products Dashboard</h2>
      
      <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            
            <thead className="bg-gray-50">
              {/* ... table headers ... */}
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  
                  {/* ... other table data cells ... */}
                  <td className="px-6 py-4">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-md"
                      onError={(e) => { e.target.src = 'https://placehold.co/100/eee/ccc?text=Img'; }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.productId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{product.description}</td>

                  {/* Action */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {/* --- HOOK UP THE EDIT BUTTON --- */}
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEditClick(product)} // Pass the product to the handler
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>

                      {/* 9. Hook up the delete button */}
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(product._id)}
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

      {/* --- RENDER THE MODAL --- */}
      {/* Pass 'isModalOpen' to the 'display' prop */}
      {isModalOpen && (
        <EditProductModal
          product={editingProduct}
          onClose={handleModalClose}
          onChange={handleModalInputChange}
          onSave={handleUpdateSubmit}
        />
      )}
    </>
  );
};

export default Products_Dashboard;

