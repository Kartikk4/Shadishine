const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

app.get('/services', (req, res) => {
    res.send('List of services');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});