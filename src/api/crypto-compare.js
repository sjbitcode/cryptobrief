function getRandomInt(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function generateCoinData(coinName) {
  return {
    name: coinName,
    price: getRandomInt(20, 100),
    news: `Some new things in store for ${coinName}`
  };
}

export function initialNews() {
  return {
    bitcoin: {
      price: 8800,
      news: 'Bitcoin is going really good'
    },

    ethereum: {
      price: 580,
      news: 'Ethereum may take off in 2 days!'
    },

    ripple: {
      price: 0.78,
      news: 'Ripple set to be listed on 10 more exchanges...'
    }
  };
}