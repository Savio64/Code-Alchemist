const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fraudAI = require('./fraudAI');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint: Detect Fraud
app.post('/api/detect', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    // Simulate a slight AI processing delay for effect (optional, but feels more "real")
    setTimeout(() => {
        const result = fraudAI.detectFraud(text);
        res.json(result);
    }, 500);
});

// API Endpoint: Live Stats (Mock Data for "Live Dashboard" feel)
app.get('/api/stats', (req, res) => {
    res.json({
        messagesScanned: 12543 + Math.floor(Math.random() * 10),
        scamsBlocked: 4320 + Math.floor(Math.random() * 5),
        activeUsers: 842
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Safenet Server running on http://localhost:${PORT}`);
});
