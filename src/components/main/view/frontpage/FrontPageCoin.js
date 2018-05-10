import React from 'react';
import PropTypes from 'prop-types';

import { epochToDate, formatISODate } from '../../../../api/helpers';


class FrontPageCoin extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    details: PropTypes.object
  };

  renderTickerData = (coinObj) => {
    const { ticker_data } = coinObj;

    return (
      <div>
        <p>symbol: {ticker_data.symbol}</p>
        <p>rank: {ticker_data.rank}</p>
        <p>price_usd: {ticker_data.price_usd}</p>
        <p>price_btc: {ticker_data.price_btc}</p>
        <p>percent_change_24h: {ticker_data.percent_change_24h}</p>
        <p>last_updated: {formatISODate(epochToDate(ticker_data.last_updated), true)}</p>
      </div>
    );
  };

  renderNewsData = (coinObj) => {
    const { news_data } = coinObj;
    const first_article = news_data.articles[0] || null;

    return (
      <div>
        {
          first_article ?
          (
            <React.Fragment>
            <p>{news_data.articles.length} articles found</p>
            <strong>{first_article.title}</strong>
            <i>{first_article.source.name}</i>
            </React.Fragment>
          ) :
          <p>No articles at this moment!</p>
        }
        
      </div>
    );
  };

  render() {
    const { coin } = this.props;

    return (
      <div>
        <h3>{coin.displayName}</h3>
        {this.renderTickerData(coin)}
        {this.renderNewsData(coin)}
      </div>
    );
  }
}

export default FrontPageCoin;
