// models/Page.js
const mongoose = require('mongoose');

// This schema defines the structure for your page data in MongoDB.
// It is designed to be flexible and will accept all the nested JSON data you have.
const PageSchema = new mongoose.Schema({
    pageIdentifier: {
        type: String,
        required: true,
        unique: true
    },
    headline: String,
    backgroundImageUrl: String,
    infoCards: Array,
    KnowBefore: Object,
    page3: Object,
    PlacesToExplore: Array,
    WhyChooseUs: Object,
    Testimonials: Object,
    FAQS: Array,
    OtherDestination: Array,
    Blogs: Array,
}, {
    // This option allows for fields not explicitly defined in the schema
    // which is useful for complex, nested objects.
    strict: false
});

// Export the model so it can be used in other files (like your routes)
module.exports = mongoose.model('Page', PageSchema);
