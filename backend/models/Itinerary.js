const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daywiseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { _id: false });

const itinerarySchema = new Schema({
    name: { type: String, required: true },
    destination: { type: String, required: true, index: true },
    desire: { type: String },
    price: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true },
    daywise: { type: Map, of: daywiseSchema },
    highlights: [String],
    images: [String],
    rating: { type: Number },
    category: { type: String, index: true },
    days: { type: String },
    nights: { type: String },
    numberOfRating: { type: String }
}, { timestamps: true });

itinerarySchema.index({ createdAt: -1 });

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
