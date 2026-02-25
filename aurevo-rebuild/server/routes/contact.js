const express = require('express');
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');
require('dotenv').config();

// ---- Email transporter (optional — works without it too) ----
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

// ---- POST /api/contact ----
router.post('/', async (req, res) => {
    const { name, company, phone, email, service } = req.body;

    // Basic validation
    if (!name || !phone || !email || !service) {
        return res.status(400).json({
            message: 'Please fill in all required fields.',
        });
    }

    try {
        // 1. Save to database
        await db.execute(
            `INSERT INTO inquiries (name, company, phone, email, service)
       VALUES (?, ?, ?, ?, ?)`,
            [name, company || null, phone, email, service]
        );

        // 2. Send notification email to owner (optional)
        try {
            await transporter.sendMail({
                from: `"Aurevo Website" <${process.env.MAIL_USER}>`,
                to: process.env.MAIL_TO,
                subject: `New Inquiry from ${name}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td>
                <td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Company</strong></td>
                <td style="padding:8px;border:1px solid #ddd">${company || '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone</strong></td>
                <td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td>
                <td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Service</strong></td>
                <td style="padding:8px;border:1px solid #ddd">${service}</td></tr>
          </table>
        `,
            });
        } catch (mailErr) {
            // Email failure should NOT block the response
            console.warn('⚠️ Email notification failed:', mailErr.message);
        }

        // 3. Success response
        return res.status(201).json({
            message: 'Thank you! We will get back to you shortly.',
        });

    } catch (err) {
        console.error('❌ Contact form error:', err.message);
        return res.status(500).json({
            message: 'Something went wrong. Please try again.',
        });
    }
});

module.exports = router;
