import React from 'react';
import PropTypes from 'prop-types';

import RefreshCoin from './RefreshCoin';
// import { generateCoinData } from '../api/crypto-compare';


class DetailNews extends React.Component {
  state = {
    newCoin: false
  };

  static propTypes = {
    match: PropTypes.object,
    coins: PropTypes.object,
    updateCoin: PropTypes.func,
    addCoin: PropTypes.func,
    addOrUpdateCoin: PropTypes.func,
    coinDisplayName: PropTypes.string
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const coinName = nextProps.match.params.coinname;
    const coins = nextProps.coins;

    if (!coins[coinName]) {
      // const coinData = generateCoinData(coinName);
      // nextProps.addCoin(coinData);
      nextProps.addOrUpdateCoin(coinName, true);
      return { newCoin: true };
    }
    else {
      return null;
    }
  }

  renderCoinInfo = (coinName) => {
    if (!this.props.coins[coinName]) { return null; }

    return (
      <React.Fragment>
        <p>Price: {
            this.props.coins[coinName].ticker_data ? (
            this.props.coins[coinName].ticker_data.price_usd
            ) : null
          }
        </p>
        <p>News: {
            this.props.coins[coinName].news_data ? (
            this.props.coins[coinName].news_data.article_count
            ) : null
          }
        </p>
      </React.Fragment>
    );
  };

  renderCoinInfoWrapper = (coinName) => {
    return (
      <React.Fragment>
        {
          this.state.newCoin ? (
            <i>Adding {coinName} to your list!</i>
          ) : null
        }
        {this.renderCoinInfo(coinName)}
      </React.Fragment>
    );
  };

  render() {
    const { params } = this.props.match;
    const { updateCoin } = this.props;

    return (
      <div>
        <p>Detail page for {params.coinname}</p>
        {this.renderCoinInfoWrapper(params.coinname)}
        <RefreshCoin
          updateCoin={updateCoin}
          coinName={params.coinname}
        />
      </div>
    );
  }
}

export default DetailNews;
