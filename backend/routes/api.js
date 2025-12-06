// routes/api.js - UPDATED TO ES MODULE SYNTAX

import express from 'express';
import Page from '../models/Page.js';      // Note: Add .js extension for local files
import Inquiry from '../models/Inquiry.js';  // Note: Add .js extension for local files
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const inquiryLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per window
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many inquiries created from this IP, please try again after 15 minutes',
});

// GET route for page data
router.get('/page/:identifier', async (req, res) => {
    try {
        const pageData = await Page.findOne({ pageIdentifier: req.params.identifier }).lean();
        if (!pageData) {
            return res.status(404).json({ message: "Document was not found." });
        }
        return res.status(200).json(pageData);
    } catch (error) {
        console.error("A critical error occurred:", error);
        res.status(500).json({ message: "Server error during database query." });
    }
});

// POST route for form submissions
router.post('/inquiries/submit', inquiryLimiter, async (req, res) => {
    const { name, date, contact, email } = req.body;

    if (!name || !date || !contact || !email) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    try {
        const newInquiry = new Inquiry({ name, date, contact, email });
        await newInquiry.save();
        
        await resend.emails.send({
            from: `Inquiry Form <${process.env.SENDER_EMAIL}>`,
            to: [process.env.DESTINATION_EMAIL],
            subject: `New Travel Inquiry from ${name}`,
            html: `
                <h1>New Travel Inquiry</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Preferred Date:</strong> ${date}</p>
                <p><strong>Contact Number:</strong> ${contact}</p>
                <p><strong>Email:</strong> ${email}</p>
            `,
        });

        res.status(200).json({ message: "Your inquiry has been sent!" });

    } catch (error) {
        console.error("Error during form submission:", error);
        res.status(500).json({ message: "An error occurred while processing your request." });
    }
});

export default router; // <-- The new way to export