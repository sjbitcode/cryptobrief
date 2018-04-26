const getRandomInt = (min, max) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const generateCoinData = (coinName) => {
  return {
    name: coinName,
    price: getRandomInt(20, 100),
    news: `Some new things in store for ${coinName}`
  };
};
