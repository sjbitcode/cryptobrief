import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';
import MainView from './view/MainView';


class Main extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired,
    removeCoin: PropTypes.func.isRequired,
    getCoinName: PropTypes.func.isRequired,
    getCoinId: PropTypes.func.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <Search coins={this.props.coins} getCoinId={this.props.getCoinId} addOrUpdateCoin={this.props.addOrUpdateCoin} />
        <MainView coins={this.props.coins} addOrUpdateCoin={this.props.addOrUpdateCoin} removeCoin={this.props.removeCoin} getCoinName={this.props.getCoinName} />
      </React.Fragment>
    );
  }
};

export default Main;