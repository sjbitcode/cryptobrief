export const generateQueryString = (obj) => {
  /*
    Generate a query string parameter from an object.
    ex. {q: 'hello', pageSize: 10} -> 'q=hello&pageSize=10'
  */

  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');
};

export const encodeURICoinName = (coinName) => {
  /*
    Given a coin name, URI encode the string and
    append a '+' at start of string.
  */

  return '+' + encodeURI(coinName.toLowerCase());
};

export const getDate = (daysOffset = 0) => {
  /*
    Returns an ISO 8601 formatted string (YYYY-MM-DDT00:00:00)
    representing a date, offset by some value.
  */

  let date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  date.setDate(date.getDate() + daysOffset);
  date = date.toISOString().split('.')[0];
  return date;
};