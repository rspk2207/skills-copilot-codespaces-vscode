// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use body-parser to parse the incoming data
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Array to store comments
let comments = [];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});