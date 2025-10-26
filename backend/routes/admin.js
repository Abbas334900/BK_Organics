import express from 'express';
import { ClerkExpressRequireAuth, clerkClient } from '@clerk/clerk-sdk-node';

const router = express.Router();

// Your endpoint logic now lives here
// Note: The path is now '/users' because '/api/admin' is added in app.js
router.get('/users', ClerkExpressRequireAuth(), async (req, res) => {
  console.log('ACCESS GRANTED for user:', req.auth.userId);
  try {
    const users = await clerkClient.users.getUserList();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching users' });
  }
});

// Add more admin routes here in the future...
// router.get('/products', ...)
// router.post('/products', ...)

export default router;