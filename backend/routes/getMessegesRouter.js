import express from "express";
// Add this line to import your model
import ContactSubmission from "../models/Contact_Submission.js";

const router = express.Router();

// GET all submissions
router.get('/submissions', async (req, res) => {
    try {
        // This line will now work
        const submissions = await ContactSubmission.find();
        res.status(200).json(submissions);
    } catch (error) {
        console.error('Error retrieving submissions:', error);
        res.status(500).json({ message: 'Server error: Could not retrieve submissions' });
    }
});

router.delete('/submission/:id', async (req, res) => {
    try {
        // Get the ID from the URL parameters
        const { id } = req.params;

        // Find the document by its ID and delete it
        const deletedSubmission = await ContactSubmission.findByIdAndDelete(id);

        // If no document was found with that ID
        if (!deletedSubmission) {
            return res.status(404).json({ message: 'Submission not found' });
        }

        // Send a success message back
        res.status(200).json({ message: 'Submission deleted successfully' });

    } catch (error) {
        console.error('Error deleting submission:', error);
        
        // Handle cases where the ID format is invalid
        if (error.name === 'CastError') {
             return res.status(400).json({ message: 'Invalid submission ID format' });
        }
        
        res.status(500).json({ message: 'Server error: Could not delete submission' });
    }
});

export default router;