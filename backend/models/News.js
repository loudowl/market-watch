const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  source: { type: String, required: true },
  headline: { type: String, required: true },
  description: { type: String },
  summary: { type: String },
  url: { type: String, required: true }
}, { timestamps: true });

const News = mongoose.model('News', newsSchema);

module.exports = News;
