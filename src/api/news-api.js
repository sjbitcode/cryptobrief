import axios from 'axios';

import { encodeURICoinName, generateQueryString, getDate } from './helpers';


const NEWS_API_KEY = '2a9d72d89d8f41c29edb4fa7964982eb';

const NEWS_API_URL = 'https://newsapi.org/v2/everything'

const NEWS_API_SOURCES = [
  'google-news',
  'cnbc',
  'financial-times',
  'bloomberg',
  'independent',
  'business-insider',
  'crypto-coins-news',
  'financial-post',
  'techcrunch',
  'the-new- york-times',
  'time',
  'usa-today',
  'the-washington-times',
  'the-wall-street-journal',
  'wired',
  'the-huffington-post',
  'techradar',
  'techcrunch',
  'the-economist',
  'reuters',
  'newsweek',
  'google-news-uk',
  'google-news-ca',
  'cnn',
  'abc-news'
];

const newsApiQueryStringData = {
  apiKey: NEWS_API_KEY,
  q: '',
  sources: NEWS_API_SOURCES.join(','),
  from: '',
  to: '',
  language: 'en',
  sortBy: 'relevancy',
  pageSize: 10
};

export const fetchNewsApi = (coinName) => {
  const newsApiData = newsApiQueryStringData;
  newsApiData.to = getDate();
  newsApiData.from = getDate(-7);
  newsApiData.q = encodeURICoinName(coinName);
  const url = NEWS_API_URL + '?' + generateQueryString(newsApiData);

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => resolve(res))
      .catch(err => reject(err))
  });
};