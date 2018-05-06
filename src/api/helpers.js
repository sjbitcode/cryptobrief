export const generateQueryString = (obj) => {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');
};

export const encodeURICoinName = (coinName) => {
  return '+' + encodeURI(coinName.toLowerCase());
};

export const getDate = (daysOffset = 0) => {
  let date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  date.setDate(date.getDate() + daysOffset);
  date = date.toISOString().split('.')[0];
  return date;
};