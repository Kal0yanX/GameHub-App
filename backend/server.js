// server.js
const express = require('express');
const dotenv = require('dotenv');
const scores = require("./data/scores"); // Import the scores data

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is running..");
});

app.get('/api/scores', (req, res) => {
    res.json(scores);
});

app.get('/api/scores/:id', (req, res) => { // Use ':id' as the route parameter
    const score = scores.find((n) => n.id === req.params.id);
    res.json(score); // Change res.send to res.json to send JSON data
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));