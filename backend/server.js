// backend/server.js - UPDATED TO ES MODULE SYNTAX

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import 'dotenv/config'; // Use this for dotenv

// Import your route files
import apiRoutes from './routes/api.js';
import itinerariesRoutes from './routes/itineraries.js';
import blogsRoutes from './routes/blogs.js';

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(helmet());
app.use(compression());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());

// --- Routes ---
app.use('/api', apiRoutes);
app.use('/api/itineraries', itinerariesRoutes);
app.use('/api/blogs', blogsRoutes);

// --- Health Check ---
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is running' });
});

// --- MongoDB Connection and Server Start ---
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
});

// Important: If you have a single handler for Vercel, you might need this
export default app;