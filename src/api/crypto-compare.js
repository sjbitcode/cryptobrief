import axios from 'axios';


const COIN_MARKET_CAP = 'https://api.coinmarketcap.com/v1/ticker/';
// const NEWS_API_KEY = '2a9d72d89d8f41c29edb4fa7964982eb';

const getRandomInt = (min, max) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const generateCoinData = (coinName) => {
  return {
    name: coinName,
    price_usd: getRandomInt(20, 100)
  };
};

export const fetchCoinMarketCap = (coinName) => {
  return new Promise((resolve, reject) => {
    console.log('FETCH COINMARKETCAP');
    axios
    .get(`${COIN_MARKET_CAP}/${coinName}/`)
    .then(res => resolve(res))
    .catch(err => reject(err))
  });
}

export const fetchNewsApi = (coinName) => {
  const article_count = getRandomInt(1, 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('FETCH NEWSAPI');
      resolve({article_count: article_count, news_source: 'Google News'});
    }, 1500);
  })
}
