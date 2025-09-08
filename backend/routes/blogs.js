const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// @route   GET /api/blogs
// @desc    Get latest and recent blogs (for general use)
// @access  Public
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        const latest = blogs[0];
        const recent = blogs.slice(1, 4);
        res.json({ latest, recent });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// NEW ROUTE FOR DESTINATIONS
// @route   GET /api/blogs/destination/:destinationSlug
// @desc    Get latest and recent blogs for a SPECIFIC destination
// @access  Public
router.get('/destination/:destinationSlug', async (req, res) => {
    try {
        const { destinationSlug } = req.params;

        // Find blogs that match the destinationSlug, sorted by newest first
        const blogs = await Blog.find({ destinationSlug: destinationSlug })
                                .sort({ createdAt: -1 });

        if (!blogs || blogs.length === 0) {
            return res.status(404).json({ msg: 'No blogs found for this destination' });
        }

        // Separate the latest from recent
        const latest = blogs[0];
        const recent = blogs.slice(1, 4);

        res.json({ latest, recent });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   GET /api/blogs/:id
// @desc    Get a single blog post by its ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        res.json(blog);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;