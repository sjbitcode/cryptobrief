import React from 'react';
import PropTypes from 'prop-types';


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
        <p>last_updated: {ticker_data.last_updated}</p>
      </div>
    );
  };

  renderNewsData = (coinObj) => {
    const { news_data } = coinObj;
    const first_article = news_data.articles[0];

    return (
      <div>
        <p>{news_data.articles.length} articles found</p>
        <strong>{first_article.title}</strong>
        <i>{first_article.source.name}</i>
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
