import express from 'express';
// Add the .js extension to the file import
import ContactSubmission from '../models/Contact_Submission.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        const newSubmission = new ContactSubmission(req.body);

        const savedSubmission = await newSubmission.save();

        res.status(201).json(savedSubmission)
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        // For other errors
        console.error('Error saving contact submission:', error);
        res.status(500).json({ message: 'Server error: Could not save submission' });
    }
})

export default router;
