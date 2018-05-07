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

export const formatISODate = (ISOdate, time=false) => {
  /*
    Format ISO date to YYYY-MM-DD
  */

  const date = new Date(ISOdate);

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  if (!time) {
    return `${month}/${day}/${year}`;
  }
  else {
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const am_pm = date.getHours >= 12 ? 'AM' : 'PM';
    hours = hours < 10 ? '0' + hours : hours; 
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${am_pm}`;
  }
};

export const epochToDate = (epoch) => {
  /*
    Converts epoch time to localtime.
  */

  const date = new Date(epoch * 1000);

  const localOffset = date.getTimezoneOffset();
  const localTime = date.getTime();

  return new Date(localTime + localOffset);
};