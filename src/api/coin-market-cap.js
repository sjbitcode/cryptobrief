import axios from 'axios';


const COIN_MARKET_CAP_URL = 'https://api.coinmarketcap.com/v1/ticker/';

export const fetchCoinMarketCap = (coinName) => {
  return new Promise((resolve, reject) => {
    axios
    .get(`${COIN_MARKET_CAP_URL}/${coinName}/`)
    .then(res => resolve(res))
    .catch(err => reject(err))
  });
};
