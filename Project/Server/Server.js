
// 1. Setup and Configuration

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;
const path = require('path');
const saveFilePath = path.join(__dirname, 'savedGame.json');

app.use(cors());

// Middleware to parse JSON from requests
app.use(express.json());


// 2. Route to Save Game Data (POST /save)

app.post('/save', (req, res) => {
    const gameState = req.body;

    if (!gameState) {
        return res.status(400).json({ message: 'No game state provided.' });
    }

    fs.writeFile(saveFilePath, JSON.stringify(gameState, null, 2), (err) => {
        if (err) {
            console.error('❌ Error saving game:', err);
            return res.status(500).json({ message: 'Failed to save game.' });
        }

        console.log('✅ Game state saved!');
        res.status(200).json({ message: 'Game saved successfully.' });
    });
});



// 3. Route to Load Game Data (GET /load)
app.get('/load', (req, res) => {
    fs.readFile(saveFilePath,'utf8', (err, data) => {
        if (err || !data) {
            console.error('❌ Error loading game data:', err);
            return res.status(404).json({ error: 'No game data found' });
        }

        try {
            const gameData = JSON.parse(data);
            res.json(gameData);
        } catch (parseErr) {
            console.error('❌ Error parsing saved game data:', parseErr);
            res.status(500).json({ error: 'Failed to parse saved game data' });
        }
    });
});


// 4. Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
