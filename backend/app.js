import 'dotenv/config'; // <-- MUST BE THE FIRST LINE
import express from 'express';
import { ClerkExpressRequireAuth, clerkClient } from '@clerk/clerk-sdk-node';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000; // Your backend runs on port 3000

// Enable CORS for your React app (running on 5173)
app.use(cors({ origin: 'http://localhost:5173' }));

// Your admin endpoint
app.get(
  '/api/admin/users',
  // This middleware STILL checks if the user is logged in
  ClerkExpressRequireAuth(),
  async (req, res) => {
    
    // --- DELETE THIS BLOCK ---
    // if (req.auth.sessionClaims?.metadata?.role !== 'admin') {
    //   return res.status(403).json({ error: 'Forbidden: Admins only' });
    // }
    // --- END OF DELETED BLOCK ---

    console.log(`Access GRANTED for user: ${req.auth.userId}. Fetching user list...`);
    
    // Now, any logged-in user can fetch the list
    try {
      const users = await clerkClient.users.getUserList();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error fetching users' });
    }
  }
);


// Start the server
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});