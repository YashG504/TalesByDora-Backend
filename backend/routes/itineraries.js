const router = require('express').Router();
const mongoose = require('mongoose');
const Itinerary = require('../models/Itinerary'); // Make sure this path is correct

// ✅ --- SOLUTION: The most specific route MUST come first ---
// This route correctly finds a SINGLE itinerary by its unique MongoDB _id.
router.get('/id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // This check ensures the ID is in the correct format before querying the database.
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid itinerary ID format.' });
        }
        const itinerary = await Itinerary.findById(id);
        if (!itinerary) {
            return res.status(404).json({ message: 'Itinerary not found.' });
        }
        res.json(itinerary);
    } catch (error) {
        console.error('Error fetching single itinerary:', error);
        res.status(500).json({ message: 'Server error.' });
    }
});


// ✅ This more general route for filtering comes AFTER the specific one.
// It finds ALL itineraries that match a destination or desire.
router.get('/:filter', async (req, res) => {
    try {
        const { filter } = req.params;
        const regex = new RegExp(filter, 'i'); // Case-insensitive search
        const itineraries = await Itinerary.find({
            $or: [{ destination: regex }, { desire: regex }]
        });
        res.json(itineraries);
    } catch (error) {
        console.error('Error fetching itineraries by filter:', error);
        res.status(500).json({ message: 'Server error while fetching itineraries.' });
    }
});

module.exports = router;