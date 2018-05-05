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
    const coinName = nextProps.match.params.coinname;
    const coins = nextProps.coins;

    if (!coins[coinName]) {
      nextProps.addOrUpdateCoin(coinName, false);
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
        <p>Detail Page for {
            this.props.coins[coinName].displayName ? (
            this.props.coins[coinName].displayName
            ) : this.props.match.params.coinname
          }
        </p>
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
    const { addOrUpdateCoin } = this.props;

    return (
      <div>
        {/* <p>Detail page for {params.coinname}</p> */}
        {this.renderCoinInfoWrapper(params.coinname)}
        <RefreshCoin
          coinName={params.coinname}
          addOrUpdateCoin={addOrUpdateCoin}
        />
      </div>
    );
  }
}

export default DetailNews;
