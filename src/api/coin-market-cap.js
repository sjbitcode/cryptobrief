import axios from 'axios';


const COIN_MARKET_CAP_URL = 'https://api.coinmarketcap.com/v1/ticker';

export const fetchCoinMarketCap = (coinId) => {
  /*
    Returns a promise that resolves the data
    fetched from Coin Market Cap.
  */

  const url = `${COIN_MARKET_CAP_URL}/${coinId}/`;

  return new Promise((resolve, reject) => {
    axios
    .get(url)
    .then(res => resolve(res))
    .catch(err => reject(err))
  });
};
