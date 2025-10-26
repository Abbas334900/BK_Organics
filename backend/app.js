import 'dotenv/config';
import express from 'express';
import { clerkClient } from '@clerk/clerk-sdk-node';
import cors from 'cors';
import adminRoutes from './routes/admin.js';
import connectDB from './routes/dbConnect.js';
import contactRoutes from './routes/contactRouter.js'; 
import getMessagesRouter from './routes/getMessegesRouter.js';
import productRouter from './routes/productRouter.js';
import orderRouter from './routes/orderRouter.js'

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); // Middleware to parse JSON request bodies

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/getMessages', getMessagesRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// Function to start the server
const startServer = async () => {
  try {
    await connectDB(); // Connect to the database first

    app.listen(port, () => { // Start listening only after DB connection is successful
      console.log(`Express server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Failed to start server:', error);
  }
};

// Run the server
startServer();

