const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    // A unique URL-friendly ID for THIS blog post
    slug: {
        type: String,
        required: true,
        unique: true
    },
    // The slug for the DESTINATION this blog belongs to (e.g., 'thailand')
    destinationSlug: {
        type: String,
        required: true,
        trim: true
    },
    excerpt: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    // Let's stick with 'image' to match our code
    image: {
        type: String,
        required: true
    },
    // This is a great addition!
    author: {
        type: String,
        required: true,
        default: 'Dora Explorations'
    }
}, { 
    // This automatically adds createdAt and updatedAt fields.
    // Our code uses these to find the "latest" blog, so we don't need 'isLatest'.
    timestamps: true 
});

module.exports = mongoose.model('Blog', BlogSchema);