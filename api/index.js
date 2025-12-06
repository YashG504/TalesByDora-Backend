// api/index.js - CORRECTED VERSION

import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'; // Use this for dotenv

// Import your route files - IMPORTANT: add the .js extension
import apiRoutes from '../backend/routes/api.js';
import itinerariesRoutes from '../backend/routes/itineraries.js';
import blogsRoutes from '../backend/routes/blogs.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use(compression());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully.");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});

app.use('/api', apiRoutes);
app.use('/api/itineraries', itinerariesRoutes);
app.use('/api/blogs', blogsRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is running' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Export the app for Vercel
export default app;