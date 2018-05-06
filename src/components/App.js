import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

import coinList from '../coinList';
import { getCoins, setCoins } from '../helpers/localCoins';
import { fetchCoinMarketCap, fetchNewsApi } from '../api/crypto-compare';


class App extends Component {
  state = {
   coins: {}
  };

  coinTemplate = {
    displayName: '',
    newsDataIsLoading: false,
    news_data: {},
    tickerDataIsLoading: false,
    ticker_data: {},
  }

  componentDidMount() {
    /* 
      Set state from localStorage.
    */

    getCoins()
      .then((data) => { this.setState({ coins: data }); })
      .catch((data) => { console.error('!oops err ', data); });
  };

  componentDidUpdate() {
    /*
      Update localStorage with state.
    */

   setCoins(this.state.coins);
  };

  getCoinId = (coinName) => {
    /*
      Given a coin name, search for the corresponding
      coin's id from a list of coin objects.
    */

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
    /* 
      Given a coin id, search for the corresponding
      coin's name from a list of coin objects.
    */

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

  ensureCoinProperty = (coinId, propertyName, propertyValue) => {
    /*
      This function ensures that an object exists for a given coin id.
      It then sets the given property on the coinId object.
    */

    let { coins } = this.state;
    if (!coins[coinId]) {
      coins[coinId] = { ...this.coinTemplate };
    }

    this.setState({
      coins: {
        ...coins,
        [coinId]: {
          ...coins[coinId],
          [propertyName]: propertyValue,
        }
      }
    });
  }

  setCoinDisplayName = (coinId, update) => {
    /*
      Given a coin id, return a promise that
      sets the display name if not updating.
    */

    return new Promise((resolve, reject) => {
      if (update) {
        return resolve();
      }
      this.ensureCoinProperty(coinId, 'displayName', this.getCoinName(coinId));
      resolve();
    });
  };

  toggleTickerDataLoading = (coinId, loading) => {
    /*
      Given a coin id, toggle the 'tickerDataIsLoading' property.
    */

    this.ensureCoinProperty(coinId, 'tickerDataIsLoading', loading);
  };
  
  toggleNewsDataLoading = (coinId, loading) => {
    /*
      Given a coin id, toggle the 'newsDataIsLoading' property.
    */

    this.ensureCoinProperty(coinId, 'newsDataIsLoading', loading);
  };

  addOrUpdateTickerData = (coinId, tickerData, update) => {
    /*
      Given a coin id, update the ticker data information for a specific coin id.
    */

    this.ensureCoinProperty(coinId, 'ticker_data', tickerData);
  };

  addOrUpdateNewsData = (coinId, newsData, update) => {
    /*
      Given a coin id, update the news data information for a specific coin id.
    */

    this.ensureCoinProperty(coinId, 'news_data', newsData);
  };

  fetchTickerData = (coinId, update) => {
    /*
      Given a coin id,
      toggle loading value and 
      and add or update coin with ticker data.
    */

    this.toggleTickerDataLoading(coinId, true);
    fetchCoinMarketCap(coinId)
    .then(data => {
      this.addOrUpdateTickerData(coinId, data.data[0], update);
    })
    .catch(err => console.log(err));
  };

  fetchNewsData = (coinId, update) => {
    /*
      Given a coin id,
      toggle loading value and
      and add or update coin with news data.
    */

    this.toggleNewsDataLoading(coinId, true);
    fetchNewsApi(coinId)
    .then(data => {
      this.addOrUpdateNewsData(coinId, data, update);
    })
    .catch(err => console.error(err));
  };

  addOrUpdateCoin = (coinId, update=true) => {
    /*
      Given a coin id,
      add or update the coin to state.

      Set display name, and fetch and store
      data from api's.
    */

    this.setCoinDisplayName(coinId, update)
    .then(res => {
      this.fetchTickerData(coinId, update);
      this.fetchNewsData(coinId, update);
    })
    .catch(err => console.error(err));
    
  };

  removeCoin = (coinName) => {
    /*
      Remove a coin from state.
    */

    const coins = { ...this.state.coins };
    delete coins[coinName];
    this.setState({ coins });
  };

  render() {
    return (
      <div>
        <Header coins={this.state.coins} getCoinId={this.getCoinId} addOrUpdateCoin={this.addOrUpdateCoin}/>
        <Main coins={this.state.coins} removeCoin={this.removeCoin} getCoinName={this.getCoinName} addOrUpdateCoin={this.addOrUpdateCoin} />
      </div>
    );
  }
}

export default App;
