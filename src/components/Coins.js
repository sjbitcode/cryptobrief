import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import coinList from '../coinList';


class Coins extends React.Component {
  static propTypes = {
    coins: PropTypes.object
  };

  renderCoinElement = (obj) => {
    const divStyle = {
      color: 'white',
      backgroundColor: 'red',
      margin: '10px 0',
      fontWeight: 'bold'
    };

    if (obj.id in this.props.coins) {
      return (
        <Link to={`/coin/${obj.id}`} key={obj.id}>
          <div key={obj.id} style={divStyle}>{obj.name} ({obj.symbol})</div>
        </Link>
      );
    }
    else {
      return (
        <Link to={`/coin/${obj.id}`} key={obj.id}>
          <div key={obj.id}>{obj.name} ({obj.symbol})</div>
        </Link>
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

export default Coins;
