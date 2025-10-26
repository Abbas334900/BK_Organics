import express from 'express';
// Import the new Product model
import Product from '../models/Product.js'; 

const router = express.Router();

// Route: POST /api/products/add
// This will be used by your new React form
router.post('/add', async (req, res) => {
    try {
        // Get all product data from the request body
        const { productId, name, description, price, imageUrl } = req.body;

        // --- Server-side validation ---
        if (!productId || !name || !description || !price || !imageUrl) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if a product with this ID already exists
        const existingProduct = await Product.findOne({ productId });
        if (existingProduct) {
            return res.status(400).json({ message: 'Product ID already exists. Please use a unique ID.' });
        }

        // Create a new product instance using the model
        const newProduct = new Product({
            productId,
            name,
            description,
            price,
            imageUrl
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Send back the saved product and a 201 (Created) status
        res.status(201).json(savedProduct);

    } catch (error) {
        // Handle Mongoose validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        // Handle other errors
        console.error('Error saving product:', error);
        res.status(500).json({ message: 'Server error: Could not save product' });
    }
});


router.get('/all', async (req, res) => {
    try {
        // .find() with an empty object {} fetches all documents in the Product collection
        const allProducts = await Product.find();
        
        // Send the array of products back as JSON
        res.status(200).json(allProducts);

    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error: Could not fetch products' });
    }
});

// --- DELETE /product/:id ---
router.delete('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        if (error.name === 'CastError') {
             return res.status(400).json({ message: 'Invalid product ID format' });
        }
        res.status(500).json({ message: 'Server error: Could not delete product' });
    }
});

// --- ADD THIS NEW 'UPDATE' (PUT) ROUTE ---
// Route: PUT /api/products/product/:id
router.put('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { productId, name, description, price, imageUrl } = req.body;

        // Find the product by its MongoDB _id and update it
        // { new: true } returns the updated document
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { productId, name, description, price, imageUrl },
            { new: true, runValidators: true } // runValidators ensures schema rules are still applied
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct); // Send back the updated product

    } catch (error) {
        console.error('Error updating product:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error: Could not update product' });
    }
});

export default router;
