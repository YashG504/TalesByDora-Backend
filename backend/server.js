// In: backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
    .then(() => console.log("MongoDB database connection established successfully."))
    .catch(err => console.error("MongoDB connection error:", err));

// --- Use your existing and new routes ---
app.use('/api', require('./routes/api'));

// --- THIS IS THE CRITICAL LINE ---
// Make sure this line exists and has no typos.
// It tells the server to use your itineraries.js file for any URL starting with /api/itineraries
app.use('/api/itineraries', require('./routes/itineraries'));
app.use('/api/blogs', require('./routes/blogs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
