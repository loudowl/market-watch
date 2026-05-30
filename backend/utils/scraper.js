const axios = require('axios');
const cheerio = require('cheerio');
const News = require('../models/News');

const scrapeTechNews = async () => {
  try {
    const { data } = await axios.get('https://techcrunch.com/');
    const $ = cheerio.load(data);

    const articles = [];
    $('.post-block').each((i, element) => {
      const source = 'TechCrunch';
      const headline = $(element).find('.post-block__title__link').text().trim();
      const description = $(element).find('.post-block__content').text().trim();
      const summary = description.substring(0, 150) + '...';
      const url = $(element).find('.post-block__title__link').attr('href');

      articles.push({ source, headline, description, summary, url });
    });

    await News.deleteMany({});
    await News.insertMany(articles);
    console.log('News data scraped and saved.');
  } catch (error) {
    console.error('Error scraping tech news:', error);
  }
};

module.exports = scrapeTechNews;
