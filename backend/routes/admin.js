import express from 'express';
import { ClerkExpressRequireAuth, clerkClient } from '@clerk/clerk-sdk-node';

const router = express.Router();

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


export default router;