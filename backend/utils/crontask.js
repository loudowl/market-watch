const cron = require('node-cron');
const scrapeTechNews = require('./scraper');

cron.schedule('*/15 * * * *', () => {
  console.log('Running a task every 15 minutes');
  scrapeTechNews();
});
