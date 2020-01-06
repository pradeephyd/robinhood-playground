let googleNewsAPI = require("google-news-json");
const { wordFlags } = require('../settings');

const cacheThis = require('./cache-this');

module.exports = cacheThis(async ticker => {
  const { items } = await googleNewsAPI.getNews(googleNewsAPI.SEARCH, ticker, "en-US");
  const twentyFourHrsMs = 1000 * 60 * 60 * 48;
  const recentNews = items
    .filter(result => result.created > Date.now() - twentyFourHrsMs)
    .filter(result => result.title.includes(ticker.toUpperCase()));

  strlog({ recentNews });
  const str = JSON.stringify(recentNews).toLowerCase();

  return {
    recentNews,
    wordFlags: wordFlags
      .filter(word => str.includes(word))
      .map(word => ['gnews', word].join(''))
  };
});