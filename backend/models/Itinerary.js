// In: backend/models/Itinerary.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the structure for a single day in the itinerary
const daywiseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { _id: false }); // _id is not needed for subdocuments

const itinerarySchema = new Schema({
    name: { type: String, required: true },
    // This field connects the itinerary to a destination like "dubai" or "maldives"
    destination: { type: String, required: true, index: true },
    desire: { type: String },
    price: { type: String, required: true },
    time: { type: String, required: true }, // e.g., "5 Days 4 Nights"
    description: { type: String, required: true },
    // A flexible object to hold day-by-day plans
    daywise: { type: Map, of: daywiseSchema },
    highlights: [String], // An array of strings
    images: [String],     // An array of image URLs
    
    // --- Fields from your frontend code ---
    rating: { type: Number },
    category: { type: String }, // e.g., "Family,Adventure"
    days: { type: String },
    nights: { type: String },
    numberOfRating: { type: String }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
