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

export const generateNewsData = () => {
  return {
    article_count: getRandomInt(1, 10),
    news_source: 'Google News'
  }
};

export const fetchCoinMarketCapMock = (coinName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateCoinData(coinName));
    }, 1200);
  });
};

export const fetchNewsApiMock = (coinName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateNewsData());
    }, 1500);
  })
};