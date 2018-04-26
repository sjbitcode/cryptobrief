import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

import { getCoins, setCoins } from '../helpers/localCoins';


class App extends Component {
  state = {
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

  addCoin = (coinData) => {
    /* {name: 'some-coin', price: 212, news: 'Some news about some-coin'} */

    // if coin doesn't exist, then add. we don't want to overwrite existing coins here.
    if (!this.state.coins[coinData.name]) {
      // Take a copy of state
      const coins = { ...this.state.coins };

      // Construct new coin object and set
      const data = { price: coinData.price, news: coinData.news };
      coins[coinData['name']] = data;

      // Update state
      this.setState({ coins });
    }
  };

  updateCoin = (coinData) => {
    // Take a copy of state
    const coins = { ...this.state.coins };

    // Construct new coin object and set
    const data = { price: coinData.price, news: coinData.news };
    coins[coinData['name']] = data;

    // Update state
    this.setState({ coins });
  }

  removeCoin = (coinName) => {
    const coins = { ...this.state.coins };
    delete coins[coinName];
    this.setState({ coins });
  };

  render() {
    return (
      <div>
        <Header addCoin={this.addCoin} />
        <Main coins={this.state.coins} updateCoin={this.updateCoin} removeCoin={this.removeCoin} addCoin={this.addCoin} />
      </div>
    );
  }
}

export default App;
