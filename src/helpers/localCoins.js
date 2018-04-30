const key = 'coins';

// Get coins from localStorage.
const _getCoins = () => {
  return JSON.parse(localStorage.getItem(key)) || {};
}

export const getCoins = () => {
  return new Promise((resolve, reject) => {
    resolve(_getCoins());
  });
}

// Add coins to localStorage.
const _setCoins = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const setCoins = (data) => {
  return new Promise((resolve, reject) => {
    _setCoins(data);
  });
}
