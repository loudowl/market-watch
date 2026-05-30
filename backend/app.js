const express = require('express');
const mongoose = require('mongoose');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
app.use(express.json());

app.use('/api/news', newsRoutes);

module.exports = app;
