const axios = require('axios');
const cheerio = require('cheerio');
const News = require('../models/News');

const scrapeTechNews = async () => {
  try {
    const { data } = await axios.get('https://techcrunch.com/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TechNewsAggregator/1.0)' },
    });
    const $ = cheerio.load(data);

    const articles = [];
    const seenUrls = new Set();

    $('.loop-card').each((i, element) => {
      const card = $(element);
      const headline = card.find('.loop-card__title').text().trim();
      const url = card.find('.loop-card__title a').attr('href');

      if (!headline || !url || seenUrls.has(url)) {
        return;
      }
      seenUrls.add(url);

      const category = card.find('.loop-card__cat').text().trim();
      const author = card.find('.loop-card__author').text().trim();

      const descriptionParts = [];
      if (category) descriptionParts.push(category);
      if (author) descriptionParts.push(`By ${author}`);
      const description = descriptionParts.join(' \u00b7 ');

      articles.push({
        source: 'TechCrunch',
        headline,
        description,
        summary: description,
        url,
      });
    });

    if (articles.length === 0) {
      console.warn('No articles found - the page structure may have changed.');
      return;
    }

    await News.deleteMany({});
    await News.insertMany(articles);
    console.log(`News data scraped and saved (${articles.length} articles).`);
  } catch (error) {
    console.error('Error scraping tech news:', error);
  }
};

module.exports = scrapeTechNews;
