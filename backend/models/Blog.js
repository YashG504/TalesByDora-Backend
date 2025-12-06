const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    destinationSlug: {
        type: String,
        required: true,
        trim: true,
        index: true
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
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Dora Explorations'
    }
}, { 
    timestamps: true 
});

BlogSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Blog', BlogSchema);
