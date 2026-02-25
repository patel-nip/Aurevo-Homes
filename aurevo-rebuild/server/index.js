const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// ---- Middleware ----
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- Routes ----
app.use('/api/contact', contactRouter);

// ---- Health check ----
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// ---- 404 handler ----
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// ---- Global error handler ----
app.use((err, req, res, next) => {
    console.error('💥 Unhandled error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
});

// ---- Start ----
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
