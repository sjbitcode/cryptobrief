import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

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

  addOrUpdateTickerData = (coinId, tickerData, update) => {
    /*
      Given a coin, some data, and an update flag,
      add or update the coins state with ticker data
      for an existing or newly added coin.
    */

    // Take a copy of state.
    const coins = { ...this.state.coins };

    // If we want to add new coin (don't update),
    // create new property in state and
    // define new property for ticker data.
    if (!update) {
      if (!coins[coinId]) {
        coins[coinId] = {};
      }
      else {
        console.log('coin exists...');
        return;
      }
      Object.defineProperty(coins[coinId], 'ticker_data', {
        value: {},
        writable: true,
        configurable: true
      });
    }

    // Update coin's ticker_data property to data passed in.
    coins[coinId]['ticker_data'] = tickerData;

    console.log(coins[coinId].ticker_data);

    // Update state
    this.setState({ coins });
  };

  addOrUpdateNewsData = (coinId, newsData, update) => {
    /*
      Given a coin, some data, and an update flag,
      add or update the coins state with news data
      for an existing or newly added coin.
    */

    // Take a copy of state
    const coins = { ...this.state.coins };

    // If we want to add new coin (don't update),
    // create new property in state and
    // define new property for news data.
    if (!update) {
      if (!coins[coinId]) {
        coins[coinId] = {};
      }
      else {
        console.log('coin exists...');
        return;
      }
      Object.defineProperty(coins[coinId], 'news_data', {
        value: {},
        writable: true,
        configurable: true
      });
    }
    coins[coinId]['news_data'] = newsData;

    console.log(coins[coinId].news_data);

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
    this.fetchTickerData(coinId, update);
    this.fetchNewsData(coinId, update);
  };

  removeCoin = (coinName) => {
    const coins = { ...this.state.coins };
    delete coins[coinName];
    this.setState({ coins });
  };

  getEth = () => {
    this.addOrUpdateCoin('ethereum', false);
  };

  render() {
    return (
      <div>
        <Header addCoin={this.addCoin} addOrUpdateCoin={this.addOrUpdateCoin}/>
        <Main coins={this.state.coins} updateCoin={this.updateCoin} removeCoin={this.removeCoin} addCoin={this.addCoin} addOrUpdateCoin={this.addOrUpdateCoin} />
        <button onClick={this.getEth}>Ethereum data</button>
      </div>
    );
  }
}

export default App;
