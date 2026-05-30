const News = require('../models/News');

exports.getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json({ news });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
