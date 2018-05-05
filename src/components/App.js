import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

import coinList from '../coinList';
import { getCoins, setCoins } from '../helpers/localCoins';
import { fetchCoinMarketCap, fetchNewsApi } from '../api/crypto-compare';


class App extends Component {
  state = {
    /*
      {
        bitcoin: {ticker_data: {}, news_data: {}},
        ethereum: {ticker_data: {}, news_data: {}},
        ....
      }
    */
   coins: {}
  };

  componentDidMount() {
    getCoins()
      .then((data) => { this.setState({ coins: data }); })
      .catch((data) => { console.error('!oops err ', data); });
  };

  componentDidUpdate() {
    setCoins(this.state.coins);
  };

  getCoinId = (coinName) => {
    let coinId = '';

    try {
      const coinObj = coinList.find(obj => obj.name === coinName);
      coinId = coinObj.id;
    }
    catch (err) {
      coinId = coinName.trim().toLowerCase();
    }

    return coinId;
  };

  getCoinName = (coinId) => {
    let coinDisplayName = '';

    try {
      const coinObj = coinList.find(obj => obj.id === coinId);
      coinDisplayName = coinObj.name;
    }
    catch (err) {
      coinDisplayName = coinId
                        .trim()
                        .toLowerCase()
                        .split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
    }

    return coinDisplayName;
  };

  setCoinNameProperty = (coinId, update) => {
    const coins = { ...this.state.coins };

    if (!update) {
      if (!coins[coinId]) {
        coins[coinId] = {};

        Object.defineProperty(coins[coinId], 'displayName', {
          value: this.getCoinName(coinId),
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      else {
        console.log('coin exists...');
      }
    }

    this.setState({ coins });
  };

  addOrUpdateTickerData = (coinId, tickerData, update) => {
    /*
      Given a coin, some data, and an update flag,
      add or update the coins state with ticker data
      for an existing or newly added coin.
    */
    const coins = { ...this.state.coins };

    // If we want to add new coin (don't update),
    // create new property in state and
    // define new property for ticker data.
    if (!update) {
      if (!coins[coinId]) {
        coins[coinId] = {};

        Object.defineProperty(coins[coinId], 'ticker_data', {
          value: {},
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      else {
        console.log('coin exists...');
      }
    }
    coins[coinId]['ticker_data'] = tickerData;
    // Update state
    this.setState({ coins });
  };

  addOrUpdateNewsData = (coinId, newsData, update) => {
    /*
      Given a coin, some data, and an update flag,
      add or update the coins state with news data
      for an existing or newly added coin.
    */
    const coins = { ...this.state.coins };

    // If we want to add new coin (don't update),
    // create new property in state and
    // define new property for news data.
    if (!update) {
      if (!coins[coinId]) {
        coins[coinId] = {};

        Object.defineProperty(coins[coinId], 'news_data', {
          value: {},
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      else {
        console.log('coin exists...');
      }
    }
    coins[coinId]['news_data'] = newsData;
    // Update coin's news_data property to data passed in.
    this.setState({ coins });
  };

  fetchTickerData = (coinId, update) => {
    /*
      Fetch api data and update the state with ticker data.
    */
    fetchCoinMarketCap(coinId)
    .then(data => {
      this.addOrUpdateTickerData(coinId, data.data[0], update);
    })
    .catch(err => console.log(err));
  };

  fetchNewsData = (coinId, update) => {
    /*
      Fetch api data and update the state with news data.
    */
    fetchNewsApi(coinId)
    .then(data => {
      this.addOrUpdateNewsData(coinId, data, update);
    })
    .catch(err => console.log(err));
  };

  addOrUpdateCoin = (coinId, update=true) => {
    /*
      Wrapper function for ticker and news api fetch functions.
    */
    this.setCoinNameProperty(coinId, update);
    this.fetchTickerData(coinId, update);
    this.fetchNewsData(coinId, update);
  };

  removeCoin = (coinName) => {
    const coins = { ...this.state.coins };
    delete coins[coinName];
    this.setState({ coins });
  };

  render() {
    return (
      <div>
        <Header getCoinId={this.getCoinId} addOrUpdateCoin={this.addOrUpdateCoin}/>
        <Main coins={this.state.coins} removeCoin={this.removeCoin} addOrUpdateCoin={this.addOrUpdateCoin} />
      </div>
    );
  }
}

export default App;
