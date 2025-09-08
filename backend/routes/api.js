const express = require('express');
const router = express.Router();
const Page = require('../models/Page'); 
const Inquiry = require('../models/Inquiry');
const { Resend } = require('resend');

// Ensure your environment variables are loaded
require('dotenv').config(); 

// IMPORTANT: Use your new, secret API key from your .env file
const resend = new Resend(process.env.RESEND_API_KEY);


// --- TEMPORARY DEBUGGING ROUTE (Unchanged) ---
router.get('/page/:identifier', async (req, res) => {
    try {
        console.log("--- RUNNING DATABASE TEST ---");
        const documentCount = await Page.countDocuments({});
        console.log(`Found ${documentCount} documents in the 'pages' collection.`);

        if (documentCount > 0) {
            const pageData = await Page.findOne({ pageIdentifier: req.params.identifier });
            if (!pageData) {
                console.log(`ERROR: Could not find document with pageIdentifier: "${req.params.identifier}". Check for typos in the database.`);
                return res.status(404).json({ message: "Database is connected, but the specific document was not found. Check for typos." });
            }
            console.log("SUCCESS: Found and returned the document.");
            return res.status(200).json(pageData);
        } else {
            console.log("ERROR: The 'pages' collection is empty or does not exist.");
            return res.status(404).json({ message: "Connected to database, but the 'pages' collection is empty." });
        }
    } catch (error) {
        console.error("A critical error occurred:", error);
        res.status(500).json({ message: "Server error during database test." });
    }
});
// --- END OF TEMPORARY ROUTE ---


// --- UPDATED INQUIRY SUBMISSION ROUTE ---
router.post('/inquiries/submit', async (req, res) => {
    const { name, date, contact, email } = req.body;

    if (!name || !date || !contact || !email) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    try {
        // 1. Save to database
        const newInquiry = new Inquiry({ name, date, contact, email });
        await newInquiry.save();
        console.log('Inquiry saved to database successfully!');
        
        // 2. Send email with Resend
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
        console.log('Confirmation email sent successfully!');

        res.status(200).json({ message: "Your inquiry has been sent!" });

    } catch (error) {
        console.error("Error during form submission:", error);
        res.status(500).json({ message: "An error occurred while processing your request." });
    }
});

module.exports = router;