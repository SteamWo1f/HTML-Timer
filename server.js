const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import the 'cors' middleware

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/log', (req, res) => {
    const message = req.query.message;
    fs.appendFile('log.txt', message + '\n', err => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
        } else {
            res.send('Log written successfully');
        }
    });
});

app.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}`);
});
