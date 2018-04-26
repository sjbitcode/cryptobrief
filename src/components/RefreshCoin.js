import React from 'react';
import PropTypes from 'prop-types';

import { generateCoinData } from '../api/crypto-compare';


class RefreshCoin extends React.Component {
  static propTypes = {
    updateCoin: PropTypes.func,
    coinName: PropTypes.string
  };

  refreshData = event => {
    event.preventDefault();

    const coinData = generateCoinData(this.props.coinName);
    this.props.updateCoin(coinData);
  };

  render() {
    return (
      <form onSubmit={this.refreshData}>
        <button type="submit">Refresh</button>
      </form>
    );
  }
}

export default RefreshCoin;
