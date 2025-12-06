const mongoose = require('mongoose');

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
    strict: false
});

module.exports = mongoose.model('Page', PageSchema);
