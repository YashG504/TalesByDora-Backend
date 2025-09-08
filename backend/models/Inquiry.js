// models/Inquiry.js
const mongoose = require('mongoose');

// This schema defines the structure for each document
// that will be saved in our 'inquiries' collection.
const InquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String, // Storing as String as it comes from a date input
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the submission time
    },
});

// Export the model so we can use it in our API routes
module.exports = mongoose.model('Inquiry', InquirySchema);
