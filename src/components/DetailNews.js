import React from 'react';
import PropTypes from 'prop-types';

import RefreshCoin from './RefreshCoin';


class DetailNews extends React.Component {
  state = {
    newCoin: false
  };

  static propTypes = {
    match: PropTypes.object,
    coins: PropTypes.object,
    addOrUpdateCoin: PropTypes.func
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const coinId = nextProps.match.params.coinId;
    const coins = nextProps.coins;

    if (!coins[coinId]) {
      nextProps.addOrUpdateCoin(coinId, false);
      return { newCoin: true };
    }
    else {
      return null;
    }
  }

  renderCoinInfo = (coinId) => {
    if (!this.props.coins[coinId]) { return null; }

    return (
      <React.Fragment>
        <p>Detail Page for {
            this.props.coins[coinId].displayName ? (
            this.props.coins[coinId].displayName
            ) : this.props.match.params.coinId
          }
        </p>
        <p>Price: {
            this.props.coins[coinId].ticker_data ? (
            this.props.coins[coinId].ticker_data.price_usd
            ) : null
          }
        </p>
        <p>News: {
            this.props.coins[coinId].news_data ? (
            this.props.coins[coinId].news_data.article_count
            ) : null
          }
        </p>
      </React.Fragment>
    );
  };

  renderCoinInfoWrapper = (coinId) => {

    return (
      <React.Fragment>
        {
          this.state.newCoin ? (
            <i>Adding {coinId} to your list!</i>
          ) : null
        }
        {this.renderCoinInfo(coinId)}
      </React.Fragment>
    );
  };

  render() {
    const { params } = this.props.match;
    const { addOrUpdateCoin } = this.props;

    return (
      <div>
        {this.renderCoinInfoWrapper(params.coinId)}
        <RefreshCoin
          coinId={params.coinId}
          addOrUpdateCoin={addOrUpdateCoin}
        />
      </div>
    );
  }
}

export default DetailNews;
