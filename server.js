const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongodb = require('mongodb');  // on GitHub it is { ServerDescriptionChangedEvent }

const connectionString = 'mongodb+srv://lavenderbd:8RlV8tczen0teUF0@stardewtracker.eqmhakf.mongodb.net/?retryWrites=true&w=majority&appName=StardewTracker';
const PORT = 5002;
const API_BASE_URL = 'http://localhost:5002';
const app = express();