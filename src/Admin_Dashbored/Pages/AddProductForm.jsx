import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
// Imports for shadcn/ui components have been removed

const AddProductForm = () => {
    // State for each form field
    const [productId, setProductId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // State for loading and feedback messages
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: string }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form reload
        setLoading(true);
        setMessage(null); // Clear previous messages

        // Package the data to send
        const productData = {
            productId,
            name,
            description,
            price: Number(price), // Ensure price is sent as a number
            imageUrl
        };

        try {
            // Call your new API endpoint
            const response = await fetch('http://localhost:3000/api/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            const data = await response.json();

            if (!response.ok) {
                // If server sends an error (e.g., "Product ID already exists")
                throw new Error(data.message || 'Failed to add product');
            }

            // --- Success ---
            setMessage({ type: 'success', text: `Successfully added: ${data.name}` });
            
            // Clear the form fields
            setProductId('');
            setName('');
            setDescription('');
            setPrice('');
            setImageUrl('');

        } catch (error) {
            // --- Error ---
            setMessage({ type: 'error', text: error.message });
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    // Helper class for form inputs and textareas
    const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

    return (
        <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Add New Product</h2>
            
            {/* Styled wrapper to match your dashboard's card look */}
            <div className="shadow-lg rounded-lg border border-gray-200 p-6 md:p-8 bg-white mt-10 max-w-3xl mx-20">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Form fields are in a grid for better layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product ID */}
                        <div>
                            <label htmlFor="productId" className={labelClasses}>Unique Product ID (SKU)</label>
                            <input
                                id="productId"
                                type="text"
                                value={productId}
                                onChange={(e) => setProductId(e.target.value)}
                                placeholder="e.g., TBL-001"
                                required
                                className={inputClasses}
                            />
                        </div>

                        {/* Product Name */}
                        <div>
                            <label htmlFor="productName" className={labelClasses}>Product Name</label>
                            <input
                                id="productName"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g., Modern Coffee Table"
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    {/* Product Description */}
                    <div>
                        <label htmlFor="productDescription" className={labelClasses}>Product Description</label>
                        <textarea
                            id="productDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe the product, its features, materials, etc."
                            required
                            rows={4}
                            className={inputClasses}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Price */}
                        <div>
                            <label htmlFor="productPrice" className={labelClasses}>Price ($)</label>
                            <input
                                id="productPrice"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="e.g., 199.99"
                                required
                                min="0"
                                step="0.01" // Allows for cents
                                className={inputClasses}
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label htmlFor="imageUrl" className={labelClasses}>Image URL (Imgur)</label>
                            <input
                                id="imageUrl"
                                type="url" // Use 'url' type for better validation
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="https://i.imgur.com/..."
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    {/* Submit Button & Feedback Message */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                        <div className="flex-1">
                            {/* Feedback Message */}
                            {message && (
                                <div 
                                    className={`p-3 rounded-md text-sm font-medium ${
                                        message.type === 'success' 
                                            ? 'bg-green-100 text-green-900' 
                                            : 'bg-red-100 text-red-900'
                                    }`}
                                >
                                    {message.text}
                                </div>
                            )}
                        </div>
                        
                        <Button 
                            variant="blue"
                            type="submit" 
                            disabled={loading} 
                            // className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:bg-indigo-400"
                        >
                            {loading ? 'Adding Product...' : 'Add Product'}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProductForm;

