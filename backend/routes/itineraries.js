const router = require('express').Router();
const mongoose = require('mongoose');
const Itinerary = require('../models/Itinerary');

router.get('/id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid itinerary ID format.' });
        }
        const itinerary = await Itinerary.findById(id).lean();
        if (!itinerary) {
            return res.status(404).json({ message: 'Itinerary not found.' });
        }
        res.json(itinerary);
    } catch (error) {
        console.error('Error fetching single itinerary:', error);
        res.status(500).json({ message: 'Server error.' });
    }
});

router.get('/:filter', async (req, res) => {
    try {
        const { filter } = req.params;
        const regex = new RegExp(filter, 'i');
        const itineraries = await Itinerary.find({
            $or: [{ destination: regex }, { desire: regex }]
        }).lean();
        res.json(itineraries);
    } catch (error) {
        console.error('Error fetching itineraries by filter:', error);
        res.status(500).json({ message: 'Server error while fetching itineraries.' });
    }
});

module.exports = router;
