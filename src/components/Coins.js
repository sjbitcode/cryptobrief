import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import coinList from '../coinList';


class Coins extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    coins: PropTypes.object.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  handleClick = (coinId, exists=false, event) => {
    /*
      Given a coin id, add coin depending
      on if it exists and redirect to Detail view.
    */

    event.preventDefault();
    if (!exists) {
      this.props.addOrUpdateCoin(coinId, false);
    }
    this.props.history.push(`/coin/${coinId}`);
  };

  renderCoinElement = (obj) => {
    /*
      Render all coins from coin list.
      If a coin exists in state, apply a special style.
    */

    // special style for button that represent an existing coin.
    const divStyle = {
      color: 'white',
      backgroundColor: 'red',
      margin: '10px 0',
      fontWeight: 'bold'
    };

    if (obj.id in this.props.coins) {
      return (
        <button onClick={(event) => this.handleClick(obj.id, true, event)} key={obj.id} style={divStyle}>
          <div>{obj.name} ({obj.symbol})</div>
        </button>
      );
    }
    else {
      return (
        <button onClick={(event) => this.handleClick(obj.id, false, event)} key={obj.id}>
          <div>{obj.name} ({obj.symbol})</div>
        </button>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {coinList.map(obj => this.renderCoinElement(obj))}
      </React.Fragment>
    );
  }
};

export default withRouter(Coins);
