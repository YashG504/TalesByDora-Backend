const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }).limit(4).lean();
        const latest = blogs[0] || null;
        const recent = blogs.length > 1 ? blogs.slice(1, 4) : [];
        res.json({ latest, recent });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/destination/:destinationSlug', async (req, res) => {
    try {
        const { destinationSlug } = req.params;
        const blogs = await Blog.find({ destinationSlug: destinationSlug })
                                .sort({ createdAt: -1 })
                                .limit(4)
                                .lean();

        if (!blogs || blogs.length === 0) {
            return res.status(404).json({ msg: 'No blogs found for this destination' });
        }

        const latest = blogs[0];
        const recent = blogs.length > 1 ? blogs.slice(1, 4) : [];
        res.json({ latest, recent });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).lean();

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
