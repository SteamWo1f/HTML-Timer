const express = require('express');
const fs = require('fs');
const app = express();

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

app.listen(3000, () => console.log('Server listening on port 3000'));