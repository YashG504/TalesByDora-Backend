const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configure CORS for production
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? process.env.FRONTEND_URL || 'https://your-vercel-app.vercel.app'
        : 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

// MongoDB connection with connection pooling for serverless
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    
    cached.conn = await cached.promise;
    return cached.conn;
}

// Import routes
const apiRoutes = require('../backend/routes/api');
const itinerariesRoutes = require('../backend/routes/itineraries');
const blogsRoutes = require('../backend/routes/blogs');

// API endpoint handler
app.use('/api', async (req, res, next) => {
    await connectDB();
    next();
});

// Routes
app.use('/api', apiRoutes);
app.use('/api/itineraries', itinerariesRoutes);
app.use('/api/blogs', blogsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is running on Vercel' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Export for Vercel
module.exports = app;