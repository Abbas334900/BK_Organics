import 'dotenv/config'; 
import express from 'express';
import { clerkClient } from '@clerk/clerk-sdk-node';
import cors from 'cors';
import adminRoutes from './routes/admin.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/api/admin', adminRoutes); 

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});