const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const connectionString = 'mongodb+srv://lavenderbd:8RlV8tczen0teUF0@stardewtracker.eqmhakf.mongodb.net/?retryWrites=true&w=majority&appName=StardewTracker';
const PORT = 5002;
const API_BASE_URL = 'http://localhost:5002';
const app = express();

app.use(cors());
app.use(express.json());

const path = require('path');
const { type } = require('os');
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const itemSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    additionalInfo: String,
    season: [String],
    userId: String,
    checked: { type: Boolean, default: false }
});

const BundleItem = mongoose.model('bundleItem', itemSchema);

app.get('/api/items/:season', async (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});