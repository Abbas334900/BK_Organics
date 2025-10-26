import express from 'express';
import Order from '../models/Order.js'; // Import the new Order model

const router = express.Router();

// POST /api/orders/place
// Receives and saves a new order
router.post('/place', async (req, res) => {
    try {
        // We get all the data from the request body
        const {
            productId,
            productName,
            quantity,
            price,
            customerName,
            customerAddress,
            customerContact,
            paymentMethod
        } = req.body;

        // Create a new order instance
        const newOrder = new Order({
            productId,
            productName,
            quantity,
            price,
            customerName,
            customerAddress,
            customerContact,
            paymentMethod
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        // Send back the saved order as confirmation
        res.status(201).json(savedOrder);

    } catch (error) {
        if (error.name === 'ValidationError') {
            // Handle validation errors (e.g., missing fields)
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        // For other errors
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Server error: Could not place order' });
    }
});

// You could also add routes here to GET all orders for an admin dashboard
// GET /api/orders/all
router.get('/all', async (req, res) => {
    try {
        const orders = await Order.find().sort({ orderedAt: -1 }); // Get newest first
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error: Could not fetch orders' });
    }
});


// --- READ (GET ALL) ---
// This route will be called by your dashboard
router.get('/all', async (req, res) => {
    try {
        // .find() gets all documents. 
        // .sort({ orderedAt: -1 }) shows newest orders first
        const orders = await Order.find().sort({ orderedAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error retrieving orders:', error);
        res.status(500).json({ message: 'Server error: Could not retrieve orders' });
    }
});

// --- DELETE ---
// This route is for your "Delete" button
router.delete('/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        
        res.status(200).json({ message: 'Order deleted successfully' });
    
    } catch (error) {
        console.error('Error deleting order:', error);
        if (error.name === 'CastError') {
             return res.status(400).json({ message: 'Invalid order ID format' });
        }
        res.status(500).json({ message: 'Server error: Could not delete order' });
    }
});



export default router;
